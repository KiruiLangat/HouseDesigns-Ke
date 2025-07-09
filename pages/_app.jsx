import '../assets/styles/globals.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { CartProvider } from '../services/shop/cartContext';
import OrganizationJsonLd from '../components/SEO/OrganizationJsonLd';


import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        {/* Only include favicon and manifest here. All meta tags should be set per-page. */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
      </CartProvider>
    </ThemeProvider>
  );
}
