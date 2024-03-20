import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import carousel3 from './carousel3.jpg';
import carousel2 from './carousel2.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';
import '@fontsource/poppins'

const style = {
  fontFamily: 'Poppins',
}

export default function App() {
  
  return (
    <>
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop={true}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
        style={style}
      >
        <SwiperSlide >
          <img src={carousel3} alt='Maisonette'/>
          <div className='carousel-overlay1'>
            <p>Big Bang Maisonette</p>
            <p>Westlands, Nairobi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <img src={carousel2} alt='Maisonette'/>
          <div className='carousel-overlay1'>
            <p>Big Bang Maisonette</p>
            <p>Westlands, Nairobi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <img src={carousel3} alt='Maisonette'/>
          <div className='carousel-overlay1'>
            <p>Big Bang Maisonette</p>
            <p>Westlands, Nairobi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <img src={carousel2} alt='Maisonette'/>
          <div className='carousel-overlay1'>
            <p>Big Bang Maisonette</p>
            <p>Westlands, Nairobi</p>
          </div>
        </SwiperSlide>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>

      </Swiper>

    </>
  );
}
