export type TypographyVariant =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'labelBold'
  | 'headline'
  | 'subtitle1' | 'subtitle2'
  | 'body1' | 'body2'
  | 'caption'
  | 'overline';

export type TextColor =
  | 'primary'
  | 'secondary'
  | 'disabled'
  | 'error'
  | 'warning'
  | 'success'
  | string;

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: TextColor;
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
}
