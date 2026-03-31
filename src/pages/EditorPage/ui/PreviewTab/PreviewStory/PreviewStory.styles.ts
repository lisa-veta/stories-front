import styled from 'styled-components';

export const PhoneFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PhoneScreen = styled.div`
  position: relative;
  overflow: hidden;

  border-radius: 24px;
  background: #000;
`;

export const PreviewContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Element = styled.div<{ $isButton: boolean }>`
  position: absolute;

  padding: ${({ $isButton }) =>
    $isButton ? '10px 16px' : '4px 16px'};

  width: calc(80% - 16px);

  display: flex;
  justify-content: ${({ $isButton }) =>
    $isButton ? 'center' : 'flex-start'};
  align-items: center;

  word-break: break-word;
  text-align: center;
`;