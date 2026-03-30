/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from '../assets/styles/BrowseCarousel.module.css';
import '@fontsource/poppins';
import fetcher from '../lib/fetcher';

import Fallback1 from '../assets/images/residentials.jpg';
import Fallback2 from '../assets/images/maisonettes.jpg';

const style = {
  fontFamily: 'Poppins',
};

const fallbackProjects = [
  {
    id: 1,
    title: 'Residentials',
    image_url: Fallback1,
  },
  {
    id: 2,
    title: 'Gikambura House',
    image_url: Fallback2,
  },
  // Add more fallback projects as needed
];

export default function BrowseCarousel({ sub_category_name }) {
  const swiperRef = useRef(null);

  const { data: projects = fallbackProjects } = useSWR('/api/browse', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 30000,
  });

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.autoplay.start();
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false, waitForTransition: true }}
        loop={true}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.BrowseSwiper}
        style={style}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Link href={`/projects/${sub_category_name}/${project.title}`} legacyBehavior>
              <a>
                <Image 
                  src={project.image_url} 
                  alt={project.title} 
                  layout="fill" // Make image responsive
                  style={{objectFit: 'cover'}} 
                  
                  
                />
                <div className={styles.carouselOverlay}>
                  <p>{project.title}</p>
                </div>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
