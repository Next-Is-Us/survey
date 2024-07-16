import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: '109LeantheWall';
    src: url('./fonts/109LeantheWall.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: '109LeantheWall', sans-serif;
  }
`;

export default GlobalStyle;
