import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    border-radius: 30px 0 0 30px;
    background-color: ${({ theme }) => theme.color.background.paper};
    height: 100%;
`;

export const SlidesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const SlideCard = styled.div<{
    $selected?: boolean;
    $dragging?: boolean;
}>`
    position: relative;
    height: 122px;
    width: 246px;
    border-radius: 30px;
    background: #d9d9d9;
    cursor: pointer;
    transition: 0.2s;

    border: 2px solid
    ${({ $selected, theme }) => ($selected ? theme.color.background.primary : 'transparent')};

    ${({ $dragging }) =>
    $dragging &&
            `
    opacity: 0.6;
  `}

    &:hover button {
        opacity: 1;
    }
`;

export const SlideLabel = styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.color.background.edit};
    padding: 5px 10px;
    border-radius: 20px;
    top: 15px;
    left: 20px;
`;

export const DeleteButton = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;

    width: 26px;
    height: 26px;

    border-radius: 50%;
    border: none;
    background: white;
    color: red;
    font-size: 16px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transition: 0.2s;
`;

export const DragHandle = styled.div`
  position: absolute;
  bottom: 8px;
  right: 12px;
  cursor: grab;
  font-size: 18px;
  opacity: 0.5;

  &:active {
    cursor: grabbing;
  }
`;
