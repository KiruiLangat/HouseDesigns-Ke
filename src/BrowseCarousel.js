import React, {useState, useEffect, useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BrowseCarousel.css';
import '@fontsource/poppins'
import { BASE_URL } from './apiConfig';

const style = {
  fontFamily: 'Poppins',
}

export default function BrowseCarousel() {
  const [projects, setProjects] = useState([])
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/browse`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        setProjects(data);
        // swiperRef.current.update();
      }
      catch (error) {
        console.error(error)
      }
    }
    fetchProjects();
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [projects]);

  return (
    <>
      <Swiper
        onSwiper={(swiper)=> {
          swiperRef.current = swiper;
          swiper.autoplay.start();
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[Autoplay,Pagination, Navigation]}
        className="BrowseSwiper"
        style={style}
      >
        {projects.map((project) => (
          <SwiperSlide  key={project.id}>
          <img src={project.image_url} alt={project.title}/>
          <div className='carousel-overlay'>
            <p>{project.title}</p>
          </div>
        </SwiperSlide>
        ))}
        
        {/* // <SwiperSlide >
        //   <img src={carousel2} alt='Maisonette'/>
        //   <div className='carousel-overlay'>
        //     <p>Big Bang Maisonette</p>
        //   </div>
        // </SwiperSlide>
        // <SwiperSlide >
        //   <img src={carousel3} alt='Maisonette'/>
        //   <div className='carousel-overlay'>
        //     <p>Big Bang Maisonette</p>
        //   </div>
        // </SwiperSlide>
        // <SwiperSlide >
        //   <img src={carousel2} alt='Maisonette'/>
        //   <div className='carousel-overlay'>
        //     <p>Big Bang Maisonette</p>
        //   </div>
        // </SwiperSlide>
 */}
       

      </Swiper>

    </>
  );
}
