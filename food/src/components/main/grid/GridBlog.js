import GridCard from "./GridCard";
import { Link } from "react-router-dom";
import PagesHeader from "../PagesHeader";
import React from "react";
import gridCard1 from "../../../assets/images/post-3-370x239.jpg";
import gridCard2 from "../../../assets/images/post-1-370x239.jpg";
import gridCard3 from "../../../assets/images/post-2-370x239.jpg";
import gridCard4 from "../../../assets/images/post-4-370x239.jpg";
import gridCard5 from "../../../assets/images/post-5-370x239.jpg";
import gridCard6 from "../../../assets/images/post-6-370x239.jpg";
import styles from "../../../styles/main/grid/GridBlog.module.css";

const GridBlog = () => {
  return (
    <div className={styles.GridBlog}>
      <PagesHeader page={'بلاگ'} headline={"گرید"} path={"gridblog"} />
      <section className={styles.gridCards}>
        <GridCard
          image={gridCard1}
          title={"8 نکته مفید برای خرید هوشمند خوار و بار فروشی"}
          text={
            "خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش یابد."
          }
        />
        <GridCard
          image={gridCard2}
          title={"چگونه هنگام خرید سبزیجات در پول خود صرفه جویی کنید"}
          text={
            "خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش یابد."
          }
        />
        <GridCard
          image={gridCard3}
          title={"پیمایش در فروشگاه مواد غذایی برای تغذیه سالم"}
          text={
            "خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش یابد."
          }
        />
        <GridCard
          image={gridCard4}
          title={"ارگانیک کردن غذای خود در چند مرحله ساده"}
          text={
            "خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش یابد."
          }
        />
        <GridCard
          image={gridCard5}
          title={"چرا مردم خواربارفروشی آنلاین می‌خرند؟"}
          text={
            "خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش یابد."
          }
        />
        <GridCard
          image={gridCard6}
          title={"دریافت تخفیف بر روی محصولات"}
          text={
            "خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش یابد."
          }
        />
      </section>
      <ul className={styles.gridPagination}>
        <Link to='#'>1</Link>
        <Link to='#'>2</Link>
        <Link to='#'>3</Link>
      </ul>
    </div>
  );
};

export default GridBlog;
