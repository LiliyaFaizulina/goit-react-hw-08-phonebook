import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 20px;
  color: ${p => p.theme.colors.blue};
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 1.8;
`;

export const List = styled.ol`
  color: ${p => p.theme.colors.light};
  margin: 0;
  padding-left: 20px;
  letter-spacing: 0.03em;
  line-height: 1.8;
`;
