import {IoIosArrowDown} from 'react-icons/io'
import { Link } from "react-router-dom";
import React from "react";
import styles from './LeftSidebar.module.css'

const LeftSidebar = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <li>خانه</li>
      </Link>
      <Link to="/">
        <li>صفحات</li>
        <IoIosArrowDown />
      </Link>
      <Link to="/">
        <li>بلاگ</li>
        <IoIosArrowDown />
      </Link>
      <Link to="/">
        <li>گالری</li>
        <IoIosArrowDown />
      </Link>
      <Link to="/">
        <li>المان ها</li>
        <IoIosArrowDown />
      </Link>
      <Link to="/">
        <li>فروشگاه</li>
        <IoIosArrowDown />
      </Link>
    </div>
  );
};

export default LeftSidebar;
