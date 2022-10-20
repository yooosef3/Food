import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import React from "react";
import styled from "styled-components";
import user1 from "../../../assets/images/user-1-119x119.jpg";

const Reviews = styled.div`
    display: flex;
  flex-direction: column;
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
  .review {
    padding: 0;

    .stars{
        svg{
            color:#ffcc00;
        }
    }
    p {
      color: #bdbdbd;
      text-align: right;
      margin-top: -35px;
      font-size:16px;
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
`
const Review = () => {
  return (
    <Reviews>
      <img alt="review" src={user1} />
      <section className="review">
        <div>
          <section>
            <h3>Jane Doe</h3>
            <div className="stars">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <BsStarHalf />
              </div>
          </section>
          <small>22 مهر 1401</small>
        </div>
        <p>
          من از فروشگاه شما خرید کردم و به جرات می توان گفت که بهترین هستید من
          از فروشگاه شما خرید کردم و به جرات می توان گفت که بهترین هستید من از
          فروشگاه شما خرید کردم و به جرات می توان گفت که بهترین هستید
        </p>
      </section>
    </Reviews>
  );
};

export default Review;
