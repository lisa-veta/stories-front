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
  const [activePanel, setActivePanel] = useState<string | null>(null);

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

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setActivePanel(null);
  };

  return (
    <SC.Layout>
      <SC.Sidebar>
        <SC.SidebarItem
          active={activeTab === 'general'}
          onClick={() => handleTabChange('general')}
        >
                  Общие настройки
        </SC.SidebarItem>

        <SC.SidebarItem
          active={activeTab === 'filters'}
          onClick={() => handleTabChange('filters')}
        >
                  Фильтры
        </SC.SidebarItem>

        <SC.SidebarItem
          active={activeTab === 'flags'}
          onClick={() => handleTabChange('flags')}
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
                isExpanded={activePanel === panelConfig.title}
                onToggle={() => {
                  setActivePanel(prev =>
                    prev === panelConfig.title ? null : panelConfig.title,
                  );
                }}
              />
            ))}
          </SC.SettingsGroup>
        </SC.Content>
      </SC.ContentWrapper>
    </SC.Layout>
  );
};
