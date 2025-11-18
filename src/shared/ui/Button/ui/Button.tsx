import * as SC from './Button.styles.ts';

type ButtonVariant = 'primary' | 'secondary' | 'sideBar';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  isActive?: boolean,
}

export const Button  = ({
  variant = 'primary',
  children,
  ...props
} : ButtonProps) => {
  return (
    <SC.Button variant={variant} {...props}>
      {children}
    </SC.Button>
  );
};
