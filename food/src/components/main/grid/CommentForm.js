import "react-toastify/dist/ReactToastify.css";

import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { SEND_COMMENT } from "../../../graphql/mutation";
import styled from "styled-components";
import { useMutation } from "@apollo/client";

const Comment = styled.div`
  .comment-form {
    margin-bottom: 60px;
    h3 {
      @media (min-width: 768px) {
        text-align: right;
      }
    }
    .form {
      display: flex;
      flex-direction: column;
      padding: 15px;
      gap: 50px;
      .inputs {
        display: flex;
        flex-direction: column;
        gap: 20px;
        @media (min-width: 768px) {
          flex-direction: row;
          justify-content: center;
        }

        input {
          border: 1px solid gray;
          width: 100%;
          height: 30px;
          border-radius: 6px;
          padding: 5px;
          color: #414141;
          outline: 0;
          &::placeholder {
            color: #ababab;
            font-size: 20px;
          }
          &:focus {
            border: 2px solid #1d6adc;
          }
          &:invalid {
            border: 2px solid #ff7d87;
          }
        }
      }
      .textarea {
        border: 1px solid gray;
        border-radius: 6px;
        outline: 0;
        width: 95%;
        padding: 15px;
        &::placeholder {
          font-size: 20px;
          color: #ababab;
        }
        &:focus {
          border: 2px solid #1d6adc;
        }
      }

      .error {
        color: #ffffff;
        height: fit-content;
        margin-bottom: 10px;
        font-weight: 600;
        text-shadow: 1px 1px #ff000d;
      }

      .send {
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

      .sending {
        background-color: #c4c4c4;
        color: #292929;
        font-size: 24px;
        padding: 10px 0;
        border-radius: 6px;
        border: 1px solid #4ccb4c;
      }
    }
  }
`;

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });

  console.log(data);

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
    }
  };

  return (
    <Comment>
      <div className="comment-form">
        <Formik
          initialValues={{ email: email, name: name, textarea: text }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, " نام باید کمتر از 15 حرف باشد")
              .required("نام ضروری است"),
            email: Yup.string()
              .email("آدرس ایمیل نامعتبر است")
              .required("ایمیل ضروری است"),
            textarea: Yup.string().required("لطفا یک کامنت بنویسید"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              toast.success("کامنت ارسال شد و در انتظار تایید است", {
                position: "top-center",
              });
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="form">
            <div className="inputs">
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
            </div>
            <Field
              name="textarea"
              className="textarea"
              placeholder="نظر خود را وارد کنید"
            />
            <ErrorMessage
              className="ErrorMessage"
              name="textarea"
              render={(msg) => <div className="error">{msg}</div>}
            />
            <button className="send" type="submit" onClick={sendHandler}>
              ارسال
            </button>
            <ToastContainer />
          </Form>
        </Formik>
      </div>
    </Comment>
  );
};

export default CommentForm;
