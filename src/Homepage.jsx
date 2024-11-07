import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
//import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import GetStarted from './GetStarted.jsx';
import GetInTouch from './getInTouch.jsx';
import BrowseProjects from './BrowseProjects.jsx';
import AboutUs from './AboutUs.jsx';
import Articles from './Articles.jsx';
//import Footer from './Footer.jsx';

import './Homepage.css';
import '@fontsource/poppins';


const style = {
  fontFamily: 'Poppins',
};

function Homepage() {
  return (
    <HelmetProvider>
    <div style={style}>
       <Helmet>
        <title>House Designs</title>
        <meta name='title' content='House Designs' />
        <meta name='description' content='Discover the difference in Style, Design, Delivery and Comfort.' />
        <meta property='og:description' content='Discover the difference in Style, Design, Delivery and Comfort.' />
        <meta property='og:image' content='https://housedesigns.co.ke/carousel3.jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='600' />
        <meta property='og:url' content='https://housedesigns.co.ke/' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary' /> 
        <meta name='twitter:title' content='House Designs' />
        <meta name='twitter:description' content='Discover the difference in Style, Design, Delivery and Comfort.' />
        <meta name='twitter:image' content='https://housedesigns.co.ke/carousel3.jpg' />
        <meta name='twitter:image:width' content='1024' />
        <meta name='twitter:image:height' content='512' />
        <meta name='twitter:url' content='https://housedesigns.co.ke/' />

      </Helmet>
    
      <Carousel />
      <GetStarted />
      <GetInTouch />
      <BrowseProjects />
      <AboutUs />
      <Articles />
      
    </div>
    </HelmetProvider>
  );
}

export default Homepage;
