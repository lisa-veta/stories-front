import * as SC from './Header.styles';
import { Typography } from '@shared/ui/Typography';
import { Button } from '@shared/ui/Button';
import { ROUTES } from '@app/Router/routes';
import { authAPI } from '@shared/api';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await authAPI.logout();
    navigate(ROUTES.login);
  };

  return(
    <SC.Header>
      <Typography variant="body1" color={'white'}>
        Интерсвязь
      </Typography>
      <SC.Container>
        <SC.Link variant="body1" color={'white'} href={ROUTES.account}>
          Главная
        </SC.Link>
        <Button variant={'secondary'} onClick={handleLogout}>
          <Typography>
            Выйти
          </Typography>
        </Button>
      </SC.Container>
    </SC.Header>
  );
};
