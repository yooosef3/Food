import "../../styles/main/QuestionSwiper.css";
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import React from "react";
import cheese from "../../assets/images/product-big-3-303x304.png";
import juice from "../../assets/images/product-big-1-303x304.png";
import bread from "../../assets/images/product-big-2-303x304.png";
const QuestionSwiper = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={5}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
      }}
      pagination={{ clickable: true }}
      className="QuestionSlider"
    >
      <SwiperSlide>
        <img alt="question" src={cheese} />
        <h2>Parmesan Cheese</h2>
        <h3>23.00 $</h3>
        <span>30.00 $</span>
      </SwiperSlide>
      <SwiperSlide>
        <img alt="question" src={juice} />
        <h2>Sparkling Juice</h2>
        <h3>15.00 $</h3>
        <span>20.00 $</span>
      </SwiperSlide>
      <SwiperSlide>
        <img alt="question" src={bread} />
        <h2>Whole Grain Bread</h2>
        <h3>13.00 $</h3>
        <span>18.00 $</span>
      </SwiperSlide>
    </Swiper>
  );
};

export default QuestionSwiper;
