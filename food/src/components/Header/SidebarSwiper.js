import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../../styles/header/SidebarSwiper.css";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import fruit1 from "../../assets/images/about-5-350x269.jpg";
import fruit2 from "../../assets/images/about-6-350x269.jpg";
import fruit3 from "../../assets/images/about-7-350x269.jpg";

function SidebarSwiper() {
  return (
    <div className="container">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        navigation
        className="sidebarSwiper"
        spaceBetween={10}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src={fruit1} className="fruit" alt="fruit1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fruit2} className="fruit" alt="fruit2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fruit3} className="fruit" alt="fruit3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SidebarSwiper;
