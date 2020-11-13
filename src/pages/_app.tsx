import '../../styles/globals.css';
import { AppProps, AppContext } from 'next/app';
import React from 'react';
import Head from 'next/head';

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

      <Component {...pageProps} />
    </>
  );
};

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const componentGetInitialProps = Component.getInitialProps || (() => Promise.resolve());

  const [pageProps] = await Promise.all([componentGetInitialProps(ctx)]);

  return {
    pageProps,
  };
};

export default App;
