import "../../styles/main/SponsorSwiper.css";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import sponsor1 from "../../assets/images/clients-6-120x114.png";
import sponsor2 from "../../assets/images/clients-7-105x118.png";
import sponsor3 from "../../assets/images/clients-8-111x98.png";
import sponsor4 from "../../assets/images/clients-9-122x92.png";
import sponsor5 from "../../assets/images/clients-10-112x112.png";

const SponsorSwiper = () => {
  return (
    <Swiper
      breakpoints={{
        350: {
          spaceBetween: 15,
          slidesPerView: 2,
        },

        640: {
          spaceBetween: 15,
          slidesPerView: 3,
        },
        768: {
          spaceBetween: 15,
          slidesPerView: 4,
        },
        998: {
          spaceBetween: 15,
          slidesPerView: 5,
        },
      }}
      modules={[Pagination, Autoplay]}
      loop={true}
      pagination={{ clickable: true }}
      centeredSlides={true}
      className="sponsorSlider"
    >
      <SwiperSlide>
        <img src={sponsor1} alt="sponsor" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sponsor2} alt="sponsor" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sponsor3} alt="sponsor" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sponsor4} alt="sponsor" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sponsor5} alt="sponsor" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SponsorSwiper;
