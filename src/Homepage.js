import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import GetStarted from './GetStarted';
import GetInTouch from './getInTouch.js';
import BrowseProjects from './BrowseProjects.js';
import AboutUs from './AboutUs.js';

import './Homepage.css';
import '@fontsource/poppins';


const style = {
  fontFamily: 'Poppins',
};

function Homepage() {
  return (
    <div style={style}>
      <Header />
      <Carousel />
      <GetStarted />
      <GetInTouch />
      <BrowseProjects />
      <AboutUs />
      
    </div>
  );
}

export default Homepage;
