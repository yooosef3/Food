import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import React from "react";
import fruit1 from "../../assets/images/about-5-350x269.jpg";
import fruit2 from "../../assets/images/about-6-350x269.jpg";
import fruit3 from "../../assets/images/about-7-350x269.jpg";
import styles from "../../styles/header/SidebarSwiper.module.css";

function SidebarSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.container}
      >
        <SwiperSlide className={styles.slide}>
          <img alt="fruits" src={fruit1} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img alt="fruits" src={fruit2} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img alt="fruits" src={fruit3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SidebarSwiper;
