import React, { useState } from "react";

import { BLOGS } from "../../../graphql/queries";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import lopez from "../../../assets/images/user-4-123x123.jpg";
import post1 from "../../../assets/images/post-mini-1-106x104.jpg";
import post2 from "../../../assets/images/post-mini-2-106x104.jpg";
import styles from "../../../styles/main/grid/BlogListSidebar.module.css";
import { useQuery } from "@apollo/client";

const BlogListSidebar = () => {
  const [blog, setBlog] = useState("");
  const { loading, data, error } = useQuery(BLOGS);

  if (loading) return <p style={{ display: "none" }}></p>;
  if (error) return <p style={{ display: "none" }}></p>;

  const blogHandler = () => {
    const filteredBlogs = data.blogs.filter((item) => {
      if (blog === "") {
        return "";
      } else {
        return item.title.includes(blog);
      }
    });
    return filteredBlogs;
  };

  const blogsFiltered = blogHandler();
  console.log(blogsFiltered);
  
  return (
    <div className={styles.blogListSidebar}>
      <div className={styles.lopez}>
        <img alt="lopez" src={lopez} />
        <Link to="/ourteam">
          <h3>Caroline Lopez</h3>
        </Link>
        <p>خانم Lopez اینجاست تا پاسخگوی سوالات شما در زمینه خرید مناسب باشد</p>
      </div>
      <div className={styles.searchBlog}>
        <input
          placeholder="جستجوی بلاگ ..."
          value={blog}
          onChange={(event) => setBlog(event.target.value)}
        />
        <Link
          onClick={blogHandler}
          to={{
            pathname: "/searchedblog",
          }}
          state={blogsFiltered}
        >
          <RiSearchLine className={styles.search} />
        </Link>
      </div>
      <section className={styles.category}>
        <div className={styles.galery}>
          <h3>گالری</h3>
          <ul>
            <li>
              <p>همه</p>
              <span>18</span>
            </li>
            <li>
              <p>فروشگاه</p>
              <span>9</span>
            </li>
            <li>
              <p>خرید</p>
              <span>5</span>
            </li>
            <li>
              <p>تخفیف</p>
              <span>8</span>
            </li>
          </ul>
        </div>
        <div className={styles.latestPost}>
          <h3>آخرین پست ها</h3>
          <section>
            <div className={styles.miniPost}>
              <img alt="post" src={post1} />
              <div>
                <Link to="/blogpost/getting-discounts-on-your-favorite-products">
                  <h4>5 دلیل برای انتخاب grocmart</h4>
                </Link>
                <p>15 مهر 1401</p>
              </div>
            </div>
            <div className={styles.miniPost}>
              <img alt="post" src={post2} />
              <div>
                <Link to="/blogpost/why-people-are-shopping-for-groceries-online">
                  <h4> دلیل خرید آنلاین مردم؟</h4>
                </Link>
                <p>15 مهر 1401</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className={styles.archives}>
        <div className={styles.tags}>
          <h3>تگ های محبوب</h3>
          <ul>
            <li>اخبار</li>
            <li>سبزیجات</li>
            <li>نوشیدنی ها</li>
            <li>میوه ها</li>
            <li>غذا</li>
            <li>خرید</li>
          </ul>
        </div>
        <div className={styles.archive}>
          <h3>آرشیو</h3>
          <ul>
            <li>مرداد 1401</li>
            <li>شهریور 1401</li>
            <li>مهر 1401</li>
            <li>آبان 1401</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BlogListSidebar;
