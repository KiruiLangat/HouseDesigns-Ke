import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '@fontsource/poppins';
import { useRouter } from 'next/router';

const style = {
  fontFamily: 'Poppins, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  textAlign: 'center',
  padding: '20px',
};

const buttonStyle = {
  backgroundColor: '#ED7D31',
  color: 'white',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: '500',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',
  margin: '10px',
  transition: 'background-color 0.3s ease',
};

const linksContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '10px',
  margin: '20px 0',
};

const Custom404 = () => {
  const router = useRouter();
  
  // Track 404 errors using analytics
  useEffect(() => {
    // You can add your analytics tracking code here
    console.log(`404 error occurred at: ${router.asPath}`);
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>Page Not Found | HouseDesigns</title>
        <meta name="description" content="The page you were looking for couldn't be found. Navigate back to HouseDesigns' homepage." />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div style={style}>
        
        <h1 style={{ fontWeight: '600', fontSize: '6rem', margin: '0', color: '#ED7D31' }}>404</h1>
        <h2 style={{ fontWeight: '500', fontSize: '2rem', margin: '10px 0' }}>Page Not Found</h2>
        <p style={{ fontWeight: '300', maxWidth: '600px', textAlign: 'center', marginBottom: '30px' }}>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        
        <div style={linksContainerStyle}>
          <Link href="/" legacyBehavior>
            <a style={buttonStyle}>Return to Homepage</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a style={buttonStyle}>Explore Our Blog</a>
          </Link>
          <Link href="/shop" legacyBehavior>
            <a style={buttonStyle}>Visit Our Shop</a>
          </Link>
          <Link href="/contact-us" legacyBehavior>
            <a style={buttonStyle}>Contact Us</a>
          </Link>
        </div>
        
        <p style={{ marginTop: '30px', fontSize: '14px' }}>
          If you believe this is an error, please <Link href="/contact-us" legacyBehavior><a style={{ color: '#ED7D31', textDecoration: 'underline' }}>contact us</a></Link>
        </p>
      </div>
    </>
  );
};

export default Custom404;