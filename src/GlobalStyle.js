import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: '109LeantheWall';
    src: url('./fonts/109LeantheWall.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
  font-family: 'Pretendard';
  src: url('./fonts/Pretendard-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('./fonts/Pretendard-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('./fonts/Pretendard-ExtraBold.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('./fonts/Pretendard-ExtraLight.ttf') format('truetype');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('./fonts/Pretendard-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('./fonts/Pretendard-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('./fonts/Pretendard-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('./fonts/Pretendard-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('./fonts/Pretendard-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}

`;

export default GlobalStyle;
