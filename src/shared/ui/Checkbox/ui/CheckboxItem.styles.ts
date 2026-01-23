import styled from 'styled-components';
import { Typography } from '@shared/ui/Typography';
import { getTypographyStyles } from '@shared/ui/Typography/model/typography.service';

export const Text = styled(Typography)`
    ${getTypographyStyles('body1')};
    line-height: 28px;
`;
