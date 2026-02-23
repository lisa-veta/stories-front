export interface ConfigItem {
  title: string;
  name: string;
  component: 'Input' | 'Select' | 'ColorPicker' | 'Checkbox';
  required?: boolean;
  placeholder?: string;
  type?: string;
  options?: Array<{ value: string; label: string }>;
  defaultValue?: any;
}

export interface SettingsPanelConfig {
  title: string;
  items: ConfigItem[];
  buttonText?: string;
}

export interface ContentTypeConfig {
  createTab: SettingsPanelConfig[];
}
