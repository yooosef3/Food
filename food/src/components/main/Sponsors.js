import React from "react";
import SponsorSwiper from "./SponsorSwiper";
import styles from "../../styles/main/Sponsors.module.css";

const Sponsors = () => {
  return (
    <div className={styles.container}>
      <SponsorSwiper />
    </div>
  );
};

export default Sponsors;
