import { BsCart3 } from "react-icons/bs";
import LeftHamburger from "./LeftHamburger";
import LeftSidebar from "./LeftSidebar";
import { Link } from "react-router-dom";
import React from "react";
import { RiSearchLine } from "react-icons/ri";
import RightSidebar from "./RightSidebar";
import logo from "../../images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <RightSidebar />
        <Link to="/home/cart" className={styles.cart}>
          <BsCart3 className={styles.icon} />
          <span>0</span>
        </Link>
        <RiSearchLine className={styles.search} />
      </div>
      <div>
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
        <LeftHamburger />
        <LeftSidebar />
      </div>
    </header>
  );
};

export default Header;
