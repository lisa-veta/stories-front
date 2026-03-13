import { Checkbox } from 'antd';
import * as SC from './CheckboxItem.styles.ts';

interface CheckboxItemProps {
    text: string
    checked?: boolean
    onChange?: (v:boolean)=>void
}

export const CheckboxItem = ({ text, checked, onChange }: CheckboxItemProps) => {

  return (
    <Checkbox
      checked={checked}
      onChange={(e)=>onChange?.(e.target.checked)}
    >
      <SC.Text>{text}</SC.Text>
    </Checkbox>
  );
};
