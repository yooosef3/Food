import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import off1 from "../../assets/images/banner-2-670x676.jpg";
import off2 from "../../assets/images/banner-3-470x395.jpg";
import off3 from "../../assets/images/banner-4-470x250.jpg";
import styles from "../../styles/main/OffHome.module.css";

const OffHome = () => {
  return (
    <div>
      <div className={styles.container}>
        <motion.a
          href="/"
          initial={{ opacity: 0, transform: "translateX(50%)" }}
          whileInView={{ opacity: 1, transform: "translateX(0%)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img alt="off" src={off1} />
        </motion.a>
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-50%)" }}
          whileInView={{ opacity: 1, transform: "translateX(0%)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/">
            <img alt="off" src={off2} />
          </Link>
          <Link to="/">
            <img alt="off" src={off3} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OffHome;
