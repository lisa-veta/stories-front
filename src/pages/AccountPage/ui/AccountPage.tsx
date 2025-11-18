import { ContentSideBar } from '@widgets/ContentSideBar';
import * as SC from './AccountPage.styles';
export const AccountPage = () => {
  return(
    <SC.MainContainer>
      <ContentSideBar/>
      <SC.ContentContainer>
      </SC.ContentContainer>
    </SC.MainContainer>
  );
};
