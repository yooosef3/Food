import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import homeUs from "../../../assets/images/about-576x537.jpg";
import { motion } from "framer-motion";
import signature from "../../../assets/images/signature-1-160x55.png";
import styles from "../../../styles/main/AboutUs/HomeUs.module.css";

const HomeUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bucket}>
        <img src={homeUs} alt="aboutus" />
      </div>
      <div className={styles.info}>
        <motion.div
          initial={{ opacity: 0, transform: "translateY(-50%)" }}
          whileInView={{ opacity: 1, transform: "translateY(0%)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>چند جمله درباره فروشگاه ما</h2>
          <h1>دربــاره ما</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translateY(50%)" }}
          whileInView={{ opacity: 1, transform: "translateY(0%)" }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <p>
            Grocmart یک فروشگاه مواد غذایی متعلق به خانواده است که از سال 1999
            محصولات با کیفیتی را برای زندگی روزمره شما ارائه می دهد، در حالی که
            خدمات برتر و قیمت های رقابتی را نیز ارائه می دهد.
          </p>
          <div className={styles.signature}>
            <div>
              <Link to="/aboutus">
                <FaArrowCircleLeft className={styles.icon} />
              </Link>
              <div>
                <h4>یوسف خدری</h4>
                <p>برنامه نویس ری اکت</p>
              </div>
            </div>
            <div className={styles.signatureImg}>
              <img src={signature} alt="signature" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeUs;
