import { ContentSideBar } from '@widgets/ContentSideBar';
import * as SC from './AccountPage.styles';
import { useState } from 'react';
import { CardPreview } from '@widgets/CardPreview';
import { useContentManager } from '@shared/lib/hooks';
import { Loader } from '@shared/ui/Loader/Loader';
import type { ContentPreview } from '@shared/api';
import { ControlPanel } from '@widgets/ControlPanel';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { AnalyticPanel } from '@widgets/AnaliticPanel';

export interface ContentFilters {
  projectTypes: string[];
  statuses: string[];
  dateRange: [string | null, string | null];
}
const CURRENT_USER_ID = 1;

export const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('banners');
  const { content, loading, error } = useContentManager(activeTab);
  const [filters, setFilters] = useState<ContentFilters>({
    projectTypes: ['my'],
    statuses: ['draft'],
    dateRange: [null, null],
  });

  const filterContent = (items: ContentPreview[]) => {
    return items.filter(item => {
      if (filters.projectTypes.length > 0) {
        const isMyProject = item.created_by.id === CURRENT_USER_ID;
        const isMySelected = filters.projectTypes.includes('my');
        const isOtherSelected = filters.projectTypes.includes('other');

        if (isMySelected && !isOtherSelected && !isMyProject) {return false;}
        if (!isMySelected && isOtherSelected && isMyProject) {return false;}
      }

      if (filters.statuses.length > 0 && !filters.statuses.includes(item.status)) {
        return false;
      }

      if (filters.dateRange[0] || filters.dateRange[1]) {
        const itemPublishDate = new Date(item.publish_at).getTime();
        const itemUnpublishDate = item.unpublish_at ? new Date(item.unpublish_at).getTime() : null;

        const filterStartDate = filters.dateRange[0] ? new Date(filters.dateRange[0]).getTime() : null;
        const filterEndDate = filters.dateRange[1] ? new Date(filters.dateRange[1]).getTime() : null;

        if (filterStartDate && itemUnpublishDate && itemUnpublishDate < filterStartDate) {
          return false;
        }
        if (filterEndDate && itemPublishDate > filterEndDate) {
          return false;
        }
      }

      return true;
    });
  };

  const getUniqueItemsById = (items : ContentPreview[]) => {
    return Array.from(new Map(items.map(item => [item.id, item])).values());
  };

  const filteredContent = filterContent(content);

  const tabs: TabsProps['items'] = [
    {
      key: '1',
      label: 'Проекты',
      children: (
        <>
          {loading ? (
            <SC.CenterContainer>
              <Loader/>
            </SC.CenterContainer>
          ) : (
            <SC.CardContainer>
              {getUniqueItemsById(filteredContent).map((item) => (
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
            </SC.CardContainer>
          )}
        </>
      ),
    },
    {
      key: '2',
      label: 'Временная шкала',
      children: (<AnalyticPanel items={filteredContent} />
      ),
    },
  ];

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
        <ControlPanel filters={filters} onFiltersChange={setFilters}/>
        <Tabs centered defaultActiveKey="1" items={tabs} />
      </SC.ContentContainer>
    </SC.MainContainer>
  );
};
