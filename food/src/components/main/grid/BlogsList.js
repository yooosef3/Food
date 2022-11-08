import BlogListCard from "./BlogListCard";
import { Link } from "react-router-dom";
import React from "react";
import blogCard1 from '../../../assets/images/post-7-800x394.jpg'
import blogCard2 from '../../../assets/images/post-8-800x394.jpg'
import blogCard3 from '../../../assets/images/post-9-800x394.jpg'
import styles from "../../../styles/main/grid/BlogsList.module.css";

const BlogsList = () => {
  return (
    <div className={styles.blogsList}>
      <BlogListCard
        title={"8 نکته مفید برای خرید هوشمند خوار و بار فروشی"}
        image={blogCard1}
        text={
          "خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش یابد."
        }
        more='8-useful-tips-for-smart-grocery-shopping'
      />
      <BlogListCard
        title={"چگونه هنگام خرید سبزیجات در پول خود صرفه جویی کنید"}
        image={blogCard2}
        text={
          "خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش یابد."
        }
        more='how-to-save-money-when-shopping-for-vegetables'
      />
      <BlogListCard
        title={"گردش در فروشگاه مواد غذایی برای تغذیه سالم"}
        image={blogCard3}
        text={
          "خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش یابد."
        }
        more='navigating-the-grocery-store-for-healthy-eating'
      />
      <ul>
        <Link to='#'>1</Link>
        <Link to='#'>2</Link>
        <Link to='#'>3</Link>
      </ul>
    </div>
  );
};

export default BlogsList;
