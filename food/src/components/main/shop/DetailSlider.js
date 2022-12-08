import "swiper/css";
import "../../../styles/main/DetailSlider.scss";

import { Autoplay, Thumbs } from "swiper";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const DetailSlider = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="slider-single">
      <Swiper
        className="DetailSlider"
        modules={[Thumbs, Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {data.product.imageAll.map((image) => (
          <SwiperSlide key={image.id}>
            <img alt="detail" src={image.url} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="DetailThumb"
        modules={[Thumbs]}
        slidesPerView={3}
        spaceBetween={5}
        watchSlidesProgress
        loop={true}
        onSwiper={setThumbsSwiper}
      >
        {data.product.imageAll.map((image) => (
          <SwiperSlide>
            <img alt="detail" src={image.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DetailSlider;
