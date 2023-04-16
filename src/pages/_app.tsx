import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import Head from 'next/head';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Header from 'components/Header';
import store from 'states/store';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session} >
        <Provider store={store}>
          <Head>
            <title>Atelier</title>
            <link rel="icon" href="/public/favicon.ico" />
          </Head>
          <div className="wrapper">
            <Header />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
