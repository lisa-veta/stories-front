import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Select, DatePicker } from 'antd';
import type { SelectProps } from 'antd';

export const MultipleSelect: React.FC<SelectProps> = ({
  placeholder = 'Please select',
  suffixIcon = <DownOutlined />,
  style = { width: '100%' },
  ...props
}) => {
  const [value, setValue] = useState<string[]>(props.defaultValue as string[] || []);

  const handleChange = (newValue: string[], option: any) => {
    setValue(newValue);
    if (props.onChange) {
      props.onChange(newValue, option);
    }
  };

  return (
    <Select
      mode="multiple"
      value={props.value !== undefined ? props.value : value}
      onChange={handleChange}
      suffixIcon={suffixIcon}
      placeholder={placeholder}
      style={style}
      {...props}
    />
  );
};

const { RangePicker } = DatePicker;
import type { RangePickerProps } from 'antd/es/date-picker';
import type { Dayjs } from 'dayjs';

interface DateSelectProps extends Omit<RangePickerProps, 'onChange'> {
  onChange?: (dates: [Dayjs | null, Dayjs | null] | null) => void;
}

export const DateSelect: React.FC<DateSelectProps> = ({ onChange, ...props }) => {
  const handleChange = (dates: [Dayjs | null, Dayjs | null] | null) => {
    if (onChange) {
      onChange(dates);
    }
  };

  return (
    <RangePicker
      onChange={handleChange}
      style={{ width: '220px' }}
      {...props}
    />
  );
};


export interface CustomSelectOption {
  value: string | number;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface CustomSelectProps extends Omit<SelectProps, 'options'> {
  options?: CustomSelectOption[];
  placeholder?: string;
  showSearch?: boolean | { filterOption: (input: string, option: any) => boolean };
}


export const CustomSelect: React.FC<CustomSelectProps> = ({
  options = [],
  placeholder = 'Выберите значение',
  showSearch = true,
  filterOption,
  ...restProps
}) => {
  const searchConfig = showSearch
    ? {
      showSearch: true,
      filterOption: filterOption || ((input, option) =>
        (option?.label ?? '').toString().toLowerCase().includes(input.toLowerCase())
      ),
    }
    : { showSearch: false };

  return (
    <Select
      placeholder={placeholder}
      options={options}
      {...searchConfig}
      {...restProps}
      style={{
        width: '100%',
        fontSize: '16px',
        borderRadius: '20px',
        padding: '5px 19px',
        border: '1px solid rgba(0, 0, 0, 0.1)' }}
    />
  );
};
