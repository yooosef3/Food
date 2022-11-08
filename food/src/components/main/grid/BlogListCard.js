import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 15px;
  max-width: 500px;
  margin: 30px auto;
  @media (min-width: 768px) {
    max-width: 660px;
  }

  @media (min-width: 992px) {
    &:hover img {
      transform: scale(1.05);
    }
  }

  div span {
    font-weight: 600;
    &:nth-of-type(1) {
      background-color: #7fd02c;
      padding: 0 10px 5px 10px;
      margin-left: 15px;
      border-radius: 6px;
      color: #ffff;
    }
    &:nth-of-type(2) {
      color: #969696;
      border-right: 1px solid #b8b8b8;
      padding-right: 15px;
    }
  }
  .blogNews {
    margin-top: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    padding: 15px 0;
    border-radius: 10px;

    a {
      padding-right: 15px;
    }

    p {
      padding: 15px;
    }
    h2 {
      color: #222222;
      margin-bottom: -15px;
      transition: all 0.2s linear;
      cursor: pointer;
      padding-right: 15px;
      &:hover {
        color: #7fd02c;
      }
      @media (min-width: 1200px) {
        font-size: 30px;
      }
    }

    section div {
      @media (min-width: 992px) {
        overflow: hidden;
        height: 324px;
      }
    }

    section div img {
      width: 100%;
      transition: all 0.2s linear;
    }
    p {
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 20px;
      color: #969696;
      text-align: right;
    }
    a {
      text-align: right;
      transition: all 0.2s linear;
      color: #7fd02c;
      font-size: 18px;
      font-weight: 600;
      display: flex;
      width: fit-content;
      &:hover {
        color: red;
      }
    }
  }
`;
const BlogListCard = ({ title, image, text, more }) => {
  return (
    <Card>
      <div>
        <span>خبر</span>
        <span>10 مهر ,1401</span>
      </div>
      <div className="blogNews">
        <h2>{title}</h2>
        <section>
          <div>
            <img alt="blog" src={image} />
          </div>
          <p>{text}</p>
          <Link to={`/blogpost/${more}`}>بیشتر بخوانید</Link>
        </section>
      </div>
    </Card>
  );
};

export default BlogListCard;
