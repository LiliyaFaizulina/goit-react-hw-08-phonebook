import Container from '@mui/material/Container';
import { StyledSection } from './Section.styled';

export const Section = ({ children }) => {
  return (
    <StyledSection>
      <Container maxWidth="md">{children}</Container>
    </StyledSection>
  );
};
