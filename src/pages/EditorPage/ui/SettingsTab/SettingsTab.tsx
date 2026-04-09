import * as SC from './SettingsTab.styles';
import { SettingsPanel } from '@widgets/SettingsPanel';
import { useState } from 'react';

interface SettingsTabProps {
    generalConfig: any[];
    filtersConfig: any[];
    flagsConfig: any[];
}

type TabType = 'general' | 'filters' | 'flags';

export const SettingsTab = ({
  generalConfig,
  filtersConfig,
  flagsConfig,
}: SettingsTabProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('general');

  const renderContent = () => {
    switch (activeTab) {
    case 'general':
      return generalConfig;
    case 'filters':
      return filtersConfig;
    case 'flags':
      return flagsConfig;
    default:
      return [];
    }
  };

  return (
    <SC.Layout>
      <SC.Sidebar>
        <SC.SidebarItem
          active={activeTab === 'general'}
          onClick={() => setActiveTab('general')}
        >
                  Общие настройки
        </SC.SidebarItem>

        <SC.SidebarItem
          active={activeTab === 'filters'}
          onClick={() => setActiveTab('filters')}
        >
                  Фильтры
        </SC.SidebarItem>

        <SC.SidebarItem
          active={activeTab === 'flags'}
          onClick={() => setActiveTab('flags')}
        >
                  Флаги
        </SC.SidebarItem>
      </SC.Sidebar>

      <SC.ContentWrapper>
        <SC.Content>
          <SC.SettingsGroup>
            {renderContent().map((panelConfig: any, index: number) => (
              <SettingsPanel
                key={`${activeTab}-${index}`}
                config={panelConfig}
              />
            ))}
          </SC.SettingsGroup>
        </SC.Content>
      </SC.ContentWrapper>
    </SC.Layout>
  );
};
