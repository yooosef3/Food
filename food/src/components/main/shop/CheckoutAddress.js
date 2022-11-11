import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import React from "react";
import styled from "styled-components";

const Address = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 15px 70px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 55px;
  }
  .billing,
  .delivery {
    margin-top: 40px;
  }
  h2 {
    color: #292929;
    text-align: center;
    margin-bottom: 40px;
    @media (min-width: 992px) {
      text-align: right;
    }
  }
  .checkout-form {
    input {
      width: 100%;
      height: 40px;
      border-radius: 6px;
      border: 1px solid gray;
      margin-top: 10px;
      outline: 0;
      font-size: 22px;
      &::placeholder {
        font-size: 18px;
        padding-right: 10px;
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

    label{
      display: flex;
      align-items: center;
      gap: 5px;
      input{
        width: fit-content;
      }
    }
    
    @media (min-width: 640px) {
      .name-family,
      .email-phone {
        display: flex;
        justify-content: space-between;
        gap: 15px;
      }
    }
  }
`;
const CheckoutAddress = () => {
  return (
    <Address>
      <div className="billing">
        <h2>آدرس تسویه حساب</h2>
        <Formik
          initialValues={{
            email: "",
            name: "",
            company: "",
            address: "",
            city: "",
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
            company: Yup.string().required(" نام شرکت ضروری است"),
            city: Yup.string().required(" نام شهر ضروری است"),
            address: Yup.string().required(" آدرس ضروری است"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="checkout-form">
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
            <div className="input-error">
              <Field
                name="company"
                type="text"
                placeholder="نام شرکت را وارد کنید"
              />
              <ErrorMessage
                className="ErrorMessage"
                name="company"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>
            <div className="input-error">
              <Field
                name="address"
                type="text"
                placeholder="آدرس خود را وارد کنید"
              />
              <ErrorMessage
                className="ErrorMessage"
                name="address"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>
            <div className="input-error">
              <Field
                name="city"
                type="text"
                placeholder="شهر خود را وارد کنید"
              />
              <ErrorMessage
                className="ErrorMessage"
                name="city"
                render={(msg) => <div className="error">{msg}</div>}
              />
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
            <label>
              <Field type="checkbox" name="toggle" />
              آدرس صورتحساب و آدرس حمل و نقل من یکسان است
            </label>
          </Form>
        </Formik>
      </div>
      <div className="delivery">
        <h2>آدرس تحویل</h2>
        <Formik
          initialValues={{
            email: "",
            name: "",
            company: "",
            address: "",
            city: "",
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
            company: Yup.string().required(" نام شرکت ضروری است"),
            city: Yup.string().required(" نام شهر ضروری است"),
            address: Yup.string().required(" آدرس ضروری است"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="checkout-form">
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
            <div className="input-error">
              <Field
                name="company"
                type="text"
                placeholder="نام شرکت را وارد کنید"
              />
              <ErrorMessage
                className="ErrorMessage"
                name="company"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>
            <div className="input-error">
              <Field
                name="address"
                type="text"
                placeholder="آدرس خود را وارد کنید"
              />
              <ErrorMessage
                className="ErrorMessage"
                name="address"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>
            <div className="input-error">
              <Field
                name="city"
                type="text"
                placeholder="شهر خود را وارد کنید"
              />
              <ErrorMessage
                className="ErrorMessage"
                name="city"
                render={(msg) => <div className="error">{msg}</div>}
              />
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
          </Form>
        </Formik>
      </div>
    </Address>
  );
};

export default CheckoutAddress;
