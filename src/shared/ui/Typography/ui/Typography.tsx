import React from 'react';
import { StyledTypography } from './Typography.styles';
import { getVariantTag } from '../model/typography.service';
import type { TypographyProps } from '@shared/ui/Typography/lib/types';

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  children,
  ...restProps
}) => {
  const as = getVariantTag(variant);

  return (
    <StyledTypography
      as={as}
      variant={variant}
      {...restProps}
    >
      {children}
    </StyledTypography>
  );
};
