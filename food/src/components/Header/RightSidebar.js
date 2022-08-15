import React, { useState } from "react";

import { Link } from "react-router-dom";
import RightHamburger from "./RightHamburger";
import SidebarSwiper from "./SidebarSwiper";
import SocialIcons from "./SocialIcons";
import styles from "../../styles/header/RightSidebar.module.css";

const RightSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.cover}>
      <span onClick={() => setOpen(!open)}>
        <RightHamburger className={styles.hamburg} />
      </span>
      <div className={open ? styles.container : styles.hide}>
        <div className={styles.header}>
          <h2>آدرس ما</h2>
          <div
            className={open ? styles.hamburger : styles.close}
            onClick={() => setOpen(!open)}
          >
            <div></div>
            <div></div>
          </div>
        </div>
        <SidebarSwiper />
        <div className={styles.info}>
          <Link to='/'>
            <p>
              ارومیه, بلوار والفجر - آخر خیابان میثم - کوی یازده - بن بست اول , پلاک سه
            </p>
          </Link>
          <Link to='/'>
            <p>+98-914-968-9984</p>
          </Link>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
};

export default RightSidebar;
