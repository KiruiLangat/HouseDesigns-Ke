import React, { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from '../../assets/styles/shop/landingPageCarousel.module.css'; // Import the CSS module

SwiperCore.use([Thumbs]);

export default function LandingPageCarousel({ onSelect }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [selectedThumb, setSelectedThumb] = useState(3); // Default to option 4 (index 3)

    const handleThumbClick = (index) => {
        setSelectedThumb(index);
        onSelect(`Option ${index + 1}`);
    };

    useEffect(() => {
        if (thumbsSwiper) {
            thumbsSwiper.slideTo(selectedThumb);
        }
    }, [selectedThumb, thumbsSwiper]);

    const thumbColors = ['thumbColor1', 'thumbColor2', 'thumbColor3', 'thumbColor4'];
    const shadowClasses = ['mainSwiperShadow1', 'mainSwiperShadow2', 'mainSwiperShadow3', 'mainSwiperShadow4'];

    return (
        <div className={styles.landingCarousel}>
            {/* Main Swiper */}
            <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                className={`${styles.mainSwiper} ${styles[shadowClasses[selectedThumb]]}`}
                initialSlide={3} // Start with option 4
            >
                <SwiperSlide className={styles.optionContent}>Content for slide 1</SwiperSlide>
                <SwiperSlide className={styles.optionContent}>Content for slide 2</SwiperSlide>
                <SwiperSlide className={styles.optionContent}>Content for slide 3</SwiperSlide>
                <SwiperSlide className={styles.optionContent}>Submit Your Brief</SwiperSlide> {/* Content for option 4 */}
            </Swiper>
            {/* Thumbs Swiper */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className={styles.thumbsSwiper}
            >
                {thumbColors.map((colorClass, index) => (
                    <SwiperSlide
                        key={index}
                        onClick={() => handleThumbClick(index)}
                        className={`${styles.thumb} ${styles[colorClass]} ${selectedThumb === index ? styles.thumbActive : ''}`}
                    >
                        {`Option ${index + 1}`}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
