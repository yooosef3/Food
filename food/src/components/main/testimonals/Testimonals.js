import PagesHeader from "../PagesHeader";
import React from "react";
import TestimonalStar from "./TestimonalStar";
import TestimonalsSwiper from "./TestimonalsSwiper";

const Testimonals = () => {
  return (
    <div>
      <PagesHeader headline={'نظرات'} path={'testimonals'}/>
      <TestimonalsSwiper />
      <TestimonalStar />
    </div>
  );
};

export default Testimonals;
