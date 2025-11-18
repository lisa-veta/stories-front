import { Header } from '@widgets/Header';
import { Outlet } from 'react-router-dom';
import * as SC from './Layout.styles'; // создайте файл стилей

export const Layout = () => {
  return(
    <SC.LayoutContainer>
      <Header/>
      <SC.MainContent>
        <Outlet />
      </SC.MainContent>
    </SC.LayoutContainer>
  );
};
