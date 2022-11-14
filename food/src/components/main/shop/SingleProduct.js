import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import DetailSlider from "./DetailSlider";
import Loader from "../../shared/Loader";
import { PRODUCT } from "../../../graphql/queries";
import PagesHeader from "../PagesHeader";
import ProductPack from "../products/ProductPack";
import Review from "./Review";
import SocialIcons from "../../Header/SocialIcons";
import { TbTruckDelivery } from "react-icons/tb";
import styled from "styled-components";
import { useParams } from "react-router-dom";
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
      gap: 35px;
      border-radius: 4px;
      border-bottom: 4px solid #c3c3c3;
      li {
        font-size: 18px;
        color: #c3c3c3;
        font-weight: 600;
        cursor: pointer;
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
      font-weight: 600;
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

    .comment-form {

      .input-comment{
        margin: 0 auto;
      }
      
      @media (min-width: 768px) {
        .name-family,
        .email-phone {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          input {
            display: flex;
            width: 400px;
          }
        }
        .input-comment{
          input {
            width: 400px;
          }
        }
      }

      input {
        width: 100%;
        height: 45px;
        border-radius: 6px;
        border: 1px solid gray;
        font-size: 20px;
        padding: 0 5px 0 0;
        outline: 0;
        margin-top: 10px;
        &::placeholder {
          font-size: 16px;
        }
        &:focus {
          border: 2px solid #1d6adc;
        }
        &:invalid {
          border: 2px solid #ff7d87;
        }
      }
      .error {
        color: #292929;
        height: fit-content;
        margin-bottom: 10px;
        text-shadow: 1px 1px #ff000d;
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
      margin-top: 15px;
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
      width: 100%;
      gap: 15px;
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
      font-weight: 600;
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
      font-weight: 600;
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
  const { slug } = useParams();
  const { loading, data, error } = useQuery(PRODUCT, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error)
    return (
      <h1 style={{ color: "#e52029", textAlign: "center", fontSize: "18px" }}>
        یک خطای شبکه رخ داده است, بعدا امتحان کنید
      </h1>
    );
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
            <DetailSlider data={data} />
          </div>
          <div className="information">
            <h1> {data.product.name}</h1>
            <section className="star-price">
              <h2>${data.product.price}</h2>
              <div>
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <BsStarHalf />
              </div>
            </section>
            <p>{data.product.details}</p>
            <h4>
              دسته بندی: <span>{data.product.category}</span>
            </h4>
            <h4>
              وزن: <span dir="ltr">{data.product.weight}</span>
            </h4>
            <h4>
              ابعاد: <span dir="ltr">{data.product.dimensions}</span>
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
            <Formik
              initialValues={{
                email: "",
                name: "",
                comment: "",
                family: "",
                phone: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("نام ضروری است"),
                family: Yup.string().required("نام خانوادگی ضروری است"),
                email: Yup.string()
                  .email("آدرس ایمیل نامعتبر است")
                  .required(" ایمیل ضروری است"),
                phone: Yup.string().required("شماره تلفن ضروری است"),
                comment: Yup.string().required(" یک نظر بنویسید"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form className="comment-form">
                <div className="name-family">
                  <div className="input-error">
                    <Field
                      name="name"
                      type="text"
                      placeholder="نام خود را وارد کنید"
                    />
                    <ErrorMessage
                      className="ErrorMessage"
                      name="name"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                  </div>
                  <div className="input-error">
                    <Field
                      name="family"
                      type="text"
                      placeholder="نام خانوادگی خود را وارد کنید"
                    />
                    <ErrorMessage
                      className="ErrorMessage"
                      name="family"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                  </div>
                </div>
                <div className="email-phone">
                  <div className="input-error">
                    <Field
                      name="email"
                      type="email"
                      placeholder="ایمیل خود را وارد کنید"
                    />
                    <ErrorMessage
                      className="ErrorMessage"
                      name="email"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                  </div>
                  <div className="input-error">
                    <Field
                      name="phone"
                      type="number"
                      placeholder="تلفن خود را وارد کنید"
                    />
                    <ErrorMessage
                      className="ErrorMessage"
                      name="phone"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                  </div>
                </div>
                <div className="input-comment">
                  <Field
                    name="comment"
                    type="text"
                    placeholder=" یک نظر بنویسید"
                  />
                  <ErrorMessage
                    className="ErrorMessage"
                    name="comment"
                    render={(msg) => <div className="error">{msg}</div>}
                  />
                </div>
                <button type="submit">ثبت</button>
              </Form>
            </Formik>
          </div>
          <div
            className={`${
              !info.moreInfo && "more-info-hide"
            } ${"additional-info"}`}
          >
            <AiOutlineExclamationCircle />
            <p>{data.product.information}</p>
          </div>
          <div
            className={`${!info.delivery && "more-info-hide"} ${"delivery"}`}
          >
            <TbTruckDelivery />
            <p>
            یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی grocmart سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.            </p>
          </div>
          <h3>محصولات برتر</h3>
          <ProductPack />
        </div>
      </section>
    </Detail>
  );
};

export default SingleProduct;