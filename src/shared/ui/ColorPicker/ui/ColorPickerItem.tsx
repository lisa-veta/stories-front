import { ColorPicker, type ColorPickerProps } from 'antd';
import { useState } from 'react';
import * as SC from './ColorPickerItem.styles';
import { Typography } from '@shared/ui/Typography';

export const ColorPickerItem = () => {
  const [color, setColor] = useState<string>('#1677ff');

  const handleChange: ColorPickerProps['onChange'] = (colorValue) => {
    setColor(colorValue.toHexString());
  };

  return (
    <SC.Container>
      <ColorPicker
        value={color}
        onChange={handleChange}
        trigger="click"
        showText={(color) => color.toHexString()}
        allowClear
        onClear={() => setColor('#1677ff')} // Сброс к дефолтному цвету
      >
        <SC.Circle $color={color} />
      </ColorPicker>
      <Typography>
        {color}
      </Typography>
    </SC.Container>

  );
};
