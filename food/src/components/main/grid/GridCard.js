import { Link } from "react-router-dom";
import React from "react";
import styles from "../../../styles/main/grid/GridCard.module.css";
import { truncate } from "../../helper/function";

const GridCard = ({ image, title, text, text1, slug }) => {
  return (
    <div className={styles.GridCard}>
      <div>
        <img alt="grid" src={image} />
      </div>
      <section>
        <small>7 مهر 1401</small>
        <Link to={`/blogpost/${slug}`}>
          <h4>{title}</h4>
        </Link>
        <p>{text1}</p>
        <p>{truncate(text)}</p>
      </section>
    </div>
  );
};

export default GridCard;
