import { FaArrowCircleLeft } from "react-icons/fa";
import React from "react";
import homeUs from "../../../assets/images/about-576x537.jpg";
import signature from "../../../assets/images/signature-1-160x55.png";
import styles from "../../../styles/main/AboutUs/HomeUs.module.css";
import { Link } from "react-router-dom";

const HomeUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bucket}>
        <img src={homeUs} alt="aboutus" />
      </div>
      <div className={styles.info}>
        <h2>چند جمله درباره فروشگاه ما</h2>
        <h1>درباره ما</h1>
        <p>
          Grocmart یک فروشگاه مواد غذایی متعلق به خانواده است که از سال 1999
          محصولات با کیفیتی را برای زندگی روزمره شما ارائه می دهد، در حالی که
          خدمات برتر و قیمت های رقابتی را نیز ارائه می دهد.
        </p>
        <div className={styles.signature}>
          <div>
          <Link to='/aboutus'>
            <FaArrowCircleLeft className={styles.icon}/>
          </Link>
            <div>
              <h4>Yusef Khedri</h4>
              <p>CEO, Founder</p>
            </div>
          </div>
          <div className={styles.signatureImg}>
            <img src={signature} alt="signature" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeUs;
