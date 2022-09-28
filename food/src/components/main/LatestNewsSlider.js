import "../../styles/main/LatestNewsSlider.css";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BLOGS } from "../../graphql/queries";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import React from "react";
import { useQuery } from "@apollo/client";

const LatestNewsSlider = () => {
  const { loading, data, error} = useQuery(BLOGS);
  if (loading) return <Loader />;
  if (error) return <h1 style={{color: '#e52029', textAlign:'center'}}>یک خطای شبکه رخ داده است, بعدا امتحان کنید</h1>;
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
      {data.blogs.map((blog) => (
        <SwiperSlide key={blog.id}>
          <Link to="/" className="newsImg">
            <div>
              <img alt="news" src={blog.images.url} />
            </div>
          </Link>
          <h4>
            <Link to="/">{blog.title}</Link>
          </h4>
          <p>1 مهر, 1401</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LatestNewsSlider;
