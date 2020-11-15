import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import * as React from 'react';

type Props = {};

class Document extends NextDocument<Props> {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    const sheet = new ServerStyleSheet();
    const origRenderPage = ctx.renderPage;

    ctx.renderPage = () => {
      origRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
    };

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheet.getStyleElement()],
    };
  }

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

export default Document;
