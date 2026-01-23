import { css } from 'styled-components';
import { VARIANT_TAG_MAPPING } from '@shared/ui/Typography/lib/constants';
import type { TypographyVariant } from '@shared/ui/Typography/lib/types';

export const getTypographyStyles = (variant: TypographyVariant) => {
  const styles = {
    h1: css`
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 48px;
    `,
    h2: css`
      font-style: normal;
      font-weight: 600;
      font-size: 42px;
      line-height: 42px;
    `,
    h3: css`
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 36px;
    `,
    h4: css`
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      line-height: 30px;
    `,
    h5: css`
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 24px;
    `,
    h6: css`
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
    `,
    labelBold: css`
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    `,
    headline: css`
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 20px;
    `,
    subtitle1: css`
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
    `,
    subtitle2: css`
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
    `,
    body1: css`
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
    `,
    body2: css`
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    `,
    caption: css`
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    `,
    overline: css`
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
    `,
  };

  return styles[variant];
};

export const getVariantTag = (variant: TypographyVariant): string => {
  return VARIANT_TAG_MAPPING[variant];
};
