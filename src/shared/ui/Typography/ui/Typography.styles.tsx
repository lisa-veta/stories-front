import styled from 'styled-components';
import { getTypographyStyles } from '../model/typography.service';
import type { TypographyProps } from '@shared/ui/Typography/lib/types';

export const StyledTypography = styled.span.withConfig({
  shouldForwardProp: (prop) => !['variant', 'color', 'align'].includes(prop),
})<TypographyProps>`
  ${({ variant = 'body1' }) => getTypographyStyles(variant)};
  
  color: ${({ color, theme }) =>
    color ? theme.color.text[color] || color : theme.color.text.primary
};
  
  text-align: ${({ align = 'left' }) => align};
  margin: 0;  
`;
