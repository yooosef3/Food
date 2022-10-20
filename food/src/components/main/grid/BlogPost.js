import BlogDetails from "./BlogDetails";
import PagesHeader from "../PagesHeader";
import React from "react";

const BlogPost = () => {
  return (
    <div>
      <PagesHeader page={'بلاگ'} headline={"پست"} path={"blogpost"} />
      <div className="blog-post">
        <BlogDetails/>
      </div>
    </div>
  );
};

export default BlogPost;
