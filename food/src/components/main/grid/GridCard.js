import { Link } from "react-router-dom";
import React from "react";
import styles from "../../../styles/main/grid/GridCard.module.css";

const GridCard = ({ image, title, text }) => {
  return (
    <div className={styles.GridCard}>
      <div>
        <img alt="grid" src={image} />
      </div>
      <section>
        <small>7 مهر 1401</small>
        <Link to='#'>
          <h4>{title}</h4>
        </Link>
        <p>{text}</p>
      </section>
    </div>
  );
};

export default GridCard;
