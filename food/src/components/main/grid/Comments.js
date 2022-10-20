import React from "react";
import styled from "styled-components";
import user1 from "../../../assets/images/user-1-119x119.jpg";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 70px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items:center;
  }
  img {
    width: 70px;
    height: 70px;
    margin-bottom: -30px;
    @media (min-width: 768px) {
      width: 150px;
      height: 150px;
      margin-left:30px;
    }
  }
  .comment {
    padding: 0;
    p {
      color: #bdbdbd;
      text-align: right;
      margin-top: -35px;
      color: #707070;
      padding-bottom: 30px;
      @media (min-width: 768px){
        font-size:18px;
        width:80%;
      }
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      section {
        display: flex;
        align-items: center;
        h3 {
          margin-left: 15px;
          transition: all 0.2s linear;
          cursor: pointer;
          &:hover {
            color: red;
          }
        }
        span {
          padding: 0 15px;
          border-right: 1px solid #bdbdbd;
          color: #54ab02;
          font-weight: 800;
          transition: all 0.2s linear;
          cursor: pointer;
          &:hover {
            color: red;
          }
        }
      }
      small {
        color: #8b8b8b;
      }
    }
  }
`;

const Comments = () => {
  return (
    <Div>
      <img alt="comment" src={user1} />
      <section className="comment">
        <div>
          <section>
            <h3>Jane Doe</h3>
            <span>پاسخ</span>
          </section>
          <small>22 مهر 1401</small>
        </div>
        <p>
        من از فروشگاه شما خرید کردم و به جرات می توان گفت که بهترین هستید
        من از فروشگاه شما خرید کردم و به جرات می توان گفت که بهترین هستید
        من از فروشگاه شما خرید کردم و به جرات می توان گفت که بهترین هستید
        </p>
      </section>
    </Div>
  );
};

export default Comments;
