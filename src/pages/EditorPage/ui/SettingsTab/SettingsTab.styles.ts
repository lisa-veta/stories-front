import styled from 'styled-components';
import { Typography } from '@shared/ui/Typography';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const SectionTitle = styled(Typography).attrs({ variant: 'h4' })`
    margin-bottom: 16px;
    color: ${({ theme }) => theme.color.text.primary};
`;

export const SettingsGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
