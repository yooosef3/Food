import PagesHeader from "../PagesHeader";
import React from "react";
import { RiSearchLine } from "react-icons/ri";
import ShopCard from "./ShopCard";
import meat from "../../../assets/images/1112951750.jpg";
import styled from "styled-components";
import vegetable from "../../../assets/images/1112951441.jpg";

const Store = styled.div`
  padding: 60px 15px;
  .search-store {
    position: relative;
    margin: 0 auto;
    width: 350px;
    input {
      border: 1px solid silver;
      border-radius: 5px;
      &:focus {
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        border: 1px solid #ffff;
      }
    }
    svg {
      position: absolute;
      left: 0;
      top: 8px;
      color: grey;
      cursor: pointer;
      transition: all 0.2s linear;
      font-size: 20px;
      &:hover {
        color: red;
      }
    }
  }
  .filter {
    margin: 50px 0;
    display: flex;
    gap: 15px;
    justify-content: center;
    .meat {
      position: relative;
      border-radius: 6px;
      overflow: hidden;
      cursor: pointer;
      width: 300px;
      img {
        width: 100%;
        transition: all 0.2s linear;
      }
      &:hover {
        img {
          transform: scale(1.05);
        }
        h3 {
          margin-bottom: 50px !important;
        }
      }
      .overlay {
        position: absolute;
        background-color: #00000063;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        h3 {
          color: #ffff;
          font-size: 22px;
          margin-bottom: 40px;
          transition: all 0.2s linear;
        }
      }
    }
    .vegetable {
      position: relative;
      border-radius: 6px;
      overflow: hidden;
      cursor: pointer;
      width: 300px;
      img {
        width: 100%;
        transition: all 0.2s linear;
      }
      &:hover {
        img {
          transform: scale(1.05);
        }
        h3 {
          margin-bottom: 50px !important;
        }
      }
      .overlay {
        position: absolute;
        background-color: #00000063;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        h3 {
          color: #ffff;
          font-size: 22px;
          margin-bottom: 40px;
          transition: all 0.2s linear;
        }
      }
    }
  }
  h1 {
    text-align: center;
  }
  .shop-products{
    max-width:1000px;
    margin:0 auto;
    display:flex;
    gap:20px;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    @media(min-width:768px){
        max-width:1200px;
    }
  }
`;
const Shop = () => {
  return (
    <div>
      <PagesHeader headline={"فروشگاه"} path={"shop"} page={"فروشگاه"} />
      <Store>
        <div className="search-store">
          <input type="text" />
          <RiSearchLine />
        </div>
        <div className="filter">
          <div className="meat">
            <img alt="filter" src={meat} />
            <div className="overlay">
              <h3>گوشت</h3>
            </div>
          </div>
          <div className="vegetable">
            <img alt="filter" src={vegetable} />
            <div className="overlay">
              <h3>سبزیجات</h3>
            </div>
          </div>
        </div>
        <h1>محصولات خاص</h1>
        <section className="shop-products">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </section>
      </Store>
    </div>
  );
};

export default Shop;
