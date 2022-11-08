import LatestNewsSlider from "./LatestNewsSlider";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/main/LatestNews.module.css";

const LatestNews = () => {
  return (
    <div className={styles.container}>
      <section>
        <h3>آخرین اخبار</h3>
        <motion.h1
          initial={{ opacity: 0, transform: "scale(0.2)" }}
          whileInView={{ opacity: 1, transform: "scale(1)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          بلاگ ما
        </motion.h1>
      </section>
      <LatestNewsSlider />
    </div>
  );
};

export default LatestNews;
