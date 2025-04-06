import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Autoplay } from 'swiper/modules';
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
                    delay: 3000,
                    disableOnInteraction: false,
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
                modules={[EffectCreative, Navigation, Autoplay]}
                className="my-swiper"
            >
                {slides.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-wrapper">
                            <img
                                src={imgSrc}
                                alt={`Slide ${index + 1}`}
                                className="slide-image"
                            />
                            <button
                                className="slide-button"
                                onClick={() => alert(`Button on slide ${index + 1} clicked`)}
                            >
                                Learn More
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
