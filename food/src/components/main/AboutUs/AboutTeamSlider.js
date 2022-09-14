import "swiper/css";
import "../../../styles/main/AboutUs/AboutTeamSlider.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper";
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
      modules={[Autoplay, Pagination, Navigation]}
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
      className="AboutTeamSlider"
    >
      <SwiperSlide>
        <div className="team-about">
          <img src={team1} alt="team" />
        </div>
        <h2>Richard Ferrand</h2>
        <p>Richard Ferrand مدیر دوره PADI و موسس شرکت ما است</p>
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
        <p>Rebecca مربی مدرس تخصصی grocmart است که در سال 2010 به ما پیوست.</p>
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
        <p>Peter از روز اول به عنوان PADI Divemaster با ما کار کرده است.</p>
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
        <p>Martin مسئول تمام مراحل حسابداری در grocmart است.</p>
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
        <p>Caroline از روز اول به عنوان PADI Divemaster با ما کار کرده است.</p>
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
        <p>Will از روز اول به عنوان PADI Divemaster با ما کار کرده است.</p>
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
