import { Wrapper, StyledLink } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <Wrapper>
      <li>
        <StyledLink to="register">Registration</StyledLink>
      </li>
      <li>
        <StyledLink to="login">Login</StyledLink>
      </li>
      <li>
        <StyledLink to="verify">Verification</StyledLink>
      </li>
    </Wrapper>
  );
};
