import React from 'react';
import {Swiper,SwiperSlide} from "swiper/react"
import {EffectCoverflow} from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const SwiperComponent = ({swiperImage,handleChange}) => {
    return (
        <div style={{width: "300px", height: "300px"}}>
            <Swiper
                // direction={'vertical'}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={ false}
                modules={[ EffectCoverflow, ]}
                className="mySwiper"
                slidesPerView={3}
                onTransitionEnd={handleChange}
            >
                {swiperImage.map(item =>
                    <SwiperSlide key={item}>
                        <img src={item.url} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default SwiperComponent;