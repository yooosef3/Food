import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from 'react';
import styles from '../../../styles/main/offer/OfferBanner.module.css'

const OfferBanner = () => {
    return (
        <>
        <div className={styles.container}>
          <h1>پیشنهاد ما</h1>
        </div>
        <ul className={styles.path}>
          <li>
              <Link to='/home'>خانه</Link>
              <FaArrowLeft className={styles.leftRow}/>
          </li>
          <li>
              <Link to='/pages'>صفحات</Link>
              <FaArrowLeft className={styles.leftRow}/>
          </li>
          <li>
              <Link to='/aboutus'>درباره ما</Link>
          </li>
        </ul>
      </>
      );
};

export default OfferBanner;