import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import { StyledSection } from './Section.styled';

export const Section = ({ children }) => {
  return (
    <StyledSection>
      <Container maxWidth="md">{children}</Container>
    </StyledSection>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
