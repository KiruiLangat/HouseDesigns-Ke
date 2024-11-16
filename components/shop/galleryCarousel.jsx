import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../assets/styles/shop/gallerycarousel.module.css';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Thumbs } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css/scrollbar';
import { color } from '@mui/system';

const style = {
    fontFamily: 'Poppins',
};

SwiperCore.use([Scrollbar, Thumbs]);

export default function PdCarousel({ images, product }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [selectedThumb, setSelectedThumb] = useState(0);

    const handleImageChange = (index) => {
        setSelectedThumb(index);
    };

    useEffect(() => {
        if (thumbsSwiper) {
            thumbsSwiper.slideTo(selectedThumb);
        }
    }, [selectedThumb, thumbsSwiper]);

    if (!images || images.length === 0) {
        return <div className={styles.loading}>Loading<span>...</span></div>;
    }

    return (
        <div className={styles.galleryCarousel} style={style}>
            {/* Thumbnails */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={5}
                slidesPerView={images.length}
                height={250}
                width={150}
                objectFit={'fill'}
                freeMode={true}
                watchSlidesProgress={true}
                direction={'vertical'}
                className={styles.galleryThumbsSwiper}
            >
                {images.map((src, index) => (
                    <SwiperSlide
                        key={index}
                        onClick={() => handleImageChange(index)}
                        className={`${styles.thumb} ${selectedThumb === index ? styles.thumbActive : ''}`}
                    >
                        <Image src={src} alt={`${index + 1}`} layout="fill" objectFit="cover" style={{borderRadius: '10px' }} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Main Image */}
            <Swiper
                spaceBetween={10}
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                thumbs={{ swiper: thumbsSwiper }}
                className={styles.gallerySwiper}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Image src={src} alt={`${index + 1}`} layout="fill" objectFit="cover" />

                        {/* Product Image Overlay */}
                        <div className={styles.productOverlay}>
                            <h2>{images.title}</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
