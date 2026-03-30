import styled from 'styled-components';

export const Wrapper = styled.div<{ $selected: boolean; $isButton: boolean }>`
  position: absolute;
  left: 0;

  padding: ${({ $isButton }) => ($isButton ? '10px 16px' : '4px 8px')};

  width: ${({ $isButton }) =>
    $isButton ? '160px' : 'calc(100% - 16px)'};

  border: ${({ $selected }) =>
    $selected ? '1px dashed #00A3FF' : '1px dashed transparent'};

  cursor: move;

  display: flex;
  justify-content: center;
  align-items: center;

  word-break: break-word;
  text-align: center;
`;

export const Content = styled.div`
  outline: none;
  width: 100%;
  white-space: pre-wrap;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;

  width: 20px;
  height: 20px;

  border-radius: 50%;
  border: none;

  background: #ff4d4f;
  color: #fff;

  cursor: pointer;

  opacity: 0;
  pointer-events: none;

  transition: opacity 0.2s ease;

  ${Wrapper}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;