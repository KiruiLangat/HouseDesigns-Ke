import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import GetStarted from './GetStarted';
import GetInTouch from './GetInTouch';

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

    </div>
  );
}

export default Homepage;
