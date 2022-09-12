import LatestNewsSlider from "./LatestNewsSlider";
import React from "react";
import styles from "../../styles/main/LatestNews.module.css";

const LatestNews = () => {
  return (
    <div className={styles.container}>
      <section>
        <h3>آخرین اخبار</h3>
        <h1>بلاگ ما</h1>
      </section>
      <LatestNewsSlider />
    </div>
  );
};

export default LatestNews;
