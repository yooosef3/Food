import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../styles/main/AboutUs/AboutTestimSlider.css";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaQuoteLeft } from "react-icons/fa";
import React from "react";
import testim1 from "../../../assets/images/user-5-62x62.jpg";
import testim2 from "../../../assets/images/user-6-62x62.jpg";
import testim3 from "../../../assets/images/user-10-62x62.jpg";
import testim4 from "../../../assets/images/user-11-62x62.jpg";

const AboutTestimSlider = () => {
  return (
    <div>
      <Swiper
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        navigation
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        pagination={{ clickable: true }}
        className="AboutTestimSlider"
      >
        <SwiperSlide className="testimSlide">
          <FaQuoteLeft className="quote" />
          <p>
            من سفارش زیادی از غذاهای خام وگان را امروز از طریق UPS دریافت کردم و
            از بسته بندی و تازگی و همچنین کیفیت وعده های غذایی خود بسیار تحت
            تاثیر قرار گرفتم.
          </p>
          <div className="testim">
            <div>
              <img alt="user" src={testim1} />
            </div>
            <div>
              <h2>Mike Filan</h2>
              <span>کاربر</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimSlide">
          <FaQuoteLeft className="quote" />
          <p>
            من سفارش زیادی از غذاهای خام وگان را امروز از طریق UPS دریافت کردم و
            از بسته بندی و تازگی و همچنین کیفیت وعده های غذایی خود بسیار تحت
            تاثیر قرار گرفتم.
          </p>
          <div className="testim">
            <div>
              <img alt="user" src={testim2} />
            </div>
            <div>
              <h2>Bill McMillan</h2>
              <span>کاربر</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimSlide">
          <FaQuoteLeft className="quote" />
          <p>
            من سفارش زیادی از غذاهای خام وگان را امروز از طریق UPS دریافت کردم و
            از بسته بندی و تازگی و همچنین کیفیت وعده های غذایی خود بسیار تحت
            تاثیر قرار گرفتم.
          </p>
          <div className="testim">
            <div>
              <img alt="user" src={testim3} />
            </div>
            <div>
              <h2>Jane Peterson</h2>
              <span>کاربر</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimSlide">
          <FaQuoteLeft className="quote" />
          <p>
            من سفارش زیادی از غذاهای خام وگان را امروز از طریق UPS دریافت کردم و
            از بسته بندی و تازگی و همچنین کیفیت وعده های غذایی خود بسیار تحت
            تاثیر قرار گرفتم.
          </p>
          <div className="testim">
            <div>
              <img alt="user" src={testim4} />
            </div>
            <div>
              <h2>Kate Smith</h2>
              <span>کاربر</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutTestimSlider;
