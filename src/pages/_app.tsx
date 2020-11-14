import { AppProps } from 'next/app';
import reset from 'styled-reset';
import React from 'react';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Color from '../lib/color';

type GlobalStyleProps = {
  theme: {
    backgroundColor: string;
  };
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${reset}
  // Write your global styles.
  html {
    height: 100%;
  }
  body {
    font-size: 1rem;
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.5;
    background: ${(props) => props.theme.backgroundColor};
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    const jss = document.querySelector('#jss-server-side');
    if (jss && jss.parentNode) {
      jss.parentNode.removeChild(jss);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width,initial-scale=1.0,viewport-fit=cover"
        />
        <meta name="Description" content="Ryota Ikezawa's portfolio" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
          rel="preload"
          as="style"
        />
        <title key="title">portfolio</title>
      </Head>

      <ThemeProvider theme={{ backgroundColor: Color.white }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
