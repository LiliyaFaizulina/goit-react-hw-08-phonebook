import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  color: ${p => p.theme.colors.darkBlue};
  &.active {
    color: ${p => p.theme.colors.white};
  }
`;
