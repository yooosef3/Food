import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import styles from "../../styles/PagesHeader.module.css";

const PagesHeader = ({ headline, path, text, page }) => {
  return (
    <>
      <div className={styles.PagesHeader}>
        <h1>{headline}</h1>
        <p>{text}</p>
      </div>
      <ul className={styles.path}>
        <li>
          <Link to="/home">خانه</Link>
          <FaArrowLeft className={styles.leftRow} />
        </li>
        <li>
          <Link to="/pages">{page}</Link>
          <FaArrowLeft className={styles.leftRow} />
        </li>
        <li>
          <Link to={`/${path}`}>{headline}</Link>
        </li>
      </ul>
    </>
  );
};

export default PagesHeader;
