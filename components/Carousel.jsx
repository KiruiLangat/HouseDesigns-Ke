import React, { useRef } from 'react';
import useSWR from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from '../assets/styles/Carousel.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@fontsource/poppins';

import Fallback1 from '../assets/images/OurExpertise.jpg';
import Fallback2 from '../assets/images/bungalows.jpg';
import fetcher from '../lib/fetcher';

const style = {
  fontFamily: 'Poppins',
};

const fallbackProjects = [
  {
    id: 1,
    title: 'Big Bang Maisonette',
    location: 'Nyeri',
    image_url: Fallback1, // Corrected this line
  },
  {
    id: 2,
    title: 'Modern Bungalow',
    location: 'Kikuyu',
    image_url: Fallback2,
  },
  // Add more fallback projects as needed
];

export default function Carousel({ sub_category_name }) {
  const swiperRef = useRef(null);

  const { data: projects = fallbackProjects } = useSWR('/api/swiper', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 30000,
  });

  return (
    <>
      <Swiper
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{ 
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev',
          nextElStyle: { color: '#ED7D31' },
          prevElStyle: { color: '#ED7D31' },
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
        style={style}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Link href={`/projects/${sub_category_name}/${project.title}`} legacyBehavior>
              <a>
                <Image 
                  src={project.image_url} 
                  alt={project.title}  
                  layout="fill"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.carouselOverlay1}>
                  <p>{project.title}</p>
                  <p>{project.location}</p>
                </div>
              </a>
            </Link>
          </SwiperSlide>
        ))}

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
}
