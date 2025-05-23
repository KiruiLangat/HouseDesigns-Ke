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
        {/* Default meta tags that will be overridden by page-specific ones */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="HouseDesigns" />
        <meta name="keywords" content="HouseDesigns, HouseDesigns, House Plans, House Construction, House Design Company, Kenya" />
        <meta name="author" content="HouseDesigns" />
        <meta name="description" content="HouseDesigns - Discover the difference in Style, Design, Delivery and Comfort." />
        
        {/* Default Open Graph */}
        <meta property="og:site_name" content="HouseDesigns" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://housedesigns.co.ke/Logo.png" />
        
        {/* Default Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@housedesigns" />
        
        {/* Crawler directives */}
        <meta name="robots" content="index, follow" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest for PWA */}
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
