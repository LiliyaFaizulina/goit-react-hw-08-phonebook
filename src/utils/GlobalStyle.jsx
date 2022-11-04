import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}

body{
  font-family: 'Roboto', sans-serif;
  background-color: ${p => p.theme.colors.bodyBg};
  line-height: 1.5;
}

ul{
  padding: 0;
  margin: 0;
  list-style: none;
}

h1, h2, h3, p{
  margin: 0;
}
button{
  cursor: pointer;
  border: none;
}

`;

export default GlobalStyle;
