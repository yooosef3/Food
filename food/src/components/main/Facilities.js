import { FiTruck } from "react-icons/fi";
import { GiAlarmClock } from "react-icons/gi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoFishOutline } from "react-icons/io5";
import React from "react";
import styles from '../../styles/main/Facilities.module.css'

const Facilities = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fasilities}>
        <div className={styles.first}>
          <IoFishOutline className={styles.icon}/>
          <h2>محصولات با کیفیت</h2>
          <p>
            ما با بهترین تامین کنندگان کار می کنیم تا محصولات خواربار تازه با
            بالاترین کیفیت را به مشتریان خود ارائه دهیم.
          </p>
        </div>
        <div className={styles.second}>
          <HiOutlineCurrencyDollar className={styles.icon}/>
          <h2>قیمت های مقرون به صرفه</h2>
          <p>
            به لطف سیاست قیمت گذاری مقرون به صرفه ما، مشتریان ما مجبور نیستند
            برای محصولاتی که نیاز دارند هزینه اضافی بپردازند.{" "}
          </p>
        </div>
        <div className={styles.third}>
          <FiTruck className={styles.icon}/>
          <h2>حمل و نقل سریع</h2>
          <p>
            فروشگاه ما بدون در نظر گرفتن اینکه چه چیزی و چه مقدار سفارش می دهید،
            ارسال سریع در سراسر جهان را به همه مشتریان ارائه می دهد.{" "}
          </p>
        </div>
        <div className={styles.forth}>
          <GiAlarmClock className={styles.icon}/>
          <h2>همیشه باز</h2>
          <p>
            برخلاف سایر خواربارفروشی ها، ما به صورت 24 ساعته آماده خدمت رسانی به
            شما هستیم و بهترین انتخاب از مواد غذایی را ارائه می دهیم.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
