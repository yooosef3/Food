import React, { useState } from "react";

import Loader from "../../shared/Loader";
import { PRODUCTS } from "../../../graphql/queries";
import PagesHeader from "../PagesHeader";
import Product from "../products/Product";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

const Gallery = styled.div`
  border-bottom: 1px solid #cecece;
  padding-bottom: 100px;
  .container {
    margin-bottom: 40px;
  }

  section {
    text-align: center;
    padding: 50px 0;
  }

  section p {
    color: #7fd02c;
    font-size: 20px;
    margin-bottom: 0;
  }

  section h1 {
    font-size: 26px;
    color: #000;
  }

  section .filter {
    display: flex;
    list-style: none;
    justify-content: center;
    border-bottom: 4px solid #b9b9b9;
    padding-bottom: 10px;
    width: 80%;
    margin: 0 auto;
    gap: 15px;
  }

  .filter .unselected-li {
    color: #b9b9b9;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s linear;
  }

  .container .filter .unselected-li:hover {
    border-bottom: 4px solid #7fd02c;
    margin-bottom: -14px;
  }

  .selectedFilter {
    border-bottom: 4px solid #7fd02c;
    margin-bottom: -14px;
  }

  .selectedFilter:nth-child(-n + 5) {
    color: #7fd02c !important;
  }
  .products {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 40px;
  }

  @media (min-width: 460px) {
    .filter .unselected-li {
      font-size: 18px;
    }
  }

  @media (min-width: 640px) {
    section .filter {
      justify-content: space-evenly;
    }
    .products {
      flex-direction: row;
      flex-wrap: wrap;
      width: 85%;
      justify-content: center;
    }
  }

  @media (min-width: 768px) {
    section p {
      font-size: 22px;
    }

    section h1 {
      font-size: 30px;
    }
  }

  @media (min-width: 992px) {
    section p {
      font-size: 24px;
    }

    section h1 {
      font-size: 36px;
    }
  }
`;
const GridGallery = () => {
  const [category, setCategory] = useState("all");

  const { loading, data, error } = useQuery(PRODUCTS);
  return (
    <Gallery>
      <PagesHeader page={"گالری"} headline={"گالری"} path={"gridgallery"} />
      <section>
        <h1>محصولات</h1>
        <ul className="filter">
          <li
            onClick={() => setCategory("all")}
            className={`${
              category === "all" ? "selectedFilter" : undefined
            } ${"unselected-li"}`}
          >
            همه
          </li>
          <li
            onClick={() => setCategory("vegetable")}
            className={`${
              category === "vegetable" ? "selectedFilter" : undefined
            } ${"unselected-li"}`}
          >
            سبزیجات
          </li>
          <li
            onClick={() => setCategory("fruit")}
            className={`${
              category === "fruit" ? "selectedFilter" : undefined
            } ${"unselected-li"}`}
          >
            میوه{" "}
          </li>
          <li
            onClick={() => setCategory("bread")}
            className={`${
              category === "bread" ? "selectedFilter" : undefined
            } ${"unselected-li"}`}
          >
            نان
          </li>
          <li
            onClick={() => setCategory("meat")}
            className={`${
              category === "meat" ? "selectedFilter" : undefined
            } ${"unselected-li"}`}
          >
            گوشت
          </li>
        </ul>
      </section>
      <div className="products">
        {loading ? (
          <Loader />
        ) : error ? (
          <h1
            style={{ color: "#e52029", textAlign: "center", fontSize: "18px" }}
          >
            یک خطای شبکه رخ داده است, بعدا امتحان کنید
          </h1>
        ) : category === "all" ? (
          data.products.map((product) => (
            <Product key={product.id} {...product} />
          ))
        ) : (
          data.products.map((product) => {
            if (product.type === category) {
              return <Product key={product.id} {...product} />;
            }
          })
        )}
      </div>
    </Gallery>
  );
};

export default GridGallery;
