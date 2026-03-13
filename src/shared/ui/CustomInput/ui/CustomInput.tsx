import { Input } from 'antd';

export const CustomInput = ({ value, onChange, ...props }: any) => {

  return (
    <Input
      value={value}
      onChange={onChange}
      {...props}
      style={{
        width: '100%',
        fontSize: '16px',
        borderRadius: '20px',
        padding: '5px 19px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    />
  );
};
