import React, { useState } from "react";

import Loader from "../../shared/Loader";
import { PRODUCTS } from "../../../graphql/queries";
import PagesHeader from "../PagesHeader";
import Product from "../products/Product";
import meat from "../../../assets/images/1112951750.jpg";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import vegetable from "../../../assets/images/1112951441.jpg";

const Store = styled.div`
  padding: 60px 15px;
  border-bottom: 1px solid #a9a9a9;

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
  .shop-products {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media (min-width: 768px) {
      max-width: 1200px;
    }
  }
`;
const Shop = () => {
  const [category, setCategory] = useState("meat");
  const { loading, data, error } = useQuery(PRODUCTS);

  return (
    <div>
      <PagesHeader headline={"فروشگاه"} path={"shop"} page={"فروشگاه"} />
      <Store>
        <div className="filter">
          <div className="meat" onClick={() => setCategory("meat")}>
            <img alt="filter" src={meat} />
            <div className="overlay">
              <h3>گوشت</h3>
            </div>
          </div>
          <div className="vegetable" onClick={() => setCategory("vegetable")}>
            <img alt="filter" src={vegetable} />
            <div className="overlay">
              <h3>سبزیجات</h3>
            </div>
          </div>
        </div>
        <h1>محصولات خاص</h1>
        <h2 style={{ textAlign: "center", color: "brown" }}>
          {category === "meat" ? "گوشت" : "سبزیجات"}
        </h2>
        <section className="shop-products">
          {loading ? (
            <Loader />
          ) : error ? (
            <h1
              style={{
                color: "#e52029",
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              یک خطای شبکه رخ داده است, بعدا امتحان کنید
            </h1>
          ) : (
            data.products.map((product) => {
              if (product.type === category) {
                return <Product key={product.id} {...product} />;
              }
            })
          )}
        </section>
      </Store>
    </div>
  );
};

export default Shop;
