import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import * as React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet();
  const origRenderPage = ctx.renderPage;

  const renderOptions = { enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />) };
  ctx.renderPage = () => origRenderPage(renderOptions);
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {sheet.getStyleElement()}
      </>
    ),
  };
};

export default MyDocument;
