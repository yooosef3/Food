import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import React from "react";
import styles from "../../../styles/main/testimonals/TestimonalStar.module.css";
import testimonal1 from "../../../assets/images/user-6-62x62.jpg";
import testimonal2 from "../../../assets/images/user-10-62x62.jpg";
import testimonal3 from "../../../assets/images/user-11-62x62.jpg";

const TestimonalStar = () => {
  return (
    <div className={styles.TestimonalStar}>
      <section>
        <p>
          من سفارش زیادی از غذاهای خام وگان را امروز از طریق UPS دریافت کردم و
          از بسته بندی و تازگی و همچنین کیفیت وعده های غذایی خود بسیار تحت تاثیر
          قرار گرفتم.
        </p>
        <div>
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </div>
        <div>
          <img alt="testimonal" src={testimonal2} />
          <h3>MARK WILSON</h3>
        </div>
      </section>
      <section>
        <p>
          من تازه سفارشم را دریافت کردم و واقعا شگفت زده شدم. خیلی خوب بسته بندی
          شده بود و اقلام فوق العاده هستند. من تازه در سفارش آنلاین غذا هستم اما
          تجربه خوبی بود
        </p>
        <div>
          <BsStarHalf />
        <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </div>
        <div>
          <img alt="testimonal" src={testimonal3} />
          <h3>ANE PETERSON</h3>
        </div>
      </section>
      <section>
        <p>
          باید بگویم که از سفارش اخیرم واقعاً تحت تأثیر قرار گرفتم. من قبلا
          محصولات مشابهی را از سایت های دیگر خریده بودم، اما این بار به دلیل
          قیمت عالی شما را انتخاب کردم{" "}
        </p>
        <div>
          <BsStarHalf />
        <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </div>
        <div>
          <img alt="testimonal" src={testimonal1} />
          <h3>LISA SMITH</h3>
        </div>
      </section>
    </div>
  );
};

export default TestimonalStar;
