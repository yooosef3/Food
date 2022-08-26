import { Link } from "react-router-dom";
import React from "react";
import off1 from "../../assets/images/banner-2-670x676.jpg";
import off2 from "../../assets/images/banner-3-470x395.jpg";
import off3 from "../../assets/images/banner-4-470x250.jpg";
import styles from "../../styles/main/OffHome.module.css";

const OffHome = () => {
  return (
    <div>
      <div className={styles.container}>
        <Link to="/">
          <img alt="off" src={off1} />
        </Link>
        <div>
          <Link to="/">
            <img alt="off" src={off2} />
          </Link>
          <Link to="/">
            <img alt="off" src={off3} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OffHome;
