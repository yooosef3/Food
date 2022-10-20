import OfferBoxInfo from "./OfferBoxInfo";
import OfferBoxProducts from "./OfferBoxProducts";
import OfferNewsLetter from "./OfferNewsLetter";
import OfferProperties from "./OfferProperties";
import PagesHeader from "../PagesHeader";
import React from "react";

const Offer = () => {
  return (
    <>
      <PagesHeader page={'صفحات'} headline={'پیشنهاد ما'} path={'offer'}/>
      <OfferProperties />
      <OfferNewsLetter />
      <OfferBoxProducts />
      <OfferBoxInfo />
    </>
  );
};

export default Offer;
