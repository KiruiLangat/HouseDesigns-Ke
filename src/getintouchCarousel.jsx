import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import carousel3 from './images/carousel3.jpg';
import carousel2 from './images/carousel2.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './getintouchCarousel.css';
import '@fontsource/poppins'

const style = {
  fontFamily: 'Poppins',
}

export default function App() {
  
  return (
    <>
      <Swiper
        autoplay={{ delay: 3500, disableOnInteraction: true }}
        loop={true}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[Autoplay,Pagination, Navigation]}
        className="CTASwiper"
        style={style}
      >
        <SwiperSlide >
            <img src={carousel2} alt='Maisonette' loading='lazy'/>
        </SwiperSlide>
        <SwiperSlide >
            <img src={carousel3} alt='Maisonette' loading='lazy' />
        </SwiperSlide>
        <SwiperSlide >
            <img src={carousel2} alt='Maisonette' loading='lazy'/>
        </SwiperSlide>
        <SwiperSlide >
            <img src={carousel3} alt='Maisonette' loading='lazy'/>
        </SwiperSlide>
      </Swiper>

    </>
  );
}
