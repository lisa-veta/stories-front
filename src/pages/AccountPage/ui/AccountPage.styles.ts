import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

export const ContentContainer = styled.section`
    display: flex;
    width: 100%;
    overflow-y: auto;
    padding: 30px;
    gap: 30px;
    flex-wrap: wrap
`;

export const CenterContainer = styled.section`
    display: flex;
    width: 100%;
    overflow-y: auto;
    padding: 30px;
    gap: 30px;
    justify-content: center;
    align-items: center;
`;
