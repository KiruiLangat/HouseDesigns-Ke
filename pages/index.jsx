import React from 'react';
import Head from 'next/head';
import Carousel from '../components/Carousel.jsx';
import GetStarted from '../components/GetStarted.jsx';
import GetInTouch from '../components/getInTouch.jsx';
import BrowseProjects from '../components/BrowseProjects.jsx';
import Articles from '../components/Articles.jsx';
import styles from '../assets/styles/Homepage.module.css';
import '@fontsource/poppins';

const style = {
  fontFamily: 'Poppins',
};

function Homepage() {
  return (
    <div className={styles.container} style={style}>
      <Head>
        <title>HouseDesigns | Discover the difference in Style, Design, Delivery and Comfort</title>
        <meta name="description" content="Discover the difference in Style, Design, Delivery and Comfort. HouseDesigns is your trusted partner for architecture, interior, and project management in Kenya." />
        <meta property="og:title" content="HouseDesigns | Discover the difference in Style, Design, Delivery and Comfort" />
        <meta property="og:description" content="Discover the difference in Style, Design, Delivery and Comfort. HouseDesigns is your trusted partner for architecture, interior, and project management in Kenya." />
        <meta property="og:image" content="https://housedesigns.co.ke/carousel3.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://housedesigns.co.ke/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://housedesigns.co.ke/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HouseDesigns | Discover the difference in Style, Design, Delivery and Comfort" />
        <meta name="twitter:description" content="Discover the difference in Style, Design, Delivery and Comfort. HouseDesigns is your trusted partner for architecture, interior, and project management in Kenya." />
        <meta name="twitter:image" content="https://housedesigns.co.ke/carousel3.jpg" />
        <meta name="twitter:url" content="https://housedesigns.co.ke/" />
        {/* Organization JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HouseDesigns",
              "url": "https://housedesigns.co.ke/",
              "logo": "https://housedesigns.co.ke/logo.svg",
              "sameAs": [
                "https://x.com/HouseDesignsKe",
                "https://www.linkedin.com/company/house-designske/",
                "https://www.instagram.com/house_designske/"
              ]
            })
          }}
        />
      </Head>
    
      <Carousel />
      <GetStarted />
      <GetInTouch />
      <BrowseProjects />
      <Articles />
    </div>
  );
}

export default Homepage;
