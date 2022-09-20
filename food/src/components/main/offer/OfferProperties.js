import { BsSuitHeart } from "react-icons/bs";
import { FiGift } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosBasket } from "react-icons/io";
import React from "react";
import styles from "../../../styles/main/offer/OfferProperties.module.css";

const OfferProperties = () => {
  return (
    <div className={styles.offerProperties}>
      <div className={styles.property}>
        <div className={styles.offerProperty}>
            <span>01</span>
            <HiOutlineLocationMarker />
        </div>
        <h2>خرید رایگان</h2>
        <p>
          عضویت در خبرنامه grocmart یکی از بهترین روش ها و یکی سریعترین روش ها
          ببرای پیدا کردن کد تخفیف grocmart است. شما میتونید به راحتی با ثبت نام
          در خبرنامه grocmart و فقط با چند کلیک در خبرنامه grocmart ثبت نام کنید
          تا از کد تخفیف های روز مطلع شوید.
        </p>
      </div>
      <div className={styles.property}>
        <div className={styles.offerProperty}>
            <span>02</span>
            <IoIosBasket />
        </div>
        <h2>غذای ارگانیک</h2>
        <p>
          عضویت در خبرنامه grocmart یکی از بهترین روش ها و یکی سریعترین روش ها
          ببرای پیدا کردن کد تخفیف grocmart است. شما میتونید به راحتی با ثبت نام
          در خبرنامه grocmart و فقط با چند کلیک در خبرنامه grocmart ثبت نام کنید
          تا از کد تخفیف های روز مطلع شوید.
        </p>
      </div>
      <div className={styles.property}>
        <div className={styles.offerProperty}>
            <span>03</span>
            <BsSuitHeart />
        </div>
        <h2>سلامتی برای شما</h2>
        <p>
          عضویت در خبرنامه grocmart یکی از بهترین روش ها و یکی سریعترین روش ها
          ببرای پیدا کردن کد تخفیف grocmart است. شما میتونید به راحتی با ثبت نام
          در خبرنامه grocmart و فقط با چند کلیک در خبرنامه grocmart ثبت نام کنید
          تا از کد تخفیف های روز مطلع شوید.
        </p>
      </div>
      <div className={styles.property}>
        <div className={styles.offerProperty}>
            <span>04</span>
            <FiGift />
        </div>
        <h2>هدیه برای کاربران</h2>
        <p>
          عضویت در خبرنامه grocmart یکی از بهترین روش ها و یکی سریعترین روش ها
          ببرای پیدا کردن کد تخفیف grocmart است. شما میتونید به راحتی با ثبت نام
          در خبرنامه grocmart و فقط با چند کلیک در خبرنامه grocmart ثبت نام کنید
          تا از کد تخفیف های روز مطلع شوید.
        </p>
      </div>
    </div>
  );
};

export default OfferProperties;
