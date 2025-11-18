import styled from 'styled-components';
import { Typography } from '@shared/ui/Typography';

export const Header = styled.header`
  width: 100%;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.color.background.modal};
  color: ${({ theme }) => theme.color.text.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
    align-items: center;
    gap: 30px;
`;

export const Link = styled(Typography).attrs({ as: 'a' })`
    text-decoration: none;
    cursor: pointer;
    color: white;
    &:hover {
        text-decoration: underline;
    }
    transition: text-decoration 0.5s ease;
`;
