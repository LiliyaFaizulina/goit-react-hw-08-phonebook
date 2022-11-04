import styled from 'styled-components';

export const StyledForm = styled.form`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${p => p.theme.colors.bodyBg};
  display: flex;
  align-items: center;
  gap: 8px;
`;
