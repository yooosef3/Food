import "swiper/css";
import "../../../styles/main/AboutUs/AboutTeamSlider.css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import React from "react";
import team1 from "../../../assets/images/team-1-367x334.jpg";
import team2 from "../../../assets/images/team-2-367x334.jpg";
import team3 from "../../../assets/images/team-3-370x334.jpg";
import team4 from "../../../assets/images/team-15-370x334.jpg";
import team5 from "../../../assets/images/team-17-370x334.jpg";
import team6 from "../../../assets/images/team-20-370x334.jpg";

const AboutTeamSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
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
      loop={true}
      autoplay={{
        delay: 4000,
      }}
      className="AboutTeamSlider"
    >
      <SwiperSlide>
        <div className="team-about">
          <img src={team1} alt="team" />
        </div>
        <h2>Richard Ferrand</h2>
        <p>برنامه نویس ری اکت</p>
        <div className="icons">
          <FaFacebookF />
          <BsTwitter />
          <BsInstagram />
          <IoLogoGoogleplus />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-about">
          <img src={team2} alt="team" />
        </div>
        <h2>Rebecca Martinez</h2>
        <p>برنامه نویس انگولار</p>
        <div className="icons">
          <FaFacebookF />
          <BsTwitter />
          <BsInstagram />
          <IoLogoGoogleplus />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-about">
          <img src={team3} alt="team" />
        </div>
        <h2>Peter Johnson</h2>
        <p>برنامه نویس ویو</p>
        <div className="icons">
          <FaFacebookF />
          <BsTwitter />
          <BsInstagram />
          <IoLogoGoogleplus />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-about">
          <img src={team4} alt="team" />
        </div>
        <h2>Martin Wilson</h2>
        <p>برنامه نویس php</p>
        <div className="icons">
          <FaFacebookF />
          <BsTwitter />
          <BsInstagram />
          <IoLogoGoogleplus />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-about">
          <img src={team5} alt="team" />
        </div>
        <h2>Caroline Lopez</h2>
        <p>برنامه نویس لاراول</p>
        <div className="icons">
          <FaFacebookF />
          <BsTwitter />
          <BsInstagram />
          <IoLogoGoogleplus />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="team-about">
          <img src={team6} alt="team" />
        </div>
        <h2>Will McMillan</h2>
        <p>برنامه نویس پایتون</p>
        <div className="icons">
          <FaFacebookF />
          <BsTwitter />
          <BsInstagram />
          <IoLogoGoogleplus />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default AboutTeamSlider;
