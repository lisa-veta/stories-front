import { UnauthorizedError } from '@shared/api/core/errors.ts';
import { apiContainer } from '@shared/api/core/api-container.ts';
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
