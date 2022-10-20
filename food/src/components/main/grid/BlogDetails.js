import BlogListSidebar from "./BlogListSidebar";
import Comments from "./Comments";
import { FaQuoteLeft } from "react-icons/fa";
import GridCard from "./GridCard";
import React from "react";
import SocialIcons from "../../Header/SocialIcons";
import blogCard2 from "../../../assets/images/post-8-800x394.jpg";
import blogCard3 from "../../../assets/images/post-9-800x394.jpg";
import styled from "styled-components";

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
      width: 75%;
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
    .share {
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

  .comment-form {
    margin-bottom:60px;
    h3 {
      @media (min-width: 768px) {
        text-align: right;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      padding: 15px;
      gap: 50px;
      .inputs {
        display: flex;
        flex-direction: column;
        gap: 50px;
        @media (min-width: 768px) {
          flex-direction: row;
        }

        input {
          border-bottom: 1px solid #dcdcdc;
          padding: 5px;
          color: #414141;
          &::placeholder {
            color: #414141;
            font-size: 20px;
          }
        }
      }
      textarea {
        border: none;
        border-bottom: 1px solid #dcdcdc;
        &::placeholder {
          font-size: 20px;
          color: #414141;
        }
        &:focus{
          outline:none;
        }
      }

      button {
        background-color: #54ab02;
        color: #ffff;
        font-size: 24px;
        padding: 10px 0;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        transition: all 0.2s linear;
        &:hover {
          background-color: #e52029;
        }
        @media (min-width: 768px) {
          width: 130px;
        }
      }
    }
  }
`;
const BlogDetails = ({ title, image, text, subtitle, subtext }) => {
  return (
    <Detail>
      <section className="post-blog">
        <div className="news">
          <span>خبر</span>
          <p>20 مهر 1401</p>
        </div>
        <div className="post">
          <h2>8 نکته مفید برای خرید هوشمند خوار و بار فروشی</h2>
          <div>
            <img alt="post" src={blogCard2} />
          </div>
          <p>
            خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد
            خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در
            خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش
            یابد.
          </p>
          <FaQuoteLeft />
          <h3>
            8 نکته مفید برای خرید هوشمند خوار و بار فروشی 8 نکته مفید برای خرید
            هوشمند خوار و بار فروشی
          </h3>
          <p>
            خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد
            خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در
            خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش
            یابد.
          </p>
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
            text={
              "خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش یابد."
            }
          />
          <GridCard
            image={blogCard3}
            title={"پیمایش در فروشگاه مواد غذایی برای تغذیه سالم"}
            text={
              "خرید مواد غذایی یکی از مهم‌ترین مخارج هر خانواده است. هزینه‌های مواد خوراکی گاه تا یک سوم درآمد هر خانواده را در ماه شامل می‌شود که در خانواده‌های پرجمعیت‌تر این مقدار می‌تواند به نصف درآمد نیز افزایش یابد."
            }
          />
        </div>
        <h3 className="comments"> کامنت</h3>
        <Comments />
        <Comments />
        <Comments />
        <div className="comment-form">
          <h3>یک کامنت بنویسید</h3>
          <form>
            <div className="inputs">
              <input placeholder="نام " type='text'/>
              <input placeholder="ایمیل" type='email' />
            </div>
            <textarea placeholder="متن" rows={8}/>
            <button type="submit">ارسال</button>
          </form>
        </div>
      </section>
      <BlogListSidebar />
    </Detail>
  );
};

export default BlogDetails;
