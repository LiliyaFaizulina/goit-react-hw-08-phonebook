import styled from 'styled-components';

export const StyledForm = styled.form`
  position: absolute;
  padding: 5px 20px 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${p => p.theme.colors.inputBg};
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
