import styled from 'styled-components';

export const Wrapper = styled.div<{ $selected: boolean, $isEditing: boolean }>`
    position: absolute;
    left: 0;
    width: calc(100% - 16px);
    padding: 4px 8px;

    border: ${({ $selected }) =>
    $selected ? '1px dashed #00A3FF' : '1px dashed transparent'};

    cursor: ${({ $isEditing }) => ($isEditing ? 'text' : 'move')};

    &:hover button {
        opacity: 1;
        pointer-events: auto;
    }
`;

export const Text = styled.div`
    outline: none;
    width: 100%;
    word-break: break-word;
    white-space: pre-wrap;
`;

export const DeleteButton = styled.button`
    position: absolute;
    top: -10px;
    right: 0;

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
`;