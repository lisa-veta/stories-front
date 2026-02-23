// widgets/SettingsPanel/ui/SettingsPanel.tsx
import * as SC from './SettingsPanel.styles.ts';
import { ArrowIcon, PlusIcon } from '@shared/ui/Icons';
import { Button } from '@shared/ui/Button';
import { useState } from 'react';
import { CheckboxItem } from '@shared/ui/Checkbox/ui/CheckboxItem.tsx';
import { ColorPickerItem } from '@shared/ui/ColorPicker';
import { Typography } from '@shared/ui/Typography';
import { CustomSelect } from '@shared/ui/Select/ui/MultipleSelect';
import { CustomInput } from '@shared/ui/CustomInput';
import type { SettingsPanelConfig } from '@shared/config/types';

interface SettingsPanelProps {
  config: SettingsPanelConfig;
  // TODO: добавить пропсы для данных формы и обработчиков
}

export const SettingsPanel = ({ config }: SettingsPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderFormItem = (item: any) => {
    switch (item.component) {
    case 'Input':
      return (
        <CustomInput
          placeholder={item.placeholder}
          type={item.type}
          // TODO: добавить value и onChange
        />
      );

    case 'Select':
      return (
        <CustomSelect
          options={item.options || []}
          // TODO: добавить value и onChange
        />
      );

    case 'ColorPicker':
      return (
        <ColorPickerItem
          // TODO: добавить value и onChange
        />
      );

    case 'Checkbox':
      return (
        <CheckboxItem
          text={item.title}
          // TODO: добавить checked и onChange
        />
      );

    default:
      return <div>Неизвестный компонент: {item.component}</div>;
    }
  };

  return (
    <SC.Container>
      <SC.Title onClick={toggleExpand}>
        <Typography variant={'subtitle1'}>
          {config.title}
        </Typography>
        <SC.ArrowIconWrapper $isExpanded={isExpanded}>
          <ArrowIcon />
        </SC.ArrowIconWrapper>
      </SC.Title>
      <SC.Content $isExpanded={isExpanded}>
        <SC.ElementsWrapper>
          {config.items.map((item, index) => (
            <SC.ElementWrapper key={index}>
              <Typography variant={'overline'}>
                {item.title}
                {item.required && <span style={{ color: 'red' }}> *</span>}
              </Typography>
              {renderFormItem(item)}
            </SC.ElementWrapper>
          ))}
        </SC.ElementsWrapper>
        {config.buttonText && (
          <Button>
            <PlusIcon />
            {config.buttonText}
          </Button>
        )}
      </SC.Content>
    </SC.Container>
  );
};
