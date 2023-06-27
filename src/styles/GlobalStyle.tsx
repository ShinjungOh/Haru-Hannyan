import { Global } from '@emotion/react';
import styled from '@emotion/styled';

const style = styled(`css`)`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  :lang(ko) {
    h1,
    h2,
    h3 {
      word-break: keep-all;
    }
  }
`;

const GlobalStyle = () => {
  <Global styles={style} />;
};

export default GlobalStyle;
