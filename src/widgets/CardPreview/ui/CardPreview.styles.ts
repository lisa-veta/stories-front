import styled from 'styled-components';
import { Typography } from '@shared/ui/Typography';
import { getTypographyStyles } from '@shared/ui/Typography/model/typography.service.ts';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    width: 350px;
    height: ${({ height }) => height};
    border-radius: 30px;
    overflow: hidden;
    border: solid ${({ theme }) => theme.color.border.primary} 1px;
`;

export const Image = styled.img`
    width: 100%;
    height: 190px; 
    object-fit: cover;
    flex-shrink: 0; 
`;

export const ContentContainer = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    flex: 1; 
    min-height: 0;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 0;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    min-width: 0;
`;

export const Title = styled(Typography)`
    ${getTypographyStyles('h5')};
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    flex: 1;
`;

export const leftContainer = styled.div`
    display: flex;
    justify-content: left;
    gap: 10px;
    align-items: center;
`;