import BlogDetails from "./BlogDetails";
import PagesHeader from "../PagesHeader";
import React from "react";
import styled from "styled-components";

const Post = styled.div`
  border-bottom: 1px solid #c2c2c2;
`
const BlogPost = () => {
  return (
    <Post>
      <PagesHeader page={'بلاگ'} headline={"پست"} path={"blogpost"} />
      <div className="blog-post">
        <BlogDetails/>
      </div>
    </Post>
  );
};

export default BlogPost;
