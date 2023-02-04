import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { NavList, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavList>
        {isLoggedIn ? (
          <li>
            <StyledNavLink to="contacts">PhoneBook</StyledNavLink>
          </li>
        ) : (
          <li>
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>
          </li>
        )}
      </NavList>
    </nav>
  );
};
