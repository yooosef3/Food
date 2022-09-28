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
import Loader from "../../Loader";
import React from "react";
import { TEAM } from "../../../graphql/queries";
import { useQuery } from "@apollo/client";

const AboutTeamSlider = () => {
  const { loading, data, error } = useQuery(TEAM);
  if (loading) return <Loader />;
  if (error)
    return (
      <h2 style={{ color: "#e52029", textAlign:'center'}}>
        یک خطای شبکه رخ داده است, بعدا امتحان کنید
      </h2>
    );

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
      {data.teams.map((person) => (
        <SwiperSlide key={person.id}>
          <div className="team-about">
            <img src={person.image.url} alt="team" />
          </div>
          <h2>{person.name}</h2>
          <p>{person.text}</p>
          <div className="icons">
            <FaFacebookF />
            <BsTwitter />
            <BsInstagram />
            <IoLogoGoogleplus />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default AboutTeamSlider;
