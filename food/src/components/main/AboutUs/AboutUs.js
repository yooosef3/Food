import AboutHistory from "./AboutHistory";
import AboutStat from "./AboutStat";
import AboutStore from "./AboutStore";
import AboutTeam from "./AboutTeam";
import AboutTestim from "./AboutTestim";
import Map from "../Map";
import PagesHeader from "../PagesHeader";
import React from "react";
import Sponsors from "../Sponsors";

const AboutUs = () => {
  return (
    <div>
      <PagesHeader
        headline={"درباره ما"}
        path={"/aboutus"}
        text={
          <p>
            Grocmart یک فروشگاه مواد غذایی متعلق به خانواده است که از سال 1999
            محصولات با کیفیتی را برای زندگی روزمره شما ارائه می دهد، در حالی که
            خدمات برتر و قیمت های رقابتی را نیز ارائه می دهد.
          </p>
        }
      />
      <AboutStore />
      <AboutHistory />
      <AboutTeam />
      <AboutStat />
      <AboutTestim />
      <Sponsors />
      <Map />
    </div>
  );
};

export default AboutUs;
