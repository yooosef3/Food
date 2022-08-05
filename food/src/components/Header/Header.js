import { BsCart3 } from "react-icons/bs";
import { CgMoreVertical } from "react-icons/cg";
import LeftSidebar from "./LeftSidebar";
import { Link } from "react-router-dom";
import React from "react";
import { RiSearchLine } from "react-icons/ri";
import logo from "../../images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <CgMoreVertical className={styles.icon} />
          <Link to="/home/cart" className={styles.cart}>
            <BsCart3 className={styles.icon} />
            <span>0</span>
          </Link>
        <RiSearchLine className={styles.icon} />
      </div>
      <div>
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
      <LeftSidebar />
      </div>
    </header>
  );
};

export default Header;
