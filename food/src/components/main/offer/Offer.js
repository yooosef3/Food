import OfferBoxInfo from "./OfferBoxInfo";
import OfferBoxProducts from "./OfferBoxProducts";
import OfferNewsLetter from "./OfferNewsLetter";
import OfferProperties from "./OfferProperties";
import PagesHeader from "../PagesHeader";
import React from "react";
import styled from "styled-components";

const Off = styled.div`
  border-bottom: 1px solid #c2c2c2;
`
const Offer = () => {
  return (
    <Off>
      <PagesHeader page={'صفحات'} headline={'پیشنهاد ما'} path={'offer'}/>
      <OfferProperties />
      <OfferNewsLetter />
      <OfferBoxProducts />
      <OfferBoxInfo />
    </Off>
  );
};

export default Offer;
