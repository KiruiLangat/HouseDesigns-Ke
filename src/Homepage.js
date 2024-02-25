import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import GetStarted from './GetStarted';
import './Homepage.css';



function Homepage() {
  return (
    <div>
      <Header />
      <Carousel />
      <GetStarted />
    </div>
  );
}

export default Homepage;
