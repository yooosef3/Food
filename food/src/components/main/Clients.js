import React from "react";
import styles from "../../styles/main/Clients.module.css";
import ClientSwiper from "./ClientSwiper";

const Clients = () => {
  return (
    <div className={styles.container}>
      <p>آخرین نظرات</p>
      <h1>مشتریان ما</h1>
      <ClientSwiper />
    </div>
  );
};

export default Clients;
