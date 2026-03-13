// widgets/SettingsPanel/ui/SettingsPanel.tsx
import * as SC from './SettingsPanel.styles.ts';
import { ArrowIcon, PlusIcon } from '@shared/ui/Icons';
import { Button } from '@shared/ui/Button';
import { useRef, useState } from 'react';
import { CheckboxItem } from '@shared/ui/Checkbox/ui/CheckboxItem.tsx';
import { ColorPickerItem } from '@shared/ui/ColorPicker';
import { Typography } from '@shared/ui/Typography';
import { CustomSelect } from '@shared/ui/Select/ui/MultipleSelect';
import { CustomInput } from '@shared/ui/CustomInput';
import type { SettingsPanelConfig } from '@shared/config/types';

interface SettingsPanelProps {
    config: SettingsPanelConfig;
    values?: Record<string, any>;
    onChange?: (field: string, value: any) => void;
    onImageUpload?: (file: File) => void;
    onAdd?: () => void;
}

function getValueByPath(obj: any, path: string) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

export const SettingsPanel = ({ config, onImageUpload, onAdd, onChange, values }: SettingsPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (file && onImageUpload) {
      onImageUpload(file);
    }
  };
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderFormItem = (item: any) => {
    const value = getValueByPath(values, item.name);
    console.log(item.name, value);
    switch (item.component) {
    case 'Input':
      return (
        <CustomInput
          value={value}
          placeholder={item.placeholder}
          type={item.type}
          onChange={(e)=>onChange?.(item.name, e.target.value)}
        />
      );

    case 'ColorPicker':
      return (
        <ColorPickerItem
          value={value}
          onChange={(color)=>onChange?.(item.name, color)}
        />
      );

    case 'Select':
      return (
        <CustomSelect
          options={item.options || []}
          // TODO: добавить value и onChange
        />
      );

    case 'Checkbox':
      return (
        <CheckboxItem
          text={item.title}
          checked={value}
          onChange={(v)=>onChange?.(item.name, v)}
        />
      );

    default:
      return null;
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
          <>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />

            <Button
              onClick={() => {
                if (config.isImageUpload) {
                  fileInputRef.current?.click();
                } else {
                  onAdd?.();
                }
              }}
            >
              <PlusIcon />
              {config.buttonText}
            </Button>
          </>
        )}
      </SC.Content>
    </SC.Container>
  );
};
