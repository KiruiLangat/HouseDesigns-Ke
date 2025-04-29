import '../assets/styles/globals.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { CartProvider } from '../services/shop/cartContext';


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
      <CartProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
      </CartProvider>
    </ThemeProvider>
  );
}
