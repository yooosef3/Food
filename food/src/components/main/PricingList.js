import OfferBoxProducts from "./offer/OfferBoxProducts";
import PagesHeader from "./PagesHeader";
import React from "react";
import styles from "../../styles/main/PricingList.module.css";

const PricingList = () => {
  return (
    <div className={styles.PricingList}>
      <PagesHeader headline={"لیست قیمت ها"} path={"pricinglist"} />
      <section className={styles.PricingListInfo}>
        <h1>قیمت ها</h1>
        <p>
          {" "}
          Grocmart یک فروشگاه مواد غذایی متعلق به خانواده است که از سال 1999
          محصولات با کیفیتی را برای زندگی روزمره شما ارائه می دهد، در حالی که
          خدمات برتر و قیمت های رقابتی را نیز ارائه می دهد.
        </p>
      </section>
      <OfferBoxProducts />
    </div>
  );
};

export default PricingList;
