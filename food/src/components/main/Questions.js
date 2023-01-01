import React, { useState } from "react";

import { AiOutlineLeftCircle } from "react-icons/ai";
import QuestionSwiper from "../main/QuestionSwiper";
import { motion } from "framer-motion";
import styles from "../../styles/main/Questions.module.css";

const Questions = () => {
  const [toggle, setToggle] = useState({
    fstQuestion: false,
    secQuestion: false,
    trdQuestion: false,
  });

  return (
    <div className={styles.container}>
      <QuestionSwiper />
      <div className={styles.questions}>
        <motion.section
          initial={{ opacity: 0, transform: "translateY(-50%)" }}
          whileInView={{ opacity: 1, transform: "translateY(0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3>سوالات متداول</h3>
          <h1>FAQ</h1>
        </motion.section>
        <div>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(50%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={styles.question}
          >
            <div
              onClick={() => setToggle({ fstQuestion: !toggle.fstQuestion })}
            >
              <AiOutlineLeftCircle
                className={`${toggle.fstQuestion ? styles.down : undefined} ${
                  styles.left
                }`}
              />
              <h4> هنگام سفارش یک الگو چه چیزی دریافت می کنم؟</h4>
            </div>
            <p className={toggle.fstQuestion ? styles.show : styles.hide}>
              پس از تکمیل پرداخت از طریق فرم امن ما، دستورالعمل دانلود محصول را
              دریافت خواهید کرد. فایل های منبع موجود در بسته دانلودی بسته به نوع
              محصولی که خریداری کرده اید می تواند متفاوت باشد.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(50%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.question}>
              <div
                onClick={() => setToggle({ secQuestion: !toggle.secQuestion })}
              >
                <AiOutlineLeftCircle
                  className={`${toggle.secQuestion ? styles.down : undefined} ${
                    styles.left
                  }`}
                />
                <h4> قالب های شما در چه قالب هایی موجود است؟</h4>
              </div>
            </div>
            <p className={toggle.secQuestion ? styles.show : styles.hide}>
              قالب های وب سایت در قالب های فتوشاپ و HTML موجود می باشد. فونت ها
              همراه با فایل فتوشاپ هستند. در اکثر الگوها، HTML با Adobe®
              Dreamweaver® و Microsoft® FrontPage® سازگار است.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(50%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.question}>
              <div
                onClick={() => setToggle({ trdQuestion: !toggle.trdQuestion })}
              >
                <AiOutlineLeftCircle
                  className={`${toggle.trdQuestion ? styles.down : undefined} ${
                    styles.left
                  }`}
                />
                <h4> من اجازه دارم با قالب ها چه کار کنم؟</h4>
              </div>
            </div>
            <p className={toggle.trdQuestion ? styles.show : styles.hide}>
              شما می توانید با استفاده از قالب به هر شکلی که دوست دارید یک وب
              سایت بسازید. شما نمی توانید قالب ها را مجدداً بفروشید یا مجدداً
              توزیع کنید (مانند ما). ادعای مالکیت معنوی یا انحصاری هر یک از
              محصولات ما، اصلاح شده یا بدون تغییر. تمامی محصولات متعلق به شرکت
              ها و افراد ارائه دهنده محتوا هستند. همچنین مجاز به ساخت بیش از یک
              پروژه با استفاده از یک الگو نیستید (برای ساختن پروژه دیگری با همان
              طرح، باید یک بار دیگر همان قالب را خریداری کنید).
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
