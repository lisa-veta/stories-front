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

export const ProgressWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;

  display: flex;
  gap: 4px;
  z-index: 10;
`;

export const ProgressTrack = styled.div`
  flex: 1;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: white;
  width: 0%;
  transition: width 0.1s linear;
`;