import { useDispatch, useSelector } from 'react-redux';
import { selectEmail } from 'redux/auth/authSelectors';
import { logoutUser } from 'redux/auth/authOperation';
import { Button } from '@mui/material';
import { Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };
  return (
    <Wrapper>
      <p>{email}</p>
      <Button type="button" onClick={handleClick} variant="contained">
        Logout
      </Button>
    </Wrapper>
  );
};
