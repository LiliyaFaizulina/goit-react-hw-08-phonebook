import styled from 'styled-components';
import { TextField } from '@mui/material';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  @media screen and (min-width: 480px) {
    width: 440px;
    margin: 0 auto;
  }
`;

export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.blue};
`;

export const Wrapper = styled.div`
  width: calc(100% - 40px);
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;

export const Box = styled.div`
  box-shadow: ${p => p.theme.boxShadow};
  border-radius: 4px;
  padding: 30px 20px;
  min-height: 290px;
  :not(:last-child) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    padding: 30px 100px;
  }
`;

export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      backgroundColor: 'rgba(25, 118, 210, 0.2)',
    },
    '&:hover fieldset': {
      boxShadow: `0px 0px 1px 1px rgba(25, 118, 210, 0.5)`,
    },
  },
  width: '100%',
});

export const Text = styled.p`
  color: ${p => p.theme.colors.light};

  letter-spacing: 0.03em;
  line-height: 1.8;
`;
