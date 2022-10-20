import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import React from "react";
import pepper from "../../../assets/images/grid-gallery-5-370x315.jpg";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  position: relative;
  @media (min-width: 992px) {
    &:hover .gallery-info {
      display: block;
      position: absolute;
      background-color: #2e2e2e4b;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      top: 5%;
      left: 5%;
      width: 90%;
      height: 90%;
      margin: 0 auto;
      h3 {
        color: #ffff;
      }
      p {
        color: #88ff00;
      }
    }
  }
  .gallery-info {
    padding-bottom: 15px;
    transition: all 0.2s linear;

    @media (min-width: 992px) {
      display: none;
      padding-bottom: 0;
    }
    h3 {
      color: #313131;
      transition: all 0.2s linear;
      margin: 6px 0;
      &:hover {
        color: #e52029;
      }
    }
    p {
      color: #7fd02c;
      text-align: center;
      margin-bottom: 25px;
    }
    .cart-icons {
      svg {
        margin: 0 5px;
        border-radius: 50%;
        padding: 10px;
        color: #ffff;
        font-size: 28px;
        cursor: pointer;
        transition: all 0.2s linear;
        &:nth-of-type(1) {
          background-color: #c0c0c0;
          &:hover {
            background-color: #7fd02c;
          }
        }
      }
      .cart svg {
        background-color: #7fd02c;
        &:hover {
          background-color: #e52029;
        }
      }
    }
  }
`;
const GalleryCard = () => {
  return (
    <Card>
      <img alt="gallery" src={pepper} />
      <div className="gallery-info">
        <Link to="#">
          <h3>Bell Peppers</h3>
        </Link>
        <p>$14.99</p>
        <div className="cart-icons">
          <FiSearch />
          <Link to="#" className="cart">
            <HiOutlineShoppingCart />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default GalleryCard;
