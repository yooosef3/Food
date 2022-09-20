import React, {useState} from "react";

import { BsFillLayersFill } from "react-icons/bs";
import { GiAbstract050 } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import styles from "../../styles/header/LeftSidebar.module.css";

const LeftSidebar = ({ open }) => {

  const [drop, setDrop] = useState({
      openPage: false,
      openBlog: false,
      openGallery:false,
      openElements: false,
      openShop: false
  })

  
  return (
    <div className={!open ? styles.container : styles.open}>
      <div className={styles.home}>
        <div>
          <Link to="/">خانه</Link>
        </div>
      </div>

      <div className={styles.pages}>
        <div onClick={() => setDrop({openPage: !drop.openPage})}>
          <Link to="/">صفحات</Link>
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
            <Link to="/">تیم ما</Link>
          </li>
          <li>
            <Link to="/">نظرات</Link>
          </li>
          <li>
            <Link to="/">لیست قیمت ها</Link>
          </li>
        </ul>
      </div>

      <div className={styles.blog}>
        <div onClick={() => setDrop({openBlog: !drop.openBlog})}>
          <Link to="/">بلاگ</Link>
          <IoIosArrowDown className={drop.openBlog ? styles.arrowUp : styles.arrowDown}/>
        </div>
        <ul className={drop.openBlog ? styles.openBlog : styles.closeDrop}>
          <li>
            <Link to="/">وبلاگ</Link>
          </li>
          <li>
            <Link to="/">لیست بلاگ</Link>
          </li>
          <li>
            <Link to="/">پست ها</Link>
          </li>
        </ul>
      </div>

      <div className={styles.gallery}>
        <div onClick={() => setDrop({openGallery: !drop.openGallery})}>
          <Link to="/">گالری</Link>
          <IoIosArrowDown className={drop.openGallery ? styles.arrowUp : styles.arrowDown}/>
        </div>
        <ul className={drop.openGallery ? styles.openGallery : styles.closeDrop}>
          <li>
            <Link to="/">گالری</Link>
          </li>
          <li>
            <Link to="/">گالری تمام صفحه</Link>
          </li>
          <li>
            <Link to="/">لیست محصولات</Link>
          </li>
          <li>
            <Link to="/">لیست تمام صفحه</Link>
          </li>
        </ul>
      </div>

      <div className={styles.elements}>
        <div onClick={() => setDrop({openElements: !drop.openElements})}>
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
          <p>المان ها</p>
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
        <div onClick={() => setDrop({openShop: !drop.openShop})}>
          <Link to="/">فروشگاه</Link>
          <IoIosArrowDown className={drop.openShop ? styles.arrowUp : styles.arrowDown} />
        </div>
        <ul className={drop.openShop ? styles.openShop : styles.closeDrop}>
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
      </div>
    </div>
  );
};

export default LeftSidebar;
