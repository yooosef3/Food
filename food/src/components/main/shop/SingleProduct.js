import React, { useState } from "react";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import DetailSlider from "./DetailSlider";
import Loader from "../../Loader";
import { PRODUCTS } from "../../../graphql/queries";
import PagesHeader from "../PagesHeader";
import Product from "../products/Product";
import Review from "./Review";
import SocialIcons from "../../Header/SocialIcons";
import { TbTruckDelivery } from "react-icons/tb";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

const Detail = styled.div`
  border-bottom: 1px solid #a6a6a6;
  .product-info {
    margin: 0 auto;
    width: 400px;
    @media (min-width: 768px) {
      width: 600px;
    }
    @media (min-width: 992px) {
      width: 1200px;
    }
  }

  .slider-info {
    display: flex;
    flex-direction: column;
    @media (min-width: 992px) {
      flex-direction: row;
      align-items: center;
      gap: 50px;
      justify-content: center;
      padding: 0 20px;
    }
  }

  .more-info {
    .more-info-hide {
      display: none;
    }
    ul {
      list-style: none;
      display: flex;
      border-radius: 4px;
      border-bottom: 4px solid #c3c3c3;
      li {
        font-size: 18px;
        color: #c3c3c3;
        transition: all 0.2s linear;
        padding-bottom: 15px;
        border-bottom: 4px solid #c3c3c3;
        margin-bottom: -4px;
        &:hover {
          color: #58ba17;
          border-bottom: 4px solid #58ba17;
          margin-bottom: -4px;
        }
      }
    }

    .infoClicked {
      color: #58ba17;
      border-bottom: 4px solid #58ba17;
      margin-bottom: -4px;
    }

    h3 {
      @media (min-width: 1200px) {
        font-size: 22px;
      }
    }
  }

  .information {
    text-align: right;
    margin: 30px auto;
    width: 100%;
    @media (min-width: 992px) {
      padding-left: 220px;
    }
    @media (min-width: 1200px) {
      padding-left: 0px;
    }
    h1 {
      font-weight: 500;
      margin: 0;
    }

    h4 {
      color: #616161;
    }

    p {
      color: #616161;
      font-size: 16px;
      margin-bottom: 40px;
    }

    span {
      color: #9f9f9f;
      margin-right: 5px;
      font-weight: 500;
    }
    .star-price {
      display: flex;
      padding: 25px 0;
      align-items: center;
      gap: 25px;
      h2 {
        margin: 0;
        color: #7fd02c;
        font-weight: 500;
      }
      svg {
        font-size: 24px;
        margin-left: 2px;
        color: #ffcc00;
      }
    }
    .add-cart {
      display: flex;
      align-items: center;
      margin-top: 40px;
      span {
        background-color: #f2f2f2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: #292929;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s linear;
        &:hover {
          color: red;
        }
      }
      .counter {
        padding: 16px 24px;
      }
      .plus-minus {
        display: flex;
        flex-direction: column;
        gap: 5px;
        span {
          padding: 0 5px;
        }
      }
    }
    button {
      margin-right: 20px;
      padding: 18px;
      background-color: #e52029;
      border: 0;
      color: #ffff;
      font-size: 20px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s linear;
      &:hover {
        background-color: #b51a22;
      }
    }

    .socials-share {
      margin-top: 40px;
      h5 {
        color: #292929;
        font-size: 18px;
      }
    }
  }

  .product-slider {
    @media (min-width: 998px) {
      width: 50% !important;
    }
  }

  .reviews {
    display: block;
    padding: 15px 20px;
    margin-bottom: 50px;
    h3 {
      color: #262626;
      text-align: right;
    }

    form {
      .inputs {
        display: flex;
        flex-direction: column;
        @media (min-width: 992px) {
          flex-direction: row;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }
      }
    }

    input {
      border-bottom: 1px solid #939393;
      padding: 10px 5px;
      color: #939393;
      &::placeholder {
        font-size: 18px;
        color: #939393;
      }
      @media (min-width: 992px) {
        width: 38%;
      }
    }

    textarea {
      width: 100%;
      border-bottom: 1px solid #939393;
      margin: 20px auto;
      padding: 10px 5px;
      outline: none;
      border-radius: 6px;
      color: #939393;
      &::placeholder {
        font-size: 18px;
        color: #939393;
      }
      @media (min-width: 992px) {
        width: 65%;
        margin-top: 50px;
      }
    }

    button {
      background-color: #58ba17;
      border: none;
      border-radius: 6px;
      color: #ffff;
      padding: 15px;
      font-size: 22px;
      width: 300px;
      transition: all 0.2s linear;
      cursor: pointer;
      &:hover {
        background-color: #3d810f;
      }
    }
  }

  .featured-products {
    display: flex;
    padding: 15px;
    flex-direction: column;
    width: 95%;
    align-items: center;
    gap: 25px;
    margin-top: 50px;
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 600px;
      margin: 0 auto;
    }
    @media (min-width: 992px) {
      min-width: 700px;
    }
    @media (min-width: 1200px) {
      width:100%;
      gap:15px;
    }
  }

  .additional-info {
    display: flex;
    gap: 15px;
    flex-direction: column;
    padding: 35px 15px 15px;
    svg {
      font-size: 74px;
      color: #a6a6a6;
    }
    p {
      color: #808080;
      text-align: right;
      font-size: 16px;
      max-width: 620px;
      @media (min-width: 1200px) {
        max-width: 800px;
      }
    }
    @media (min-width: 768px) {
      flex-direction: row;
      width: 95%;
      svg {
        width: 20%;
      }
    }
  }

  .delivery {
    display: flex;
    gap: 15px;
    flex-direction: column;
    padding: 35px 15px 15px;
    svg {
      font-size: 74px;
      color: #a6a6a6;
    }
    p {
      color: #808080;
      text-align: right;
      font-size: 16px;
      max-width: 620px;
      @media (min-width: 1200px) {
        max-width: 800px;
      }
    }
    @media (min-width: 768px) {
      flex-direction: row;
      width: 95%;
      svg {
        width: 20%;
      }
    }
  }
`;
const SingleProduct = () => {
  const [info, setInfo] = useState({
    review: true,
    moreInfo: false,
    delivery: false,
  });
  const { data, loading, error } = useQuery(PRODUCTS);

  return (
    <Detail>
      <PagesHeader
        headline="اطلاعات محصول"
        path="singleproduct"
        page="فروشگاه"
      />
      <section className="product-info">
        <div className="slider-info">
          <div className="product-slider">
            <DetailSlider />
          </div>
          <div className="information">
            <h1>پنیر Frigo Parmesan</h1>
            <section className="star-price">
              <h2>$20</h2>
              <div>
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <BsStarHalf />
              </div>
            </section>
            <p>
              عضویت در خبرنامه grocmart یکی از بهترین روش ها و یکی سریعترین روش
              ها ببرای پیدا کردن کد تخفیف grocmart است. شما میتونید به راحتی با
              ثبت نام در خبرنامه grocmart و فقط با چند کلیک در خبرنامه grocmart
              ثبت نام کنید تا از کد تخفیف های روز مطلع شوید.
            </p>
            <h4>
              دسته بندی: <span>پنیر</span>
            </h4>
            <h4>
              {" "}
              وزن: <span>200gr</span>
            </h4>
            <h4>
              {" "}
              ابعاد: <span>0.6 X 0.9 in</span>
            </h4>
            <div className="add-cart">
              <span className="counter">1</span>
              <div className="plus-minus">
                <span>+</span>
                <span>-</span>
              </div>
              <button>اضافه به سبد خرید</button>
            </div>
            <div className="socials-share">
              <h5>اشتراک:</h5>
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="more-info">
          <ul>
            <li
              className={`${info.review && "infoClicked"}`}
              onClick={() => setInfo({ review: !info.review })}
            >
              نظرات
            </li>
            <li
              className={`${info.moreInfo && "infoClicked"}`}
              onClick={() => setInfo({ moreInfo: !info.moreInfo })}
            >
              اطلاعات اضافی
            </li>
            <li
              className={`${info.delivery && "infoClicked"}`}
              onClick={() => setInfo({ delivery: !info.delivery })}
            >
              تحویل و پرداخت
            </li>
          </ul>
          <div className={`${!info.review && "more-info-hide"} ${"reviews"}`}>
            <Review />
            <h3>یک نظر بنویسید</h3>
            <form>
              <section className="inputs">
                <input type="text" placeholder="نام" />
                <input type="text" placeholder="نام خانوادگی" />
                <input type="text" placeholder="ایمیل" />
                <input type="text" placeholder="تلفن" />
                <textarea rows={8} placeholder="متن پیام"></textarea>
              </section>
              <br />
              <button type="submit">ارسال</button>
            </form>
          </div>
          <div
            className={`${
              !info.moreInfo && "more-info-hide"
            } ${"additional-info"}`}
          >
            <AiOutlineExclamationCircle />
            <p>
              {" "}
              عضویت در خبرنامه grocmart یکی از بهترین روش ها و یکی سریعترین روش
              ها ببرای پیدا کردن کد تخفیف grocmart است. شما میتونید به راحتی با
              ثبت نام در خبرنامه grocmart و فقط با چند کلیک در خبرنامه grocmart
              ثبت نام کنید تا از کد تخفیف های روز مطلع شوید.
            </p>
          </div>
          <div
            className={`${!info.delivery && "more-info-hide"} ${"delivery"}`}
          >
            <TbTruckDelivery />
            <p>
              {" "}
              عضویت در خبرنامه grocmart یکی از بهترین روش ها و یکی سریعترین روش
              ها ببرای پیدا کردن کد تخفیف grocmart است. شما میتونید به راحتی با
              ثبت نام در خبرنامه grocmart و فقط با چند کلیک در خبرنامه grocmart
              ثبت نام کنید تا از کد تخفیف های روز مطلع شوید.
            </p>
          </div>
          <h3>محصولات برتر</h3>
          <div className="featured-products">
            {loading ? (
              <Loader />
            ) : error ? (
              <h1 style={{ color: "#e52029", textAlign: "center" }}>
                یک خطای شبکه رخ داده است, بعدا امتحان کنید
              </h1>
            ) : (
              data.products
                .slice(0, 4).map((product) => <Product key={product.id} {...product} />)
            )}
          </div>
        </div>
      </section>
    </Detail>
  );
};

export default SingleProduct;
