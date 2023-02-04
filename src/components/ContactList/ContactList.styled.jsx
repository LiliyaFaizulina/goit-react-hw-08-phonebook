import styled from 'styled-components';

export const Contact = styled.li`
  position: relative;
  padding: 10px;
  align-items: center;
  margin-bottom: 10px;
  background-color: rgba(25, 118, 210, 0.2);
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonsWrapper = styled.div`
  margin-left: auto;
`;

export const ContactLink = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: ${p => p.theme.colors.blue};
  margin-top: 5px;
`;
