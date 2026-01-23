import * as SC from './SettingsPanel.styles.ts';
import { ArrowIcon, PlusIcon } from '@shared/ui/Icons';
import { Button } from '@shared/ui/Button';
import { useState } from 'react';
import { CheckboxItem } from '@shared/ui/Checkbox/ui/CheckboxItem.tsx';
import { ColorPickerItem } from '@shared/ui/ColorPicker';
import { Typography } from '@shared/ui/Typography';
import { CustomSelect, type CustomSelectOption } from '@shared/ui/Select/ui/MultipleSelect';
import { CustomInput } from '@shared/ui/CustomInput';

export const SettingsPanel = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const statusOptions: CustomSelectOption[] = [
    { value: 'draft', label: 'Черновик' },
    { value: 'active', label: 'Активно' },
    { value: 'archived', label: 'Архив' },
  ];
  return (
    <SC.Container>
      <SC.Title onClick={toggleExpand}>
        <Typography variant={'subtitle1'}>
          Заголовок
        </Typography>
        <SC.ArrowIconWrapper $isExpanded={isExpanded}>
          <ArrowIcon />
        </SC.ArrowIconWrapper>
      </SC.Title>
      <SC.Content $isExpanded={isExpanded}>
        <SC.ElementsWrapper>
          <SC.ElementWrapper>
            <Typography variant={'overline'}>
              Ляля
            </Typography>
            <CheckboxItem text={'lala'}/>
          </SC.ElementWrapper>
          <SC.ElementWrapper>
            <Typography variant={'overline'}>
              Ляля
            </Typography>
            <ColorPickerItem/>
          </SC.ElementWrapper>
          <SC.ElementWrapper>
            <Typography variant={'overline'}>
              Ляля
            </Typography>
            <CustomSelect
              options={statusOptions}
            />
          </SC.ElementWrapper>
          <SC.ElementWrapper>
            <Typography variant={'overline'}>
              Ляля
            </Typography>
            <CustomInput
            />
          </SC.ElementWrapper>
        </SC.ElementsWrapper>
        <Button>
          <PlusIcon />
          Кнопка
        </Button>
      </SC.Content>
    </SC.Container>
  );
};
