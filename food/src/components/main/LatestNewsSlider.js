import "../../styles/main/LatestNewsSlider.css";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BLOGS } from "../../graphql/queries";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";
import React from "react";
import { useQuery } from "@apollo/client";

const LatestNewsSlider = () => {
  const { loading, data, error } = useQuery(BLOGS);
  if (loading) return <Loader />;
  if (error)
    return (
      <h3 style={{ color: "#e52029", textAlign: "center" }}>
        یک خطای شبکه رخ داده است, بعدا امتحان کنید
      </h3>
    );
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={5}
      breakpoints={{
        375: {
          width: 375,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      className="latestNewsSlider"
    >
      {data.blogs.map(({id, images, title, slug}) => (
        <SwiperSlide key={id}>
          <Link to={`/blogpost/${slug}`} className="newsImg">
            <div>
              <img alt="news" src={images.url} />
            </div>
          </Link>

          <div className="latest-info">
            <h4>
              <Link to={`/blogpost/${slug}`}>{title}</Link>
            </h4>
            <p>1 مهر, 1401</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LatestNewsSlider;
