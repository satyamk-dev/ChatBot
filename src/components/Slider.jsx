import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Autoplay } from 'swiper/modules'; // ✅ added Autoplay
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import './Slider.css';

const slides = [
    '/college/college1.jpg',
    '/college/college2.jpg',
    '/college/college3.jpg',
    '/college/college4.jpg',
    '/college/college5.jpg',
    '/college/college6.jpg',
    '/college/college7.jpg',
];

function Slider() {
    return (
        <div className="slider-container">
            <Swiper
                effect="creative"
                grabCursor={true}
                navigation={true}
                autoplay={{
                    delay: 3000, // 3 seconds between slides
                    disableOnInteraction: false, // keeps autoplay even when user interacts
                }}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative, Navigation, Autoplay]} // ✅ added Autoplay module here
                className="my-swiper"
            >
                {slides.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-wrapper">
                            <img src={imgSrc} alt={`Slide ${index + 1}`} className="slide-image" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
