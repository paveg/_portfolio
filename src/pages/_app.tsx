import { AppProps } from 'next/app';
import reset from 'styled-reset';
import React from 'react';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

type GlobalStyleProps = {
  theme: {
    backgroundColor: string;
  };
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${reset}
  // Write your global styles.
  body {
    background: ${(props) => props.theme.backgroundColor};
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
        <title key="title">portfolio</title>
      </Head>

      <ThemeProvider theme={{ backgroundColor: 'white' }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
