import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { theme, colors } from '../style/theme';
import globals from '../style/globals';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${globals}
`;

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return <Container>
      <GlobalStyle />
      <ThemeProvider colors={colors} theme={theme}>
        <Component {...pageProps}/>
      </ThemeProvider>
    </Container>;
  }
};
