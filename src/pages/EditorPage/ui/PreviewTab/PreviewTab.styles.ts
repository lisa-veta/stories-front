import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const TopBar = styled.div`
  width: 300px;
`;

export const PreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const DeviceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.div<{ $disabled?: boolean }>`
    width: 44px;
    height: 44px;

    border-radius: 50%;
    background: #e0e0e0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};

    transition: all 0.2s ease;

    opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

    &:hover {
        ${({ $disabled }) =>
    !$disabled &&
                `
      background: #d5d5d5;
      transform: scale(1.05);
    `}
    }

    &:active {
        ${({ $disabled }) =>
    !$disabled &&
                `
      transform: scale(0.95);
    `}
    }
`;
