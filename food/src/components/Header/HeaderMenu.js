import { Link } from "react-router-dom";
import React from "react";
import styles from "../../styles/header/HeaderMenu.module.css";

const HeaderMenu = () => {
  return (
    <div className={styles.container}>
      <ul>
        <div>
          <li>خانه</li>
        </div>
        <div className={styles.pages}>
          <li>صفحات</li>
          <section>
            <Link to="/">درباره ما</Link>
            <Link to="/">پیشنهاد ما</Link>
            <Link to="/">تیم ما</Link>
            <Link to="/">نظرات</Link>
            <Link to="/">لیست قیمت ها</Link>
          </section>
        </div>
        <div className={styles.blog}>
          <li>بلاگ</li>
          <section>
            <Link to="/">گرید </Link>
            <Link to="/">لیست </Link>
            <Link to="/">پست</Link>
          </section>
        </div>
        <div className={styles.galery}>
          <li>گالری</li>
          <section>
            <Link to="/">گالری</Link>
            <Link to="/">تمام صفحه</Link>
            <Link to="/">کاتالوگ</Link>
            <Link to="/">گالری تمام صفحه</Link>
          </section>
        </div>
        <div className={styles.elements}>
          <li>المان ها</li>
        </div>
        <div className={styles.shop}>
          <li>فروشگاه</li>
          <section>
            <Link to="/">فروشگاه</Link>
            <Link to="/">قفسه</Link>
            <Link to="/">لیست فروشگاه</Link>
            <Link to="/">محصولات تکی</Link>
            <Link to="/">سبد خرید</Link>
            <Link to="/">پرداخت</Link>
          </section>
        </div>
      </ul>
    </div>
  );
};

export default HeaderMenu;
