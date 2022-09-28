import OfferBoxInfo from "./OfferBoxInfo";
import OfferBoxProducts from "./OfferBoxProducts";
import OfferNewsLetter from "./OfferNewsLetter";
import OfferProperties from "./OfferProperties";
import PagesHeader from "../PagesHeader";
import React from "react";

const Offer = () => {
  return (
    <>
      <PagesHeader headline={'پیشنهاد ما'} path={'offer'}/>
      <OfferProperties />
      <OfferNewsLetter />
      <OfferBoxProducts />
      <OfferBoxInfo />
    </>
  );
};

export default Offer;
