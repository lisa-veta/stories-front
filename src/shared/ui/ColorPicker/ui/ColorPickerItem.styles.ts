import styled from 'styled-components';


export const Container = styled.div`
  padding: 5px 19px;
  display: flex;
  gap: 10px;
    align-items: center;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Circle = styled.div<{ $color: string }>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  cursor: pointer;
`;
