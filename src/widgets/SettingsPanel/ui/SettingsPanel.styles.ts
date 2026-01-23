import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 366px;
    padding: 30px;
    background-color: ${({ theme }) => theme.color.background.paper};
    border-radius: 30px;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;

    &:hover {
        opacity: 0.8;
    }
`;

export const ArrowIconWrapper = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${({ $isExpanded }) => $isExpanded ? '180deg' : '0deg'});
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
`;

export const Content = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: ${({ $isExpanded }) => $isExpanded ? '500px' : '0'};
  opacity: ${({ $isExpanded }) => $isExpanded ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  visibility: ${({ $isExpanded }) => $isExpanded ? 'visible' : 'hidden'};
  
  padding-top: ${({ $isExpanded }) => $isExpanded ? '0' : '0'};
  margin-top: ${({ $isExpanded }) => $isExpanded ? '20px' : '0'};
`;

export const ElementsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px
`;

export const ElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.color.text.subtitle};
`;




