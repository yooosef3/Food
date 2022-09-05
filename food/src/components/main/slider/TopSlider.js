import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../styles/main/slider/TopSlider.css";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";

const TopSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 4000,
      }}
      pagination={{ clickable: true }}
      className="topSlider"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="slide1">
        <section>
          <h3>به فروشگاه آنلاین ما خوش آمدید</h3>
          <h1>فروشگاه های مواد غذایی</h1>
          <h2>برای خوراک شناسان واقعی</h2>
          <button type="button">خرید کن</button>
        </section>
      </SwiperSlide>
      <SwiperSlide className="slide2">
        <section>
          <h3> انتخاب گسترده ای از نان صنعتگر</h3>
          <h1> محصولات پخته شده</h1>
          <h2> در فروشگاه ما موجود است</h2>
          <button type="button">خرید کن</button>
        </section>
      </SwiperSlide>
      <SwiperSlide className="slide3">
        <section>
          <h3> تازه و خوش طعم</h3>
          <h1> سبزیجات</h1>
          <h2> که دوست داری</h2>
          <button type="button">خرید کن</button>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default TopSlider;
