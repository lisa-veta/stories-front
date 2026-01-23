import * as SC from './Button.styles';

type ButtonVariant = 'primary' | 'secondary' | 'sideBar';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  isActive?: boolean,
  width?: string;
}

export const Button  = ({
  variant = 'primary',
  children,
  width,
  ...props
} : ButtonProps) => {
  return (
    <SC.Button variant={variant} width={width} {...props}>
      {children}
    </SC.Button>
  );
};
