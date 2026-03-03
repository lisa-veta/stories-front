import * as SC from './SettingsTab.styles';
import { SettingsPanel } from '@widgets/SettingsPanel';

interface SettingsTabProps {
    generalConfig: any[];
    filtersConfig: any[];
    flagsConfig: any[];
}

export const SettingsTab = ({ generalConfig, filtersConfig, flagsConfig }: SettingsTabProps) => {
  return (
    <SC.Container>
      {/* Общие настройки */}
      <div>
        <SC.SectionTitle>Общие настройки</SC.SectionTitle>
        <SC.SettingsGroup>
          {generalConfig.map((panelConfig: any, index: number) => (
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
          {filtersConfig.map((panelConfig: any, index: number) => (
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
          {flagsConfig.map((panelConfig: any, index: number) => (
            <SettingsPanel
              key={`flags-${index}`}
              config={panelConfig}
            />
          ))}
        </SC.SettingsGroup>
      </div>
    </SC.Container>
  );
};
