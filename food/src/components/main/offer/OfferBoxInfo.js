import React, { useState } from "react";

import { AiOutlineLeftCircle } from "react-icons/ai";
import styles from "../../../styles/main/offer/OfferBoxInfo.module.css";

const OfferBoxInfo = () => {
  const [offer, setOffer] = useState({
    fstOffer: false,
    secOffer: false,
    trdOffer: false,
    fthOffer: false,
    fifOffer: false,
    sixOffer: false,
  });

  return (
    <div className={styles.OfferBoxInfo}>
      <section>
        <div onClick={() => setOffer({ fstOffer: !offer.fstOffer })}>
          <AiOutlineLeftCircle
            className={`${offer.fstOffer && styles.offerDown} ${
              styles.leftOffer
            }`}
          />
          <h4>قالب های شما در چه قالب هایی موجود است؟</h4>
        </div>
        <p
          className={`${offer.fstOffer && styles.showOfferText} ${
            styles.offerText
          }`}
        >
          قالب های وب سایت در قالب های فتوشاپ و HTML موجود می باشد. فونت ها
          همراه با فایل فتوشاپ هستند. در اکثر الگوها، HTML با Adobe®
          Dreamweaver® و Microsoft® FrontPage® سازگار است.
        </p>
      </section>
      <section>
        <div onClick={() => setOffer({ secOffer: !offer.secOffer })}>
          <AiOutlineLeftCircle
            className={`${offer.secOffer && styles.offerDown} ${
              styles.leftOffer
            }`}
          />
          <h4> هنگام سفارش یک الگو چه چیزی دریافت می کنم؟</h4>
        </div>
        <p
          className={`${offer.secOffer && styles.showOfferText} ${
            styles.offerText
          }`}
        >
          پس از تکمیل پرداخت از طریق فرم امن ما، دستورالعمل دانلود محصول را
          دریافت خواهید کرد. فایل های منبع موجود در بسته دانلودی بسته به نوع
          محصولی که خریداری کرده اید می تواند متفاوت باشد.
        </p>
      </section>
      <section>
        <div onClick={() => setOffer({ trdOffer: !offer.trdOffer })}>
          <AiOutlineLeftCircle
            className={`${offer.trdOffer && styles.offerDown} ${
              styles.leftOffer
            }`}
          />
          <h4> من اجازه دارم با قالب ها چه کار کنم؟</h4>
        </div>
        <p
          className={`${offer.trdOffer && styles.showOfferText} ${
            styles.offerText
          }`}
        >
          شما می توانید با استفاده از قالب به هر شکلی که دوست دارید یک وب سایت
          بسازید. شما نمی توانید قالب ها را مجدداً بفروشید یا مجدداً توزیع کنید
          (مانند ما). ادعای مالکیت معنوی یا انحصاری هر یک از محصولات ما، اصلاح
          شده یا بدون تغییر. تمامی محصولات متعلق به شرکت ها و افراد ارائه دهنده
          محتوا هستند. همچنین مجاز به ساخت بیش از یک پروژه با استفاده از یک الگو
          نیستید (برای ساختن پروژه دیگری با همان طرح، باید یک بار دیگر همان قالب
          را خریداری کنید).
        </p>
      </section>
      <section>
        <div onClick={() => setOffer({ fthOffer: !offer.fthOffer })}>
          <AiOutlineLeftCircle
            className={`${offer.fthOffer && styles.offerDown} ${
              styles.leftOffer
            }`}
          />
          <h4> آیا همراه قالب هایتان, اسکریپت هم ارایه می دهید؟</h4>
        </div>
        <p
          className={`${offer.fthOffer && styles.showOfferText} ${
            styles.offerText
          }`}
        >
          قالب های ما اسکریپت های اضافی ندارند, عضویت در خبرنامه, بخش جستجو, فرم
          ها و گالری تصاویر غیرفعال هستند.اسکریپت های اساسی را به راحتی می توان
          از سایت www.zemez.io اضافه کرد. اگر مطمین نیستید که عنصر مورد نظر شما
          فعال نیست, لطفا به منظور شفاف سازی با تیم پشتیبانی ما تماس بگیرید.
        </p>
      </section>
      <section>
        <div onClick={() => setOffer({ fifOffer: !offer.fifOffer })}>
          <AiOutlineLeftCircle
            className={`${offer.fifOffer && styles.offerDown} ${
              styles.leftOffer
            }`}
          />
          <h4> یک خرید خاص/غیرخاص چیست؟</h4>
        </div>
        <p
          className={`${offer.fifOffer && styles.showOfferText} ${
            styles.offerText
          }`}
        >
          خرید غیرنهایی به این معنی است که مردم می توانند قالبی که قبلا انتخاب
          کرده اید را بخرند. اما خرید غیرخاص تضمین می کند که شما آخرین فردی
          هستید که این قالب را می خرید. بعد از این که یک خرید خاص انجام می شود,
          قالب به طور دایمی از فروش مستقیم پاک می شود و دیگر به مشتریان فروخته
          نمی شود, فقط شما صاحب آن هستید
        </p>
      </section>
      <section>
        <div onClick={() => setOffer({ sixOffer: !offer.sixOffer })}>
          <AiOutlineLeftCircle
            className={`${offer.sixOffer && styles.offerDown} ${
              styles.leftOffer
            }`}
          />
          <h4> چطور می توانم سفارشم را تسویه کنم؟</h4>
        </div>
        <p
          className={`${offer.sixOffer && styles.showOfferText} ${
            styles.offerText
          }`}
        >
          ما ویزا, مسترکارت, American Expressو paypal را برای جلب رضایت شما می
          پذیریم.
        </p>
      </section>
    </div>
  );
};

export default OfferBoxInfo;
