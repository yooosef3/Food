import "swiper/css";
import "../../../styles/main/DetailSlider.scss";

import { Autoplay, Thumbs } from "swiper";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import cheeze1 from "../../../assets/images/product-big-3-303x304.png";
import cheeze3 from "../../../assets/images/single-product-2-530x480.png";
import cheeze4 from "../../../assets/images/single-product-3-530x480.png";

const DetailSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="slider-single">
      <Swiper
        className='DetailSlider'
        modules={[Thumbs, Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        thumbs={{ swiper: thumbsSwiper }}
      >
        <SwiperSlide>
          <img alt="detail" src={cheeze1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="detail" src={cheeze4} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="detail" src={cheeze3} />
        </SwiperSlide>
      </Swiper>

      <Swiper
        className='DetailThumb'
        modules={[Thumbs]}
        slidesPerView={3}
        spaceBetween={5}
        watchSlidesProgress
        loop={true}
        onSwiper={setThumbsSwiper}
      >
        <SwiperSlide>
          <img alt="detail" src={cheeze1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="detail" src={cheeze4} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="detail" src={cheeze3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DetailSlider;
