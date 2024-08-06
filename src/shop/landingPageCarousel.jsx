import React, { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Thumbs} from 'swiper/modules'
import 'swiper/swiper-bundle.css';
import './landingPageCarousel.css'; // Import the CSS file

SwiperCore.use([Thumbs]);

export default function LandingPageCarousel({ onSelect }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [selectedThumb, setSelectedThumb] = useState(3); // Default to option 4 (index 3)

    const handleThumbClick = (index) => {
        setSelectedThumb(index);
        onSelect(`Option ${index + 1}`)
    };

    useEffect (() => {
        if (thumbsSwiper) {
            thumbsSwiper.slideTo(selectedThumb)
        }
    }, [selectedThumb, thumbsSwiper])

    const thumbColors = ['thumb-color-1', 'thumb-color-2', 'thumb-color-3', 'thumb-color-4'];
    const shadowClasses = ['main-swiper-shadow-1', 'main-swiper-shadow-2', 'main-swiper-shadow-3', 'main-swiper-shadow-4'];

    return (
        <div className='Landing-carousel'>
            {/* Main Swiper */}
            <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                className={`main-swiper ${shadowClasses[selectedThumb]}`}
                initialSlide={3} // Start with option 4
            >
                <SwiperSlide>Content for slide 1</SwiperSlide>
                <SwiperSlide>Content for slide 2</SwiperSlide>
                <SwiperSlide>Content for slide 3</SwiperSlide>
                <SwiperSlide>Submit Your Brief </SwiperSlide> {/* Content for option 4 */}
            </Swiper>

            {/* Thumbs Swiper */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className='thumbs-swiper'
            >
                {thumbColors.map((colorClass, index) => (
                    <SwiperSlide
                        key={index}
                        onClick={() => handleThumbClick(index)}
                        className={`thumb ${colorClass} ${selectedThumb === index ? 'thumb-active' : ''}`}
                    >
                        {`Option ${index + 1}`}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}