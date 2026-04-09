import styled from 'styled-components';

export const ContentWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center; /* центр по горизонтали */
  
  overflow-y: auto; /* скролл */
`;

export const SettingsGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    max-width: 700px; 
`;
export const Layout = styled.div`
    display: flex;
    width: 100%;
    height: 100vh; 
`;

export const Sidebar = styled.div`
    width: 220px;
    flex-shrink: 0; /* не сжимается */

    display: flex;
    flex-direction: column;
    gap: 8px;

    padding: 12px;
    border-radius: 20px;

    background-color: ${({ theme }) => theme.color.background.paper};

    height: fit-content; 
    margin: 16px; 
`;

export const SidebarItem = styled.div<{ active?: boolean }>`
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;

  background: ${({ active, theme }) =>
    active ? theme.color.background.default : 'transparent'};

  color: ${({ theme }) => theme.color.text.primary};

  &:hover {
    background: ${({ theme }) => theme.color.background.default};
  }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 700px;

    display: flex;
    flex-direction: column;

    padding: 24px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;