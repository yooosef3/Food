import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/main/ClientSwiper.css";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaQuoteLeft } from "react-icons/fa";
import React from "react";
import client1 from "../../assets/images/user-11-62x62.jpg";
import client2 from "../../assets/images/user-10-62x62.jpg";
import client3 from "../../assets/images/user-6-62x62.jpg";

const ClientSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={160}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      className="clientSlider"
    >
      <SwiperSlide className="clientSlide">
        <FaQuoteLeft className="quote" />
        <p>
          من سفارش زیادی از غذاهای خام وگان را امروز از طریق UPS دریافت کردم و
          از بسته بندی و تازگی و همچنین کیفیت وعده های غذایی خود بسیار تحت تاثیر
          قرار گرفتم.
        </p>
        <div className="client">
          <div>
            <img alt="user" src={client1} />
          </div>
          <div>
            <h2>Kate Smith</h2>
            <span>کاربر</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="clientSlide">
        <FaQuoteLeft className="quote" />
        <p>
          من تازه سفارشم را دریافت کردم و واقعا شگفت زده شدم. خیلی خوب بسته بندی
          شده بود و اقلام فوق العاده هستند. من تازه در سفارش آنلاین غذا هستم اما
          تجربه خوبی بود
        </p>
        <div className="client">
          <div>
            <img alt="user" src={client2} />
          </div>
          <div>
            <h2>Bill McMillan</h2>
            <span>کاربر</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="clientSlide">
        <FaQuoteLeft className="quote" />
        <p>
          باید بگویم که از سفارش اخیرم واقعاً تحت تأثیر قرار گرفتم. من قبلا
          محصولات مشابهی را از سایت های دیگر خریده بودم، اما این بار به دلیل
          انتخاب و قیمت عالی شما را انتخاب کردم{" "}
        </p>
        <div className="client">
          <div>
            <img alt="user" src={client3} />
          </div>
          <div>
            <h2>Jane Peterson</h2>
            <span>کاربر</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ClientSwiper;
