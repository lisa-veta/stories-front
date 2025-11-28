import styled from 'styled-components';

interface BadgeStyledProps {
  backgroundColor?: string;
}

export const Badge = styled.div<BadgeStyledProps>`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  border-radius: 100px;  
  background-color: ${({ backgroundColor, theme }) => backgroundColor ? backgroundColor : theme.color.background.primary};
  box-shadow:
          0 0 0 1px rgba(103, 110, 118, 0.16),
          0 2px 5px 0 rgba(103, 110, 118, 0.08),
          0 1px 1px 0 rgba(0, 0, 0, 0.12);
`;
