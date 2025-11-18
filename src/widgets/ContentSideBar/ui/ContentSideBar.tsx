import * as SC from './ContentSideBar.styles';
import { Button } from '@shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@shared/ui/Typography';
import { useState } from 'react';

import {
  SIDEBAR_CONTENT_ITEMS,
  SIDEBAR_CONTROL_ITEMS,
  SIDEBAR_SETTINGS_ITEMS,
  type SidebarItem,
} from '@widgets/ContentSideBar/config/items';


export const ContentSideBar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('banners');

  const handleClick = (item : SidebarItem) => {
    setActiveTab(item.value);
    navigate(item.path);
  };

  return(
    <SC.ContentSideBarStyles>
      {SIDEBAR_CONTENT_ITEMS.map(item => {
        const IconComponent = item.icon;
        return (
          <Button key={item.value}
            onClick={() => handleClick(item)}
            variant={'sideBar'}
            isActive={activeTab === item.value}
          >
            <IconComponent/>
            <Typography variant={'caption'}>
              {item.label}
            </Typography>
          </Button>);
      })}
      <SC.Divider/>
      {SIDEBAR_CONTROL_ITEMS.map(item => {
        const IconComponent = item.icon;
        return (
          <Button key={item.value}
            onClick={() => handleClick(item)}
            variant={'sideBar'}
            isActive={activeTab === item.value}
          >
            <IconComponent/>
            <Typography variant={'caption'}>
              {item.label}
            </Typography>
          </Button>);
      })}
      <SC.Divider/>
      {SIDEBAR_SETTINGS_ITEMS.map(item => {
        const IconComponent = item.icon;
        return (
          <Button key={item.value}
            onClick={() => handleClick(item)}
            variant={'sideBar'}
            isActive={activeTab === item.value}
          >
            <IconComponent/>
            <Typography variant={'caption'}>
              {item.label}
            </Typography>
          </Button>);
      })}
    </SC.ContentSideBarStyles>
  );
};
