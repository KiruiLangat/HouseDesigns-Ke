import React from 'react';
import Link from 'next/link';
import '@fontsource/poppins';

const style = {
  fontFamily: 'Poppins, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  textAlign: 'center',
  padding: '20px',
};

const buttonStyle = {
  backgroundColor: '#333',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '20px',
  fontFamily: 'Poppins, sans-serif',
};

const Custom404 = () => {
  return (
    <div style={style}>
      <h1 style={{ fontWeight: '600', fontSize: '8rem', margin: '0' }}>404</h1>
      <h2 style={{ fontWeight: '400', fontSize: '2rem', margin: '10px 0' }}>Page Not Found</h2>
      <p style={{ fontWeight: '300', maxWidth: '600px', textAlign: 'center' }}>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link href="/">
        <button style={buttonStyle}>Return to Homepage</button>
      </Link>
    </div>
  );
};

export default Custom404;