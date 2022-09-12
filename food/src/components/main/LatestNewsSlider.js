import "../../styles/main/LatestNewsSlider.css";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import React from "react";
import news1 from "../../assets/images/post-1-420x368.jpg";
import news2 from "../../assets/images/post-2-420x368.jpg";
import news3 from "../../assets/images/post-3-420x368.jpg";
import news4 from "../../assets/images/post-4-420x368.jpg";
import news5 from "../../assets/images/post-5-420x368.jpg";

const LatestNewsSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={150}
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      navigation
      loop={true}
      autoplay={{
        delay: 4000,
      }}
      pagination={{ clickable: true }}
      className="latestNewsSlider"
    >
      <SwiperSlide>
        <Link to="/" className="newsImg">
          <div>
            <img alt="news" src={news1} />
          </div>
        </Link>
        <h4>
          <Link to="/">چطور هنگام خرید سبزیجات, بهینه خرج کنیم</Link>
        </h4>
        <p>1 مهر, 1401</p>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/" className="newsImg">
          <div>
            <img alt="news" src={news2} />
          </div>
        </Link>
        <h4>
          <Link to="/">گشت و گذار در فروشگاه مواد غذایی برای تغذیه سالم</Link>
        </h4>
        <p>1 مهر, 1401</p>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/" className="newsImg">
          <div>
            <img alt="news" src={news3} />
          </div>
        </Link>
        <h4>
          <Link to="/">5 دلیل برای انتخاب grocmart برای خرید</Link>
        </h4>
        <p>1 مهر, 1401</p>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/" className="newsImg">
          <div>
            <img alt="news" src={news4} />
          </div>
        </Link>
        <h4>
          <Link to="/">8 نکته مفید برای خرید هوشمندانه مواد غذایی</Link>
        </h4>
        <p>1 مهر, 1401</p>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/" className="newsImg">
          <div>
            <img alt="news" src={news5} />
          </div>
        </Link>
        <h4>
          <Link to="/">چرا مردم به خرید آنلاین مواد غذایی روی آورده اند</Link>
        </h4>
        <p>1 مهر, 1401</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default LatestNewsSlider;
