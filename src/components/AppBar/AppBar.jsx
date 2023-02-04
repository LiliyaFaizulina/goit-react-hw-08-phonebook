import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import Container from '@mui/material/Container';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header
      style={{
        boxShadow: '0px 1px 1px 1px rgba(25, 118, 210, 0.5)',
        backgroundColor: '#5893df',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '10px',
          paddingTop: '10px',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </Container>
    </header>
  );
};
