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
        <title>HouseDesigns</title>
        <meta name='title' content='HouseDesigns' />
        <meta name='description' content='Discover the difference in Style, Design, Delivery and Comfort.' />
        <meta property='og:description' content='Discover the difference in Style, Design, Delivery and Comfort.' />
        <meta property='og:image' content='/carousel3.jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='600' />
        <meta property='og:url' content='https://housedesigns.co.ke/' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary' /> 
        <meta name='twitter:title' content='HouseDesigns' />
        <meta name='twitter:description' content='Discover the difference in Style, Design, Delivery and Comfort.' />
        <meta name='twitter:image' content='/carousel3.jpg' />
        <meta name='twitter:image:width' content='1024' />
        <meta name='twitter:image:height' content='512' />
        <meta name='twitter:url' content='https://housedesigns.co.ke/' />
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
