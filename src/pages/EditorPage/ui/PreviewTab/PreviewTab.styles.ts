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

export const Arrow = styled.div`
  font-size: 32px;
  cursor: pointer;
  user-select: none;
`;