import { BLOG } from "../../../graphql/queries";
import BlogListSidebar from "./BlogListSidebar";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { FaQuoteLeft } from "react-icons/fa";
import GridCard from "./GridCard";
import Loader from "../../shared/Loader";
import React from "react";
import SocialIcons from "../../Header/SocialIcons";
import blogCard2 from "../../../assets/images/post-8-800x394.jpg";
import blogCard3 from "../../../assets/images/post-9-800x394.jpg";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

const Detail = styled.div`
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
  .post-blog {
    padding: 15px 15px !important;
    @media (min-width: 768px) {
      width: 60%;
    }
    .news {
      display: flex;
      padding: 0;
      gap: 20px;
      justify-content: flex-start;
      align-items: center;
      span {
        background-color: #54ab02;
        color: #ffff;
        padding: 0px 15px 2px 15px;
        font-size: 20px;
        font-weight: 800;
        border-radius: 6px;
      }
      p {
        color: #afafaf;
        margin: 0;
      }
    }
  }
  .post {
    border-bottom: 1px solid #dcdcdc;
    padding-bottom: 20px;

    &:hover {
      img {
        transform: scale(1.05);
      }
    }
    h2 {
      color: #292929;
      text-align: right;
      padding: 10px 0;
    }
    h3 {
      color: #2d2d2d;
      text-align: center;
      margin: 0;
    }
    div {
      overflow: hidden;
      padding-bottom: 0;
      img {
        height: 100%;
        width: 100%;
        transition: all 0.2s linear;
      }
    }
    p {
      color: #afafaf;
      text-align: right;
      font-size: 16px;
      padding: 25px 0;
      &:nth-of-type(2) {
        text-align: center;
      }
    }
    svg {
      color: #54ab02;
      font-size: 30px;
      opacity: 40%;
      margin-bottom: 15px;
    }
  }
  .link {
    .links {
      display: flex;
      justify-content: center;
      font-weight: bold;
      color: #afafaf;
      margin: 35px 0;
      span {
        cursor: pointer;
        margin: 0 10px;
        transition: all 0.2s linear;
        &:hover {
          color: red;
        }
      }
    }
    .share:first-child {
      display: flex;
      justify-content: center !important;
    }
  }
  .related-post {
    margin-top: 30px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  .comments {
    text-align: right;
  }

  
`;
const BlogDetails = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(BLOG, {
    variables: {
      slug,
    },
  });
  if (loading) return <Loader />;
  if (error)
    return (
      <h1 style={{ color: "#e52029", textAlign: "center", fontSize: "18px" }}>
        یک خطای شبکه رخ داده است, بعدا امتحان کنید
      </h1>
    );
  const { title, text, subTitle, subText, images } = data.blog;
  
  return (
    <Detail>
      <section className="post-blog">
        <div className="news">
          <span>خبر</span>
          <p>20 مهر 1401</p>
        </div>
        <div className="post">
          <h2>{title}</h2>
          <div>
            <img alt="post" src={images.url} />
          </div>
          <p>{text}</p>
          <FaQuoteLeft />
          <h3>{subTitle}</h3>
          <p>{subText}</p>
        </div>
        <div className="link">
          <div className="links">
            <span>اخبار</span>
            <span>سبزیجات</span>
            <span>میوه</span>
          </div>
          <div className="share">
            <SocialIcons />
          </div>
        </div>
        <h3>پست های مرتبط</h3>
        <div className="related-post">
          <GridCard
            image={blogCard2}
            title={"چگونه هنگام خرید سبزیجات در پول خود صرفه جویی کنید"}
            text1={
              "خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش یابد."
            }
            text=""
            slug="how-to-save-money-when-shopping-for-vegetables"
          />
          <GridCard
            image={blogCard3}
            title={"پیمایش در فروشگاه مواد غذایی برای تغذیه سالم"}
            text1={
              "خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش یابد."
            }
            text=""
            slug="navigating-the-grocery-store-for-healthy-eating"
          />
        </div>
        <h3 className="comments"> کامنت</h3>
        <Comments />
        <Comments />
        <Comments />
        <div className="comment-form">
          <h3>یک کامنت بنویسید</h3>
          <CommentForm slug={slug}/>
        </div>
      </section>
      <BlogListSidebar />
    </Detail>
  );
};

export default BlogDetails;
