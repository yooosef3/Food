import React, { useState } from "react";

import Loader from "../../../Loader";
import { PRODUCTS } from "../../../../graphql/queries";
import Product from "../../products/Product";
import { RiSearchLine } from "react-icons/ri";
import popular1 from "../../../../assets/images/product-1-220x160.png";
import popular2 from "../../../../assets/images/product-8-210x133.png";
import popular3 from "../../../../assets/images/product-4-204x125.png";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: start;
    justify-content: space-evenly;
  }

  section {
    h1 {
      color: #646464a9;
      font-size: 18px;
    }

    h3 {
      border-bottom: 1px solid #646464a9;
      padding-bottom: 20px;
      color: #373737;
      margin-bottom: 60px;
    }

    span {
      color: green;
    }
  }

  .category-filter {
    margin-top: 80px;
    h4 {
      border-bottom: 1px solid #9e9e9e;
      padding-bottom: 20px;
      font-size:22px;
    }
    .checkbox {
      display: flex;
      align-items: center;
      gap: 10px;

      input {
        margin: 0;
        width: fit-content;
      }
    }
  }

  .category {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    span {
      color: #676767;
    }
  }

  .products {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 31px;
    width: 60%;
  }

  .filter-search {
    position: relative;
    margin-top: 40px;
    input {
      background-color: #e8e8e8;
      border-radius: 6px;
      &::placeholder {
        font-size: 18px;
        color: #595959;
      }
    }

    svg {
      position: absolute;
      top: 10px;
      left: 0;
      cursor: pointer;
      color: #595959;
      transition: all 0.2s linear;
      &:hover {
        color: red;
      }
    }
  }

    h2{
      margin-top:50px;
      color:#373737;
      border-bottom: 1px solid #9e9e9e;
      padding-bottom: 20px;
    }
    
  .popular {
    padding:30px 0;
    display: flex;
    justify-content: space-between;
    @media(min-width:1200px){
      flex-direction:column;
      align-items:start;
      gap:30px;
    }
    img {
      width: 90px;
      height:70px;
    }

    h4{
      font-weight:400;
      margin:10px 0;
      cursor:pointer;
      transition:all .2s linear;
      &:hover{
        color:red;
      }
    }

    span{
      font-weight:500;
      color:#7fd02c;
    }

    .product{
      @media(min-width:1200px){
        display:flex;
        gap:20px;
      }
    }
  }
`;
const ShopSidebar = () => {
  const [price, setPrice] = useState(50);
  const { loading, data, error } = useQuery(PRODUCTS);

  console.log(data);

  const handleInput = (e) => {
    setPrice(e.target.value);
  };

  return (
    <Filter>
      <section>
        <h3>فیلتر براساس قیمت</h3>
        <input type="range" onInput={handleInput} />
        <h1>
          تا قیمت : <span>${price}</span>{" "}
        </h1>
        <div className="category-filter">
          <h4>گالری</h4>
          <div className="category">
            <div className="checkbox">
              <input type="checkbox" />
              <label>همه</label>
            </div>
            <span>(23)</span>
          </div>
          <div className="category">
            <div className="checkbox">
              <input type="checkbox" />
              <label>سبزیجات</label>
            </div>
            <span>(14)</span>
          </div>
          <div className="category">
            <div className="checkbox">
              <input type="checkbox" />
              <label>میوه</label>
            </div>
            <span>(9)</span>
          </div>
          <div className="category">
            <div className="checkbox">
              <input type="checkbox" />
              <label>نان</label>
            </div>
            <span>(12)</span>
          </div>
        </div>
        <div className="filter-search">
          <input type="text" placeholder="جستجو ..." />
          <RiSearchLine />
        </div>
          <h2>محصولات محبوب</h2>
        <div className="popular">
          <div className="product">
            <img alt="popular" src={popular1} />
            <div>
              <h4>BANANAS</h4>
              <span>$23.00</span>
            </div>
          </div>
          <div className="product">
            <img alt="popular" src={popular2} />
            <div>
              <h4>BAGELS</h4>
              <span>$10.00</span>
            </div>
          </div>
          <div className="product">
            <img alt="popular" src={popular3} />
            <div>
              <h4>BREAD</h4>
              <span>$11.00</span>
            </div>
          </div>
        </div>
      </section>
      <div className="products">
        {loading ? (
          <Loader />
        ) : error ? (
          <h1 style={{ color: "#e52029", textAlign: "center" }}>
            یک خطای شبکه رخ داده است, بعدا امتحان کنید
          </h1>
        ) : (
          data.products
            .filter((product) => {
              return product.price < parseInt(price, 10);
            })
            .map((product) => {
              return <Product key={product.id} {...product} />;
            })
        )}
      </div>
    </Filter>
  );
};

export default ShopSidebar;
