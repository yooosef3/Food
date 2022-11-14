import { BLOGS } from "../../../graphql/queries";
import BlogListCard from "./BlogListCard";
import { Link } from "react-router-dom";
import Loader from "../../shared/Loader";
import React from "react";
import styles from "../../../styles/main/grid/BlogsList.module.css";
import { useQuery } from "@apollo/client";

const BlogsList = () => {
  const { loading, data, error } = useQuery(BLOGS);

  if (loading) return <Loader />;
  if (error)
    return (
      <h4 style={{ color: "red", textAlign: "center" }}>
        خطایی رخ داده است...
      </h4>
    );

  return (
    <div className={styles.blogsList}>
      {data.blogs.map((blog) => (
        <BlogListCard
          key={blog.id}
          image={blog.images.url}
          title={blog.title}
          text={blog.text}
          slug={blog.slug}
        />
      ))}
      <ul>
        <Link to="#">1</Link>
        <Link to="#">2</Link>
        <Link to="#">3</Link>
      </ul>
    </div>
  );
};

export default BlogsList;
