import { AiOutlineLeftCircle } from "react-icons/ai";
import React from "react";
import styles from "../../styles/main/Questions.module.css";

const Questions = () => {
  return (
    <div className={styles.container}>
      <div></div>
      <div>
        <section>
          <h3>سوالات متداول</h3>
          <h1>FAQ</h1>
        </section>
        <div>
          <div className={styles.question}>
            <div>
              <AiOutlineLeftCircle className={styles.left} />
              <h4>هنگام سفارش یک الگو چه چیزی دریافت می کنم؟</h4>
            </div>
            <p>
              پس از تکمیل پرداخت از طریق فرم امن ما، دستورالعمل دانلود محصول را
              دریافت خواهید کرد. فایل های منبع موجود در بسته دانلودی بسته به نوع
              محصولی که خریداری کرده اید می تواند متفاوت باشد.
            </p>
          </div>
          <div>
            <div className={styles.question}>
              <div>
                <AiOutlineLeftCircle className={styles.left} />
                <h4>قالب های شما در چه قالب هایی موجود است؟</h4>
              </div>
            </div>
            <p>
              قالب های وب سایت در قالب های فتوشاپ و HTML موجود می باشد. فونت ها
              همراه با فایل فتوشاپ هستند. در اکثر الگوها، HTML با Adobe®
              Dreamweaver® و Microsoft® FrontPage® سازگار است.{" "}
            </p>
          </div>
          <div>
            <div className={styles.question}>
              <div>
                <AiOutlineLeftCircle className={styles.left} />
                <h4>من اجازه دارم با قالب ها چه کار کنم؟</h4>
              </div>
            </div>
            <p>
              شما می توانید با استفاده از قالب به هر شکلی که دوست دارید یک وب
              سایت بسازید. شما نمی توانید قالب ها را مجدداً بفروشید یا مجدداً
              توزیع کنید (مانند ما). ادعای مالکیت معنوی یا انحصاری هر یک از
              محصولات ما، اصلاح شده یا بدون تغییر. تمامی محصولات متعلق به شرکت
              ها و افراد ارائه دهنده محتوا هستند. همچنین مجاز به ساخت بیش از یک
              پروژه با استفاده از یک الگو نیستید (برای ساختن پروژه دیگری با همان
              طرح، باید یک بار دیگر همان قالب را خریداری کنید).{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;