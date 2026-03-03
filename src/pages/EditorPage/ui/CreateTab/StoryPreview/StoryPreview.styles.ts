import styled from 'styled-components';

export const PhoneFrame = styled.div`
    width: 323px;
    height: 719px;
    border-radius: 20px;
    padding: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

export const PhoneScreen = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.background.white};
    border-radius: 32px;
    overflow: hidden;
`;

export const PreviewContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
`;

export const PlaceholderText = styled.div`
    color: #999;
    font-size: 14px;
`;
