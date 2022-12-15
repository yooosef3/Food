import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { SEND_REVIEW } from "../../../graphql/mutation";
import styled from "styled-components";
import { useMutation } from "@apollo/client";

const Review = styled.div`
  background-color: #ffff;
  border-radius: 6px;
  padding: 15px;
  margin: 0 auto;
  @media (min-width: 1000px) {
    width: 75%;
  }
  h1 {
    text-align: right;
    font-size: 20px;
    background-color: #58ba17;
    width: fit-content;
    color: #ffff;
    padding: 4px 8px 6px 8px;
    border-radius: 6px;
    margin-bottom: 15px;
    transition: all 0.2s linear;
    cursor: pointer;
    &:hover {
      opacity: 90%;
    }
  }
  p {
    color: #ffff;
    border-radius: 6px;
    margin-bottom: 15px;
    width: fit-content;
    font-size: 20px;
    border: 1px solid gray;
    padding: 2px 8px 4px 8px;
    background-color: gray;
  }
  h3 {
    margin: 0;
  }
  span {
    color: gray;
  }
  .review-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .textarea {
      display: flex;
      flex-direction: column;
      textarea {
        padding: 15px;
        border: 1px solid gray;
        border-radius: 6px;
        outline: 0;
        &:focus {
          border: 1px solid blue;
        }
      }
      label {
        text-align: right;
        color: gray;
        font-weight: 500;
        margin-bottom: 8px;
      }
    }
    .name-lastname,
    .phone-email {
      display: flex;
      flex-direction: column;
      gap: 15px;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      input {
        height: 40px;
        border-radius: 6px;
        outline: 0;
        border: 1px solid gray;
        padding-right: 10px;
        color: gray;
        font-size: 16px;
        &:focus {
          border: 1px solid blue;
        }
      }
      .input {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        label {
          text-align: right;
          color: gray;
          font-weight: 500;
          margin-bottom: 8px;
        }
      }
    }
  }
`;

const ReviewForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const [sendReview, { loading, data }] = useMutation(SEND_REVIEW, {
    variables: {
      name,
      lastname,
      email,
      phone,
      text,
      slug,
    },
  });

  const sendHandler = () => {
    if (name && email && text && phone && lastname) {
      sendReview();
      setPressed(true);
    } else {
      toast.warn("تمام فیلد هارو پر کن", {
        position: "top-center",
        closeOnClick: false,
      });
    }
  };

  if (data && pressed) {
    toast.success("کامنت ارسال شد و منتظر تایید می باشد", {
      position: "top-center",
      closeOnClick: false,
    });
    setPressed(false);
  }

  return (
    <Review>
      <form className="review-form">
        <div className="name-lastname">
          <div className="input">
            <label>نام</label>
            <input
              type="text"
              value={name}
              placeholder="نام"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input">
            <label> نام خانوادگی</label>
            <input
              type="text"
              value={lastname}
              placeholder="نام خانوادگی"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
        <div className="phone-email">
          <div className="input">
            <label>تلفن</label>
            <input
              type="text"
              value={phone}
              placeholder="تلفن"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input">
            <label>ایمیل</label>
            <input
              type="email"
              value={email}
              placeholder="ایمیل"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="textarea">
          <label>متن کامنت</label>
          <textarea
            value={text}
            rows={10}
            cols={22}
            placeholder="متن کامنت"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        {loading ? (
          <p className="sending">در حال ارسال</p>
        ) : (
          <h1 className="send" onClick={sendHandler}>
            ارسال
          </h1>
        )}
        <ToastContainer />
      </form>
    </Review>
  );
};

export default ReviewForm;
