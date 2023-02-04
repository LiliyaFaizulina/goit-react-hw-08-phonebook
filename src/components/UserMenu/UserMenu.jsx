import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logoutUser } from 'redux/auth/authOperation';
import { Button } from '@mui/material';
import { Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const { name, avatarUrl } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };
  return (
    <Wrapper>
      <img src={avatarUrl} alt="Avatar" height="30px" width="30px" />
      <p>{name}</p>
      <Button
        type="button"
        onClick={handleClick}
        variant="contained"
        size="small"
      >
        Logout
      </Button>
    </Wrapper>
  );
};
