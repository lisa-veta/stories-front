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

export const EditOverlay = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  opacity: 0;
  transition: opacity 0.2s ease;
`;

export const PreviewWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    &:hover ${EditOverlay} {
        opacity: 1;
    }
`;

export const EditButton = styled.button`
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
