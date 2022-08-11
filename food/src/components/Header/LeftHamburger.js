import React, { useState } from "react";

import LeftSidebar from "./LeftSidebar";
import styles from "./LeftHamburger.module.css";

const LeftHamburger = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.hamburger}>
      <div
        className={open ? styles.clicked : styles.container}
        onClick={clickHandler}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <LeftSidebar open={open} />
    </div>
  );
};

export default LeftHamburger;
