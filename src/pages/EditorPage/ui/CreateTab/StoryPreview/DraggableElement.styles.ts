import styled from 'styled-components';

export const Wrapper = styled.div<{ $selected: boolean; $isButton: boolean, $radius?: string }>`
    border-radius: ${({ $radius }) => $radius || '10px'};
  position: absolute;
  left: 24px;

  padding: ${({ $isButton }) => ($isButton ? '10px 16px' : '4px 16px')};

  width: calc(80% - 16px);

  border: ${({ $selected }) =>
    $selected ? '1px dashed #00A3FF' : '1px dashed transparent'};

  cursor: move;

  display: flex;
  justify-content: ${({ $isButton }) => ($isButton ? 'center' : 'flex-start')};
  align-items: center;

  word-break: break-word;
    text-align: ${({ $isButton }) => ($isButton ? 'center' : 'left')};
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

    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

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

    svg {
        width: 300%;
        height: 300%;
    }
`;