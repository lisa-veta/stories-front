import { ContentSideBar } from '@widgets/ContentSideBar';
import * as SC from './AccountPage.styles';
import { useState } from 'react';
import { CardPreview } from '@widgets/CardPreview';
import { useContentManager } from '@shared/lib/hooks';
import { Loader } from '@shared/ui/Loader/Loader';
import type {ContentPreview} from "@shared/api";

export const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('banners');
  const { content, loading, error } = useContentManager(activeTab);

  const getUniqueItemsById = (items : ContentPreview[]) => {
    return Array.from(new Map(items.map(item => [item.id, item])).values());
  };

  if (loading) {
    return (
      <SC.MainContainer>
        <ContentSideBar activeTab={activeTab} onTabChange={setActiveTab} />
        <SC.CenterContainer>
          <Loader/>
        </SC.CenterContainer>
      </SC.MainContainer>
    );
  }

  if (error) {
    return (
      <SC.MainContainer>
        <ContentSideBar activeTab={activeTab} onTabChange={setActiveTab} />
        <SC.ContentContainer>
          <div>Error: {error}</div>
        </SC.ContentContainer>
      </SC.MainContainer>
    );
  }

  return(
    <SC.MainContainer>
      <ContentSideBar activeTab={activeTab} onTabChange={setActiveTab} />
      <SC.ContentContainer>
        {getUniqueItemsById(content).map((item) => (
          <CardPreview
            key={item.id}
            id={item.id}
            title={item.title}
            publish_at={item.publish_at}
            unpublish_at={item.unpublish_at}
            author={item.created_by.username}
            status={item.status}
            {...(item.preview_url && { preview_url: item.preview_url })}
          />
        ))}
      </SC.ContentContainer>
    </SC.MainContainer>
  );
};
