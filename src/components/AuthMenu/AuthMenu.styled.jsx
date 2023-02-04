import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: ${p => p.theme.colors.darkBlue};
  &.active {
    color: ${p => p.theme.colors.white};
  }
`;
