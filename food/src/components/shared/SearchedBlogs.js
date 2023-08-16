import BlogListCard from "../main/grid/BlogListCard";
import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const SearchBlog = styled.div`
  padding: 150px 15px 40px 15px;
  border-bottom: 1px solid gray;
  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
  .list {
    display: flex;
    gap: 25px;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;
const SearchedBlogs = (props) => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <SearchBlog>
      <h2>نتایج جستجو</h2>
      <div className="list">
        {data.map((item) => (
          <BlogListCard
            key={item.id}
            image={item.images.url}
            title={item.title}
            text={item.text}
            slug={item.slug}
          />
        ))}
      </div>
    </SearchBlog>
  );
};

export default SearchedBlogs;
