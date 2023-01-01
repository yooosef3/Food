import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../styles/main/slider/TopSlider.css";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const TopSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 4000,
      }}
      pagination={{ clickable: true }}
      className="topSlider"
    >
      <SwiperSlide className="slide1">
        <section>
          <motion.h3
            initial={{ opacity: 0, transform: "translateY(-100%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 0.6 }}
          >
            به فروشگاه آنلاین ما خوش آمدید
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, transform: "translateY(100%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 1 }}
          >
            فروشــگاه های مــواد غــذایی
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, transform: "translateY(100%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 0.6 }}
          >
            برای خوراک شناسان واقعی
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, transform: "translateY(-100%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/singleproduct/meat-ball">خریــد کن</Link>
          </motion.button>
        </section>
      </SwiperSlide>
      <SwiperSlide className="slide2">
        <section>
          <motion.h3
            initial={{ opacity: 0, transform: "translateY(-100%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 0.6 }}
          >
            {" "}
            انتخاب گسترده ای از نان صنعتگر
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, transform: "translateY(100%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 1 }}
          >
            {" "}
            محصــولات پخته شـده
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, transform: "translateY(100%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 0.6 }}
          >
            {" "}
            در فروشگاه ما موجود است
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, transform: "translateY(-100%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 0.6 }}
            type="button"
          >
            <Link to="/singleproduct/bagels">خریــد کن</Link>
          </motion.button>
        </section>
      </SwiperSlide>
      <SwiperSlide className="slide3">
        <section>
          <motion.h3
            initial={{ opacity: 0, transform: "translateY(-100%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 0.6 }}
          >
            {" "}
            تازه و خوش طعم
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, transform: "translateY(100%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 1 }}
          >
            {" "}
            سبـزیجــات
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, transform: "translateY(100%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 0.6 }}
          >
            {" "}
            که دوست داری
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, transform: "translateY(-100%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 0.6 }}
            type="button"
          >
            <Link to="/singleproduct/sweet-peppers">خریــد کن</Link>
          </motion.button>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default TopSlider;
