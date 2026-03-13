import { ColorPicker, type ColorPickerProps } from 'antd';
import * as SC from './ColorPickerItem.styles';
import { Typography } from '@shared/ui/Typography';

interface Props {
    value?: string
    onChange?: (color: string) => void
}

export const ColorPickerItem = ({ value = '#1677ff', onChange }: Props) => {

  const handleChange: ColorPickerProps['onChange'] = (colorValue) => {
    onChange?.(colorValue.toHexString());
  };

  return (
    <SC.Container>
      <ColorPicker
        value={value}
        onChange={handleChange}
        trigger="click"
        showText={(color) => color.toHexString()}
        allowClear
        onClear={() => onChange?.('#1677ff')}
      >
        <SC.Circle $color={value} />
      </ColorPicker>

      <Typography>
        {value}
      </Typography>
    </SC.Container>
  );
};
