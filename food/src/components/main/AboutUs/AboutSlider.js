import "../../../styles/main/AboutUs/AboutSlider.css";
import "swiper/css";

import { Autoplay, Thumbs } from "swiper";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import about1 from "../../../assets/images/about-1-634x373.jpg";
import about2 from "../../../assets/images/about-2-634x373.jpg";
import about3 from "../../../assets/images/about-3-634x373.jpg";
import about4 from "../../../assets/images/about-4-634x373.jpg";

const AboutSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <main className="AboutSwiper">
      <Swiper
        className="AboutSlider"
        modules={[Thumbs, Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        thumbs={{ swiper: thumbsSwiper }}
      >
        <SwiperSlide>
          <img alt="about" src={about1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="about" src={about2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="about" src={about3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="about" src={about4} />
        </SwiperSlide>
      </Swiper>

      <Swiper
        className="AboutThumb"
        modules={[Thumbs]}
        slidesPerView={4}
        spaceBetween={10}
        watchSlidesProgress
        loop={true}
        onSwiper={setThumbsSwiper}
      >
        <SwiperSlide>
          <img alt="about" src={about1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="about" src={about2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="about" src={about3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="about" src={about4} />
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default AboutSlider;
