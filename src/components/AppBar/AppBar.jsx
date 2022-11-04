import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import Container from '@mui/material/Container';
import { Notification } from 'components/Notification/Notification';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid grey',
          paddingBottom: '10px',
          paddingTop: '10px',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </Container>
      <Notification />
    </header>
  );
};
