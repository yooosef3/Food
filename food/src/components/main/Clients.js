import ClientSwiper from "./ClientSwiper";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/main/Clients.module.css";

const Clients = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, transform: "scale(0.5)" }}
        whileInView={{ opacity: 1, transform: "scale(1)" }}
        transition={{ duration: 1 }}
      >
        <p>آخرین نظرات</p>
        <h1>مشتریان ما</h1>
      </motion.div>
      <ClientSwiper />
    </div>
  );
};

export default Clients;
