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
        460: {
          width: 460,
          slidesPerView: 2,
        },

        640: {
          width: 640,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 4000,
      }}
      pagination={{ clickable: true }}
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
