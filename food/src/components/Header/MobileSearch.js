import { AiOutlineCloseCircle } from "react-icons/ai";
import React from "react";
import { RiSearchLine } from "react-icons/ri";
import styles from "../../styles/header/MobileSearch.module.css";

const MobileSearch = ({ search, setSearch }) => {
  return (
    <section className={search ? styles.background : styles.hide}>
      <div className={styles.container}>
        <input type="text" placeholder={search && 'جستجو ...'}/>
        <RiSearchLine className={styles.search} />
        <AiOutlineCloseCircle className={styles.close} onClick={() => setSearch(!search)}/>
      </div>
    </section>
  );
};

export default MobileSearch;
