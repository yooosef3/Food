import { BLOGS } from "../../../graphql/queries";
import GridCard from "./GridCard";
import { Link } from "react-router-dom";
import Loader from "../../shared/Loader";
import PagesHeader from "../PagesHeader";
import React from "react";
import styles from "../../../styles/main/grid/GridBlog.module.css";
import { useQuery } from "@apollo/client";

const GridBlog = () => {
  const {loading, data, error} = useQuery(BLOGS);
  if (loading) return <Loader />;
  if (error)
    return (
      <h1 style={{ color: "#e52029", textAlign: "center" }}>
        یک خطای شبکه رخ داده است, بعدا امتحان کنید
      </h1>
    );
  return (
    <div className={styles.GridBlog}>
      <PagesHeader page={'بلاگ'} headline={"گرید"} path={"gridblog"} />
      <section className={styles.gridCards}>
      {
        data.blogs.map(blog => 
        <GridCard
          image={blog.images.url}
          title={blog.title}
          text={blog.text}
          slug={blog.slug}
          key={blog.id}
        />
        )
      }
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
