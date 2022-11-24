import { Link } from "react-router-dom";
import PagesHeader from "../../PagesHeader";
import React from "react";
import ShopSidebar from "./ShopSidebar";
import styled from "styled-components";

const Shop = styled.div`
  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    @media (min-width: 640px) {
      flex-direction: row;
      justify-content: space-evenly;
    }
    p {
      color: #575757;
      font-size: 18px;
    }
    select {
      height: 30px;
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      padding-right: 15px;
      border-radius: 6px;
      border: 1px solid #ffff;
      font-size: 18px;
      outline: none;
      color: #575757;
    }
  }
  .grid-shop {
    margin: 50px auto;
    text-align: center;
    padding-bottom: 50px;
    border-bottom: 1px solid #b5b5b5;
  }

  .grid-shop a {
    margin: 0 8px;
    color: #292929;
    font-size: 24px;
    font-weight: 500;
    transition: all 0.2s linear;
  }

  .grid-shop a:first-of-type {
    color: #ff0000;
  }

  .grid-shop a:hover {
    color: #ff0000;
  }
`;
const GridShop = () => {
  return (
    <Shop>
      <PagesHeader headline={"قفسه"} page={"فروشگاه"} path={"gridshop"} />
      <div>
        <section className="result">
          <p>نمایش 1-10 از 28 نتیجه</p>
          <select>
            <option> براساس ارزان ترین</option>
            <option> براساس گران ترین</option>
          </select>
        </section>
        <ShopSidebar />
        <ul className="grid-shop">
          <Link to="#">1</Link>
          <Link to="#">2</Link>
          <Link to="#">3</Link>
        </ul>
      </div>
    </Shop>
  );
};

export default GridShop;
