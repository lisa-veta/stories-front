import * as SC from './Badge.styles';
import { Typography } from '@shared/ui/Typography';

interface BadgeProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export const Badge = ({
  children,
  backgroundColor,
} : BadgeProps) => {
  return (
    <SC.Badge backgroundColor={backgroundColor}>
      <Typography >
        {children}
      </Typography>
    </SC.Badge>
  );
};
