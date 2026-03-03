import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  width: 420px;
  background: #ffffff;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const CropperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

export const Controls = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const RangeInput = styled.input`
  width: 100%;
`;
