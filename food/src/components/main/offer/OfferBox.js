import React from "react";
import example from "../../../assets/images/grid-fullwidth-gallery-6-480x339.jpg";
import styles from "../../../styles/main/offer/OfferBox.module.css";

const OfferBox = () => {
  return (
    <div className={styles.OfferBox}>
      <section>
        <img alt="box" src={example} />
        <div className={styles.OverlayBox}>
          <h1>سبد میوه</h1>
          <h3>90.00 $</h3>
        </div>
      </section>
      <ul>
        <p>25 تا پرتقال</p>
        <p>25 تا پرتقال</p>
        <p>25 تا پرتقال</p>
        <p>25 تا پرتقال</p>
      </ul>
      <div>
        <button type="button">اضافه به سبد خرید</button>
      </div>
    </div>
  );
};

export default OfferBox;
