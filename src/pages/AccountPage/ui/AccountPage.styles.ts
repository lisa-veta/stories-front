import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    flex-direction: row;
    height: 100vh; /* Фиксированная высота */
`;

export const ContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const CardContainer = styled.section`
    display: flex;
    width: 100%;
    height: 100%; /* Занимает всю высоту родителя */
    overflow-y: auto;
    padding: 0 30px 30px; /* Добавляем padding снизу */
    gap: 30px;
    flex-wrap: wrap;

    /* Стили для скроллбара */
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;


export const CenterContainer = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 30px;
    gap: 30px;
    justify-content: center;
    align-items: center;
`;
