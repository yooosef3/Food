import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import styles from "../../../styles/main/AboutUs/AboutBanner.module.css";

const AboutBanner = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>درباره ما</h1>
        <p>
          Grocmart یک فروشگاه مواد غذایی متعلق به خانواده است که از سال 1999
          محصولات با کیفیتی را برای زندگی روزمره شما ارائه می دهد، در حالی که
          خدمات برتر و قیمت های رقابتی را نیز ارائه می دهد.
        </p>
      </div>
      <ul className={styles.path}>
        <li>
            <Link to='/home'>خانه</Link>
            <FaArrowLeft className={styles.leftRow}/>
        </li>
        <li>
            <Link to='/pages'>صفحات</Link>
            <FaArrowLeft className={styles.leftRow}/>
        </li>
        <li>
            <Link to='/aboutus'>درباره ما</Link>
        </li>
      </ul>
    </>
  );
};

export default AboutBanner;
