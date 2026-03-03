import styled from 'styled-components';
import { Typography } from '@shared/ui/Typography';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.color.background.edit};
    height: 100%;
    padding: 0 0 50px 36px;
`;

export const ErrorContainer = styled.div`
    padding: 40px;
    text-align: center;
`;

export const ErrorMessage = styled(Typography).attrs({ variant: 'h3' })`
    margin-bottom: 20px;
`;
