import styled from 'styled-components';

export const ContentSideBarStyles = styled.section`
    min-width: 220px;
    height: 100vh;
    padding: 16px;
    border-right: solid ${({ theme }) => theme.color.border.primary} 1px;
    display: flex;
    flex-direction: column;
    gap: 8px
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.color.border.primary};
  margin: 0;
`;

