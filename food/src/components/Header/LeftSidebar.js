import React, {useState} from "react";

import { BsFillLayersFill } from "react-icons/bs";
import { GiAbstract050 } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import styles from "../../styles/header/LeftSidebar.module.css";

const LeftSidebar = ({ open }) => {

  const [drop, setDrop] = useState({
      openHome: true,
      openPage: false,
      openBlog: false,
      openGallery:false,
      openElements: false,
      openShop: false
  })

  
  return (
    <div className={!open ? styles.container : styles.open}>
      <div className={styles.home}>
        <div className={`${drop.openHome && styles.selectedDrop} ${styles.unselectedDrop}`} onClick={() => setDrop({openHome: !drop.openHome})}>
          <Link to="/home">خانه</Link>
        </div>
      </div>

      <div className={styles.pages}>
        <div className={`${drop.openPage && styles.selectedDrop} ${styles.unselectedDrop}`} onClick={() => setDrop({openPage: !drop.openPage})}>
          <Link to="/aboutus">صفحات</Link>
          <IoIosArrowDown className={drop.openPage ? styles.arrowUp : styles.arrowDown}/>
        </div>
        <ul className={drop.openPage ? styles.openPage : styles.closeDrop}>
          <li>
            <Link to="/aboutus">درباره ما</Link>
          </li>
          <li>
            <Link to="/offer">تخفیف ها</Link>
          </li>
          <li>
            <Link to="/ourteam">تیم ما</Link>
          </li>
          <li>
            <Link to="/testimonals">نظرات</Link>
          </li>
          <li>
            <Link to="/pricinglist">لیست قیمت ها</Link>
          </li>
        </ul>
      </div>

      <div className={styles.blog}>
        <div className={`${drop.openBlog && styles.selectedDrop} ${styles.unselectedDrop}`} onClick={() => setDrop({openBlog: !drop.openBlog})}>
          <Link to="/gridblog">بلاگ</Link>
          <IoIosArrowDown className={drop.openBlog ? styles.arrowUp : styles.arrowDown}/>
        </div>
        <ul className={drop.openBlog ? styles.openBlog : styles.closeDrop}>
          <li>
            <Link to="/gridblog">وبلاگ</Link>
          </li>
          <li>
            <Link to="/bloglist">لیست بلاگ</Link>
          </li>
          <li>
            <Link to="/blogpost">پست ها</Link>
          </li>
        </ul>
      </div>

      <div className={styles.gallery}>
        <div className={`${drop.openGallery && styles.selectedDrop} ${styles.unselectedDrop}`} onClick={() => setDrop({openGallery: !drop.openGallery})}>
          <Link to="/gridgallery">گالری</Link>
          <IoIosArrowDown className={drop.openGallery ? styles.arrowUp : styles.arrowDown}/>
        </div>
        <ul className={drop.openGallery ? styles.openGallery : styles.closeDrop}>
          <li>
            <Link to="/gridgallery">گالری</Link>
          </li>
          <li>
            <Link to="/gridgallery">گالری تمام صفحه</Link>
          </li>
          <li>
            <Link to="/gridgallery">لیست محصولات</Link>
          </li>
          <li>
            <Link to="/gridgallery">لیست تمام صفحه</Link>
          </li>
        </ul>
      </div>

      <div className={styles.elements}>
        <div className={`${drop.openElements && styles.selectedDrop} ${styles.unselectedDrop}`} onClick={() => setDrop({openElements: !drop.openElements})}>
          <Link to="/">المان ها</Link>
          <IoIosArrowDown className={drop.openElements ? styles.arrowUp : styles.arrowDown}/>
        </div>
        <ul className={drop.openElements ? styles.openElements : styles.closeDrop}>
        <div
          style={{
            color: "#e52029",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderBottom: "1px solid grey",
            marginBottom:'10px'
          }}
        >
          <p>الــمان ها</p>
          <GiAbstract050 />
        </div>
          <li>
            <Link to="/">تایپوگرافی</Link>
          </li>
          <li>
            <Link to="/">لیست ایکون ها</Link>
          </li>
          <li>
            <Link to="/">پیشرفت</Link>
          </li>
          <li>
            <Link to="/">فعالیت</Link>
          </li>
          <li>
            <Link to="/">تب ها</Link>
          </li>
          <li>
            <Link to="/">دکمه ها</Link>
          </li>
          <li>
            <Link to="/">جداول</Link>
          </li>
          <li>
            <Link to="/">فرم ها</Link>
          </li>
          <li>
            <Link to="/">شمارنده</Link>
          </li>
          <li>
            <Link to="/">سیستم گرید</Link>
          </li>
        </ul>
        <ul className={drop.openElements ? styles.openElements : styles.closeDrop}>
        <div
          style={{
            color: "#e52029",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderBottom: "1px solid gray",
            marginBottom:'10px'
          }}
        >
          <BsFillLayersFill />
          <p> صفحات اضافی</p>
        </div>
          <li>
            <Link to="/">404</Link>
          </li>
          <li>
            <Link to="/"> به زودی</Link>
          </li>
          <li>
            <Link to="/">تماس با ما</Link>
          </li>
          <li>
            <Link to="/">سیاست ها</Link>
          </li>
        </ul>
      </div>

      <div className={styles.shop}>
        <div className={`${drop.openShop && styles.selectedDrop} ${styles.unselectedDrop}`} onClick={() => setDrop({openShop: !drop.openShop})}>
          <Link to="/shop">فروشگاه</Link>
          <IoIosArrowDown className={drop.openShop ? styles.arrowUp : styles.arrowDown} />
        </div>
        <ul className={drop.openShop ? styles.openShop : styles.closeDrop}>
          <li>
            <Link to="/shop">فروشگاه</Link>
          </li>
          <li>
            <Link to="/gridshop">قفسه</Link>
          </li>
          <li>
            <Link to="/singleproduct/deli-meat"> محصولات تکی</Link>
          </li>
          <li>
            <Link to="/cart"> سبد خرید</Link>
          </li>
          <li>
            <Link to="/checkout"> پرداخت</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
