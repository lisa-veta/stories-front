import { Checkbox } from 'antd';
import * as SC from './CheckboxItem.styles.ts';

interface CheckboxItemProps {
  text: string;
}

export const CheckboxItem = ({
  text = 'text',
} : CheckboxItemProps) => {
  return (
    <Checkbox >
      <SC.Text>
        {text}
      </SC.Text>
    </Checkbox>
  );
};
