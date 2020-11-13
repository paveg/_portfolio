import '../../styles/globals.css';
import { AppProps, AppContext } from 'next/app';
import React from 'react';
import Layout from './../components/layout';

const App = ({Component, pageProps}: AppProps): JSX.Element => {
  React.useEffect(() => {
    const jss = document.querySelector('#jss-server-side')
    if (jss && jss.parentNode) {
      jss.parentNode.removeChild(jss)
    }
  }, [])

  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

App.getInitialProps = async ({Component, ctx}: AppContext) => {
  const componentGetInitialProps = Component.getInitialProps || (() => Promise.resolve())

  const [pageProps] = await Promise.all([
    componentGetInitialProps(ctx)
  ])

  return {
    pageProps
  }
}

export default App