import * as SC from './EditorPage.styles';
import { useEffect, useMemo } from 'react';
import { Tabs, type TabsProps } from 'antd';
import { useQueryParams } from '@shared/lib/hooks/useQueryParams';
import { apiContainer } from '@shared/api/core/api-container';
import {
  bannerConfig,
  bottomSheetConfig,
  commonSettingsConfig,
  runningLineConfig,
  stockConfig,
  storyConfig,
} from '@shared/config';
import { CreateTab } from './CreateTab/CreateTab';
import { SettingsTab } from './SettingsTab/SettingsTab';
import { PreviewTab } from './PreviewTab/PreviewTab';
import { useTheme } from 'styled-components';

const createTabConfigs: Record<string, any> = {
  stories: storyConfig.createTab,
  banners: bannerConfig.createTab,
  'running-lines': runningLineConfig.createTab,
  stocks: stockConfig.createTab,
  'bottom-sheet': bottomSheetConfig.createTab,
  'onboarding-stories': [],
};

export const EditorPage = () => {
  const { id, type } = useQueryParams();
  const theme = useTheme();

  const createTabConfig = type ? createTabConfigs[type] : null;
  const settingsTabs = commonSettingsConfig.settingsTab;

  useEffect(() => {
    if (id && type) {
      const fetchData = async () => {
        try {
          switch (type) {
          case 'story':
            await apiContainer.stories.getById(id);
            break;
          case 'banner':
            await apiContainer.banners.getById(id);
            break;
          case 'stock':
            await apiContainer.stocks.getById(id);
            break;
          default:
            return;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [id, type]);

  if (!type) {
    return (
      <SC.Container>
        <SC.ErrorContainer>
          <SC.ErrorMessage>Не указан тип контента</SC.ErrorMessage>
        </SC.ErrorContainer>
      </SC.Container>
    );
  }

  const tabs: TabsProps['items'] = useMemo(() => [
    {
      key: '1',
      label: 'Создание',
      children: <CreateTab config={createTabConfig} />,
    },
    {
      key: '2',
      label: 'Настройки',
      children: (
        <SettingsTab
          generalConfig={settingsTabs.general}
          filtersConfig={settingsTabs.filters}
          flagsConfig={settingsTabs.flags}
        />
      ),
    },
    {
      key: '3',
      label: 'Превью',
      children: <PreviewTab />,
    },
  ], [createTabConfig, settingsTabs]);

  return (
    <SC.Container>
      <Tabs
        centered
        defaultActiveKey="1"
        items={tabs}
        style={{
          height: '100%',
          overflow: 'auto',
        }}
      />
    </SC.Container>
  );
};
