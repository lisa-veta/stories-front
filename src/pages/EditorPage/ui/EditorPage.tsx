// pages/EditorPage/ui/EditorPage.tsx
import * as SC from './EditorPage.styles.ts';
import { SettingsPanel } from '@widgets/SettingsPanel';
import { apiContainer } from '@shared/api/core/api-container.ts';
import { useEffect, useMemo } from 'react';
import { Tabs, type TabsProps } from 'antd';
import { useQueryParams } from '@shared/lib/hooks/useQueryParams';
import { Typography } from '@shared/ui/Typography';
import {
  bannerConfig,
  bottomSheetConfig,
  commonSettingsConfig,
  runningLineConfig,
  stockConfig,
  storyConfig,
} from '@shared/config';


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

  const createTabConfig = type ? createTabConfigs[type] : null;

  const settingsTabs = commonSettingsConfig.settingsTab;

  useEffect(() => {
    if (id && type) {
      const fetchData = async () => {
        try {
          let response;
          switch (type) {
          case 'story':
            response = await apiContainer.stories.getById(id);
            break;
          case 'banner':
            response = await apiContainer.banners.getById(id);
            break;
          case 'stock':
            response = await apiContainer.stocks.getById(id);
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

  // Создаем вкладки
  const tabs: TabsProps['items'] = useMemo(() => {
    if (!type) {
      return [
        {
          key: '1',
          label: 'Ошибка',
          children: (
            <SC.ErrorContainer>
              <SC.ErrorMessage>Тип контента не указан</SC.ErrorMessage>
            </SC.ErrorContainer>
          ),
        },
      ];
    }

    return [
      {
        key: '1',
        label: 'Создание',
        children: createTabConfig && createTabConfig.length > 0 ? (
          <SC.CreateTabContainer>
            {createTabConfig.map((panelConfig: any, index: number) => (
              <SettingsPanel
                key={`create-${index}`}
                config={panelConfig}
              />
            ))}
          </SC.CreateTabContainer>
        ) : (
          <SC.NotImplementedMessage>
            <Typography variant="body1">
              {type === 'story'
                ? 'Настройки создания для историй загружаются...'
                : `Раздел создания для типа "${type}" еще не реализован`}
            </Typography>
          </SC.NotImplementedMessage>
        ),
      },
      {
        key: '2',
        label: 'Настройки',
        children: (
          <SC.SectionContainer>
            {/* Общие настройки */}
            <div>
              <SC.SectionTitle>Общие настройки</SC.SectionTitle>
              <SC.SettingsGroup>
                {settingsTabs.general.map((panelConfig: any, index: number) => (
                  <SettingsPanel
                    key={`general-${index}`}
                    config={panelConfig}
                  />
                ))}
              </SC.SettingsGroup>
            </div>

            {/* Фильтры */}
            <div>
              <SC.SectionTitle>Фильтры</SC.SectionTitle>
              <SC.SettingsGroup>
                {settingsTabs.filters.map((panelConfig: any, index: number) => (
                  <SettingsPanel
                    key={`filters-${index}`}
                    config={panelConfig}
                  />
                ))}
              </SC.SettingsGroup>
            </div>

            {/* Флаги */}
            <div>
              <SC.SectionTitle>Флаги</SC.SectionTitle>
              <SC.SettingsGroup>
                {settingsTabs.flags.map((panelConfig: any, index: number) => (
                  <SettingsPanel
                    key={`flags-${index}`}
                    config={panelConfig}
                  />
                ))}
              </SC.SettingsGroup>
            </div>
          </SC.SectionContainer>
        ),
      },
      {
        key: '3',
        label: 'Превью',
        children: (
          <SC.PreviewPlaceholder>
            <Typography variant="body1">Раздел превью в разработке</Typography>
          </SC.PreviewPlaceholder>
        ),
      },
    ];
  }, [type, createTabConfig, settingsTabs]);

  if (!type) {
    return (
      <SC.Container>
        <SC.ErrorContainer>
          <SC.ErrorMessage>Не указан тип контента</SC.ErrorMessage>
        </SC.ErrorContainer>
      </SC.Container>
    );
  }

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
