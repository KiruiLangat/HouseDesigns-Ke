import React, { useEffect, useState } from 'react';
import './gallerycarousel.css';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Thumbs } from 'swiper/modules';


import 'swiper/swiper-bundle.css';
import 'swiper/css/scrollbar';

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
        return <div className='loading'>Loading<span>...</span></div>;
    }

    return (
        <div className='gallery-carousel' style={style}>
            {/* Thumbnails */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={images.length}
                height={250}
                objectFit={'fill'}
                borderColor={'black'}
                freeMode={true}
                watchSlidesProgress={true}
                direction={'vertical'}
                
                className='gallery-thumbs-swiper'
            >
                {images.map((src, index) => (
                    <SwiperSlide
                        key={index}
                        onClick={() => handleImageChange(index)}
                        className={`thumb ${selectedThumb === index ? 'thumb-active' : ''}`}
                    >
                        <img src={src} alt={`${index + 1}`} />
                        
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
                className='gallery-swiper'
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`${index + 1}`} />

                        {/* Product Image Overlay */}
                       
                        <div className='product-overlay'>
                            <h2>{images.title}</h2>
                        </div>
                        
                    </SwiperSlide>
                ))}
                
            </Swiper>

            
        </div>
    );
}
