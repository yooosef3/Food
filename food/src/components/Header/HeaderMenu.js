import { BsFillLayersFill } from "react-icons/bs";
import { FaCarrot } from "react-icons/fa";
import { GiAbstract050 } from "react-icons/gi";
import { Link } from "react-router-dom";
import React from "react";
import fruit from "../../assets/images/banner-1-300x202.jpg";
import styles from "../../styles/header/HeaderMenu.module.css";

const HeaderMenu = () => {
  return (
    <div className={styles.container}>
      <ul>
        <div>
          <li>
            <Link to='/home'>خانه</Link>
          </li>
        </div>
        <div className={styles.pages}>
          <li>صفحات</li>
          <section>
            <Link to="/aboutus">درباره ما</Link>
            <Link to="/offer">پیشنهاد ما</Link>
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
              <div>
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
                  <img alt="fruit" src={fruit}/>
                  <section className={styles.elementPhoto}>
                    <Link to='/login'>
                    وارد شوید
                    </Link>
                  </section>
                </div>
              </div>
            </div>
          </section>
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
