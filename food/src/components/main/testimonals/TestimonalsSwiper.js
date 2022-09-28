import "swiper/css";
import "../../../styles/main/testimonals/TestimonalsSwiper.css";

import { Autoplay, Navigation, Thumbs } from "swiper";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import testimonal1 from "../../../assets/images/user-7-87x87.jpg";
import testimonal2 from "../../../assets/images/user-8-87x87.jpg";
import testimonal3 from "../../../assets/images/user-9-87x87.jpg";

const TestimonalsSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className='testimonalsContainer'>
      <main className='TestimonalsSwiper'>
        <Swiper
          className='TestimonalsSlider'
          modules={[Thumbs, Autoplay, Navigation]}
          spaceBetween={50}
          navigation
          loop={true}
          autoplay={{
            delay: 4000,
          }}
          thumbs={{ swiper: thumbsSwiper }}
        >
          <SwiperSlide>
            <p>
              {" "}
              من سفارش زیادی از غذاهای خام وگان را امروز از طریق UPS دریافت کردم
              و از بسته بندی و تازگی و همچنین کیفیت وعده های غذایی خود بسیار تحت
              تاثیر قرار گرفتم.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              {" "}
              من تازه سفارشم را دریافت کردم و واقعا شگفت زده شدم. خیلی خوب بسته
              بندی شده بود و اقلام فوق العاده هستند. من تازه در سفارش آنلاین غذا
              هستم اما تجربه خوبی بود
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              {" "}
              باید بگویم که از سفارش اخیرم واقعاً تحت تأثیر قرار گرفتم. من قبلا
              محصولات مشابهی را از سایت های دیگر خریده بودم، اما این بار به دلیل
              انتخاب و قیمت عالی شما را انتخاب کردم{" "}
            </p>
          </SwiperSlide>
        </Swiper>

        <Swiper
          className='TestimonalsThumb'
          modules={[Thumbs]}
          slidesPerView={1}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
          }}
          spaceBetween={10}
          watchSlidesProgress
          loop={true}
          onSwiper={setThumbsSwiper}
        >
          <SwiperSlide>
            <div>
              <img src={testimonal1} alt="testimonals" />
              <h3>Bill McMillan</h3>
              <small>کاربر</small>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={testimonal2} alt="testimonals" />
              <h3>Kate Smith</h3>
              <small>کاربر</small>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={testimonal3} alt="testimonals" />
              <h3>Jane Peterson</h3>
              <small>کاربر</small>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
};

export default TestimonalsSwiper;
