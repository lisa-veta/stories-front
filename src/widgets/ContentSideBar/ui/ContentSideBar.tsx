import * as SC from './ContentSideBar.styles';
import { Button } from '@shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@shared/ui/Typography';
import {
  SIDEBAR_CONTENT_ITEMS,
  SIDEBAR_CONTROL_ITEMS,
  SIDEBAR_SETTINGS_ITEMS,
  type SidebarItem,
} from '@widgets/ContentSideBar/config/items';

interface ContentSideBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const ContentSideBar = ({ activeTab, onTabChange } : ContentSideBarProps) => {
  const navigate = useNavigate();

  const handleClick = (item : SidebarItem) => {
    onTabChange(item.value);
    navigate(item.path);
  };

  const renderItems = (items: SidebarItem[]) =>
    items.map(item => {
      const IconComponent = item.icon;
      return (
        <Button
          key={item.value}
          onClick={() => handleClick(item)}
          variant={'sideBar'}
          isActive={activeTab === item.value}
        >
          <IconComponent/>
          <Typography variant={'caption'}>
            {item.label}
          </Typography>
        </Button>
      );
    });

  return(
    <SC.ContentSideBarStyles>
      {renderItems(SIDEBAR_CONTENT_ITEMS)}
      <SC.Divider/>
      {renderItems(SIDEBAR_CONTROL_ITEMS)}
      <SC.Divider/>
      {renderItems(SIDEBAR_SETTINGS_ITEMS)}
    </SC.ContentSideBarStyles>
  );
};
