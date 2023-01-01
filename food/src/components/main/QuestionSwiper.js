import "../../styles/main/QuestionSwiper.css";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import React from "react";
import bread from "../../assets/images/product-big-2-303x304.png";
import cheese from "../../assets/images/product-big-3-303x304.png";
import juice from "../../assets/images/product-big-1-303x304.png";

// Import Swiper styles

const QuestionSwiper = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={5}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      className="QuestionSlider"
    >
      <SwiperSlide>
        <img alt="question" src={cheese} />
        <h2>
          <Link to="/singleproduct/bagels">Parmesan Cheese</Link>
        </h2>
        <h3>23.00 $</h3>
        <span>30.00 $</span>
      </SwiperSlide>
      <SwiperSlide>
        <img alt="question" src={juice} />
        <h2>
          <Link to="/singleproduct/strawberries">Sparkling Juice</Link>
        </h2>
        <h3>15.00 $</h3>
        <span>20.00 $</span>
      </SwiperSlide>
      <SwiperSlide>
        <img alt="question" src={bread} />
        <h2>
          <Link to="/singleproduct/bread">Whole Grain Bread</Link>
        </h2>
        <h3>13.00 $</h3>
        <span>18.00 $</span>
      </SwiperSlide>
    </Swiper>
  );
};

export default QuestionSwiper;
