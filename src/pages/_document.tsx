import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import * as React from 'react';

type Props = {};

class Document extends NextDocument<Props> {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const origRenderPage = ctx.renderPage;

    ctx.renderPage = () => {
      origRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });
    };

    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
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
