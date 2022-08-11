import React, { useState } from "react";

import RightHamburger from "./RightHamburger";
import styles from "./RightSidebar.module.css";

const RightSidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.cover}>
    <span onClick={() => setOpen(!open)}>
      <RightHamburger className={styles.hamburg}/>
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
      </div>
    </div>
  );
};

export default RightSidebar;
