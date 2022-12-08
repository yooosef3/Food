import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { SEND_COMMENT } from "../../../graphql/mutation";
import styled from "styled-components";
import { useMutation } from "@apollo/client";

const Comment = styled.div`
  .comment-form {
    .input {
      display: flex;
      flex-direction: column;
      text-align: right;
      margin-bottom: 10px;
      label {
        font-weight: 600;
        color: gray;
        margin-bottom: 5px;
      }
      input {
        border: 1px solid gray;
        outline: 0;
        border-radius: 6px;
        height: 40px;
        font-size: 22px;
        padding-right: 10px;
        &:focus {
          border: 1px solid #0190b0;
        }
        &:invalid {
          border: 1px solid red;
        }
      }
    }
    textarea {
      border: 1px solid gray;
      outline: 0;
      font-size: 22px;
      border-radius: 6px;
      padding-right: 10px;
      &:focus {
        border: 1px solid #0190b0;
      }
    }
    .name-email {
      display: flex;
      flex-direction: column;
      @media (min-width: 768px) {
        flex-direction: row;
        gap: 10px;
        .input {
          width: 100%;
        }
      }
    }

    .send {
      background-color: #7fd02c;
      padding: 4px 10px 7px 10px;
      border-radius: 6px;
      color: white;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.2s linear;
      @media (min-width: 768px) {
        width: fit-content;
      }
      &:hover {
        opacity: 90%;
      }
    }

    .sending {
      background-color: #c7c7c7;
      padding: 4px 10px 7px 10px;
      border-radius: 6px;
      color: gray;
      margin: 0;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.2s linear;
      @media (min-width: 768px) {
        width: fit-content;
      }
      &:hover {
        opacity: 90%;
      }
    }
  }
`;

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });

  const sendHandler = (e) => {
    if (name && email && text) {
        sendComment();
      setPressed(true);
    } else {
      toast.warn("تمام فیلد هارو پر کن", {
        position: "top-center",
      });
    }
  };

  if (data && pressed) {
    toast.success("کامنت ارسال شد و منتظر تایید می باشد", {
      position: "top-center",
    });
    setPressed(false);
  }

  return (
    <Comment>
      <form className="comment-form">
        <div className="name-email">
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
            <label>ایمیل</label>
            <input
              type="email"
              value={email}
              placeholder="ایمیل"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="input">
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
    </Comment>
  );
};

export default CommentForm;
