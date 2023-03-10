import "../../../styles/main/AboutUs/AboutHistorySlider.css";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";

const AboutHistorySlider = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          640: {
            spaceBetween: 15,
            slidesPerView: 1,
          },
          768: {
            spaceBetween: 25,
            slidesPerView: 2,
          },
          998: {
            spaceBetween: 45,
            slidesPerView: 3,
          }
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        className="aboutHistorySwiper"
      >
        <SwiperSlide className="first">
          <h3>تاسیس</h3>
          <p>
            چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته
            شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت
            حق تکثیر متون را ندارند
          </p>
        </SwiperSlide>
        <SwiperSlide className="second">
          <h3>مشارکت اول</h3>
          <p>
            چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته
            شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت
            حق تکثیر متون را ندارند
          </p>
        </SwiperSlide>
        <SwiperSlide className="third">
          <h3>راه اندازی وب سایت</h3>
          <p>
            چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته
            شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت
            حق تکثیر متون را ندارند
          </p>
        </SwiperSlide>
        <SwiperSlide className="forth">
          <h3>افتتاح فروشگاه های جدید</h3>
          <p>
            چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته
            شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت
            حق تکثیر متون را ندارند
          </p>
        </SwiperSlide>
        <SwiperSlide className="fifth">
          <h3>جشن 20 سالگی</h3>
          <p>
            چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته
            شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت
            حق تکثیر متون را ندارند
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default AboutHistorySlider;
