import React, { useState } from "react";

import { BsFillLayersFill } from "react-icons/bs";
import { FaCarrot } from "react-icons/fa";
import { GiAbstract050 } from "react-icons/gi";
import { Link } from "react-router-dom";
import fruit from "../../assets/images/banner-1-300x202.jpg";
import styles from "../../styles/header/HeaderMenu.module.css";

const HeaderMenu = () => {
  const [tab, setTab] = useState("home");

  return (
    <div className={styles.container}>
      <ul>
        <div>
          <li onClick={() => setTab("home")}>
            <Link
              className={`${tab === "home" && styles.selectedHome} ${
                styles.unselectedHome
              }`}
              to="/home"
            >
              خانه
            </Link>
          </li>
        </div>
        <div className={styles.pages}>
          <li
            onClick={() => setTab("pages")}
            className={`${tab === "pages" && styles.selectedMenu} ${
              styles.unselectedMenu
            }`}
          >
            صفحات
          </li>
          <section>
            <Link to="/aboutus">درباره ما</Link>
            <Link to="/offer">پیشنهاد ما</Link>
            <Link to="/ourteam">تیم ما</Link>
            <Link to="/testimonals">نظرات</Link>
            <Link to="/pricinglist">لیست قیمت ها</Link>
          </section>
        </div>
        <div className={styles.blog}>
          <li
            onClick={() => setTab("blog")}
            className={`${tab === "blog" && styles.selectedMenu} ${
              styles.unselectedMenu
            }`}
          >
            بلاگ
          </li>
          <section>
            <Link to="/gridblog">گرید </Link>
            <Link to="/bloglist">لیست </Link>
            <Link to="/blogpost/making-your-food-organic-in-a-few-simple-steps">پست</Link>
          </section>
        </div>
        <div className={styles.galery}>
          <li
            onClick={() => setTab("gallery")}
            className={`${tab === "gallery" && styles.selectedMenu} ${
              styles.unselectedMenu
            }`}
          >
            گالری
          </li>
          <section>
            <Link to="/gridgallery">گالری</Link>
            <Link to="/gridgallery">تمام صفحه</Link>
            <Link to="/gridgallery">کاتالوگ</Link>
            <Link to="/gridgallery">گالری تمام صفحه</Link>
          </section>
        </div>
        <div className={styles.elements}>
          <li
            onClick={() => setTab("elements")}
            className={`${tab === "elements" && styles.selectedMenu} ${
              styles.unselectedMenu
            }`}
          >
            المان ها
          </li>
          <section>
            <div className={styles.first}>
              <div className={styles.eleIcons}>
                <GiAbstract050 />
                <p>المان ها</p>
              </div>
              <div className={styles.firstCol}>
                <div>
                  <Link to="/">
                    <p>تایپوگرافی</p>
                  </Link>
                  <Link to="/">
                    <p> ایکون ها</p>
                  </Link>
                  <Link to="/">
                    <p>نوار پیشرفت</p>
                  </Link>
                  <Link to="/">
                    <p>اقدامات</p>
                  </Link>
                  <Link to="/">
                    <p>تب ها</p>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <p>دکمه ها</p>
                  </Link>
                  <Link to="/">
                    <p>جداول</p>
                  </Link>
                  <Link to="/">
                    <p>فرم ها</p>
                  </Link>
                  <Link to="/">
                    <p>شمارنده</p>
                  </Link>
                  <Link to="/">
                    <p>سیستم گرید</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.second}>
              <div className={styles.eleIcons}>
                <BsFillLayersFill />
                <p>صفحات اضافی</p>
              </div>
              <div className={styles.secondList}>
                <Link to="/">
                  <p>جداول</p>
                </Link>
                <Link to="/">
                  <p>فرم ها</p>
                </Link>
                <Link to="/">
                  <p>شمارنده</p>
                </Link>
                <Link to="/">
                  <p>سیستم گرید</p>
                </Link>
                <Link to="/">
                  <p>سیستم </p>
                </Link>
              </div>
            </div>
            <div className={styles.third}>
              <div className={styles.eleIcons}>
                <FaCarrot />
                <p>به فروشگاه ما خوش آمدید </p>
              </div>
              <div className={styles.fruit}>
                <div>
                  <img alt="fruit" src={fruit} />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.shop}>
          <li
            onClick={() => setTab("shop")}
            className={`${tab === "shop" && styles.selectedMenu} ${
              styles.unselectedMenu
            }`}
          >
            فروشگاه
          </li>
          <section>
            <Link to="/shop">فروشگاه</Link>
            <Link to="/gridshop">قفسه</Link>
            <Link to="/singleproduct/deli-meat"> محصولات تکی</Link>
            <Link to="/cart"> سبد خرید</Link>
            <Link to="/checkout">پرداخت</Link>
          </section>
        </div>
      </ul>
    </div>
  );
};

export default HeaderMenu;
