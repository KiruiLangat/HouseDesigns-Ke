import React, {useState, useEffect, useRef}from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';
import '@fontsource/poppins'

const style = {
  fontFamily: 'Poppins',
}


export default function Carousel({sub_category_name}) {
  const [projects, setProjects] = useState([])
  const swiperRef = useRef(null);


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/swiper')
        const contentType = response.headers.get("content-type");
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Oops, we haven't got JSON!");
        }
  
        try {
          const data = await response.json();
          setProjects(data);
        } catch (err) {
          console.error('Failed to parse JSON:', err);
        }
      }
      catch (error) {
        console.error('Error:', error)
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
        // onSwiper={(swiper) => {
        //   // swiperRef.current = swiper;
        //   swiper.autoplay.start();
        //   swiper.update();
        // }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
        style={style} 
      >
        {projects.map(project => ( 
          <SwiperSlide key={project.id}>
            <Link to={`/${project.title}`}>
              <img src={project.image_url} alt={project.title} loading='lazy'/>
              <div className='carousel-overlay1'>
                <p>{project.title}</p>
                <p>{project.location}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))
        }

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>

      </Swiper>

    </>
  );
}
