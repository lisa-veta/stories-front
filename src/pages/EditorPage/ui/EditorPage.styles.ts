// pages/EditorPage/ui/EditorPage.styles.ts
import styled from 'styled-components';
import { Typography } from '@shared/ui/Typography';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.color.background.edit};
    width: 100%;
    height: 100%;
    padding: 0 20px;
`;

export const ErrorContainer = styled.div`
    padding: 40px;
    text-align: center;
`;

export const ErrorMessage = styled(Typography).attrs({ variant: 'h3' })`
    margin-bottom: 20px;
`;

export const SectionContainer = styled.div`
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

export const CreateTabContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const PreviewPlaceholder = styled.div`
    padding: 20px;
    text-align: center;
`;

export const NotImplementedMessage = styled.div`
    padding: 20px;
    text-align: center;
`;
