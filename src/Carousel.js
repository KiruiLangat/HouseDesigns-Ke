import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import carousel1 from './carousel1.svg';
import carousel2 from './carousel2.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

import { Pagination, Navigation } from 'swiper/modules';



export default function App() {
  
  return (
    <>
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false,}}
        loop={true}
       
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide data-caption="caption1"><img src={carousel1} alt='Maisonette'/></SwiperSlide>
        <SwiperSlide data-caption="caption2"><img src={carousel2} alt='Maisonette'/></SwiperSlide>
        <SwiperSlide data-caption="caption1"><img src={carousel1} alt='Maisonette'/></SwiperSlide>
        <SwiperSlide data-caption="caption2"><img src={carousel2} alt='Maisonette'/></SwiperSlide>

  
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>

      </Swiper>

    </>
  );
}
