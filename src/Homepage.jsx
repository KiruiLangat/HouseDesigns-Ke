import React from 'react';
import { Helmet } from 'react-helmet';
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
    <div style={style}>
       <Helmet>
        <title>House Designs</title>
        <meta name='description' content='Discover the difference in Style, Design, Delivery and Comfort.' />
        <meta property='og:title' content='House Designs' />
        <meta property='og:description' content='Discover the difference in Style, Design, Delivery and Comfort.' />
        <meta property='og:image' content='https://housedesigns.co.ke/carousel3.jpg' />
        <meta property='og:image:width' content='300' />
        <meta property='og:image:height' content='300' />
        <meta property='og:url' content='https://housedesigns.co.ke/' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary' /> 
        <meta name='twitter:title' content='House Designs' />
        <meta name='twitter:description' content='Discover the difference in Style, Design, Delivery and Comfort.' />
        <meta name='twitter:image' content='https://housedesigns.co.ke/carousel3.jpg' />
        <meta name='twitter:image:width' content='144' />
        <meta name='twitter:image:height' content='144' />
        <meta name='twitter:url' content='https://housedesigns.co.ke/' />

      </Helmet>
    
      <Carousel />
      <GetStarted />
      <GetInTouch />
      <BrowseProjects />
      <AboutUs />
      <Articles />
      
    </div>
  );
}

export default Homepage;
