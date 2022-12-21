import React, { useContext, useState } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../context/CartContextProvider";
import HeaderMenu from "../Header/HeaderMenu";
import LeftHamburger from "../Header/LeftHamburger";
import LeftSidebar from "../Header/LeftSidebar";
import { Link } from "react-router-dom";
import MobileSearch from "../Header/MobileSearch";
import { RiSearchLine } from "react-icons/ri";
import RightSidebar from "../Header/RightSidebar";
import logo from "../../assets/images/logo.png";
import styles from "../../styles/header/Header.module.css";

const Header = () => {
  const [searchM, setSearchM] = useState(false);

  const  {state}=useContext(CartContext);
  return (
    <>
      <header className={styles.container}>
        <div>
          <RightSidebar />
          <Link to="/cart" className={styles.cart}>
            <BsCart3 className={styles.icon} />
            <span>{state.itemsCounter}</span>
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
        <div className={styles.menu}>
          <HeaderMenu />
        </div>
        <div>
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
          <LeftHamburger />
          <LeftSidebar />
        </div>
        <MobileSearch search={searchM} setSearch={setSearchM} />
      </header>
    </>
  );
};

export default Header;
