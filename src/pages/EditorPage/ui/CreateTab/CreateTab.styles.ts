import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    height: 100%;
    min-height: 600px;
`;

export const LeftPanel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
    padding-right: 8px;
`;

export const CenterPanel = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 12px;
    padding: 24px;
`;

export const RightPanel = styled.div`
    border-radius: 12px;
`;
