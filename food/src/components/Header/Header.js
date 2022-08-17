import React, { useState } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import LeftHamburger from "./LeftHamburger";
import LeftSidebar from "./LeftSidebar";
import { Link } from "react-router-dom";
import MobileSearch from "./MobileSearch";
import { RiSearchLine } from "react-icons/ri";
import RightSidebar from "./RightSidebar";
import logo from "../../assets/images/logo.png";
import styles from "../../styles/header/Header.module.css";

const Header = () => {
  const [searchM, setSearchM] = useState(false);

  return (
    <>
      <header className={styles.container}>
        <div>
          <RightSidebar />
          <Link to="/home/cart" className={styles.cart}>
            <BsCart3 className={styles.icon} />
            <span>0</span>
          </Link>
          {!searchM ? (
            <RiSearchLine
              onClick={() => setSearchM(!searchM)}
              className={styles.search}
            />
          ) : (
            <AiOutlineCloseCircle
              onClick={() => setSearchM(!searchM)}
              className={styles.search}
            />
          )}
        </div>
        <div>
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
          <LeftHamburger />
          <LeftSidebar />
        </div>
      </header>
      <MobileSearch search={searchM} setSearch={setSearchM}/>
    </>
  );
};

export default Header;
