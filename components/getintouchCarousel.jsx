import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import carousel3 from '../assets/images/carousel3.jpg';
import carousel2 from '../assets/images/carousel2.jpg';

import '../assets/styles/getintouchCarousel.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@fontsource/poppins';
import styles from '../assets/styles/getintouchCarousel.module.css';

export default function App() {
  return (
    <>
      <Swiper
        autoplay={{ delay: 3500, disableOnInteraction: true }}
        loop={true}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.CTASwiper} // Apply the CSS module class
      >
        <SwiperSlide>
          <Image src={carousel2} alt='Maisonette' loading='lazy'layout='fill' objectFit='cover' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={carousel3} alt='Maisonette' loading='lazy'layout='fill' objectFit='cover'  />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={carousel2} alt='Maisonette' loading='lazy'layout='fill' objectFit='cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={carousel3} alt='Maisonette' loading='lazy'layout='fill' objectFit='cover'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
