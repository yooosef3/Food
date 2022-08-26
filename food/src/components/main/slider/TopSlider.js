import "swiper/css";
import 'swiper/css/bundle'
import "swiper/css/navigation";
import "swiper/css/pagination";

import { A11y, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import slide1 from '../../../assets/images/slide-1.jpg'
import slide2 from '../../../assets/images/slide-2.jpg'
import slide3 from '../../../assets/images/slide-3.jpg'
import styles from '../../../styles/main/slider/TopSlider.module.css'

const TopSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className={styles.slider}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img alt="slide" src={slide1}/>
      </SwiperSlide>
      <SwiperSlide>
        <img alt="slide" src={slide2}/>
      </SwiperSlide>
      <SwiperSlide>
        <img alt="slide" src={slide3}/>
      </SwiperSlide>
    </Swiper>
  );
};

export default TopSlider;
