import { css } from 'styled-components';

import { theme } from './theme';

const globals = css`
  * {
    box-sizing: border-box;
  }

  html {
    font: 10px/10px ${theme.font.family.default};
  }

  body {
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white};
    font-size: ${theme.font.size.small};
  }

  p {
    font-size: ${theme.font.size.small};
    line-height: 2.3rem;
  }

  h1, h2, h3, h4, h5, h6, p, strong, li {
    color: ${theme.colors.white};
  }

  h1 { font-size: 3.8rem; line-height: 4.2rem; }

  a {
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`;

export default globals;
