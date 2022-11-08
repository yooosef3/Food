import React, { useState } from "react";

import { Link } from "react-router-dom";
import Loader from "../../../shared/Loader";
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
      font-size: 22px;
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
  width: 350px;
  margin: 0 auto;
  margin-top: 30px;
}

.filter-search svg {
  position: absolute;
  left: 0px;
  top: 10px;
  font-size: 26px;
  color: #767676;
  cursor: pointer;
  transition: all 0.2s linear;
}

.filter-search svg:hover {
  color: #ff0000;
}

.filter-search input {
  border-radius: 6px !important;
  background-color: #f0f0f0;
  color: #292929;
  padding: 15px 5px;
  border: 1px solid #767676;
  width: 100%;
  outline: 0;
  transition: all 0.2s linear;
}

.filter-search input:focus {
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  border: 0;
}

.filter-search input::placeholder {
  font-size: 22px;
}


  h2 {
    margin-top: 50px;
    color: #373737;
    border-bottom: 1px solid #9e9e9e;
    padding-bottom: 20px;
  }

  .popular {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    @media (min-width: 1200px) {
      flex-direction: column;
      align-items: start;
      gap: 30px;
    }
    img {
      width: 90px;
      height: 70px;
    }

    h4 {
      font-weight: 600;
      margin: 10px 0;
      cursor: pointer;
      transition: all 0.2s linear;
      &:hover {
        color: red;
      }
    }

    span {
      font-weight: 500;
      color: #7fd02c;
    }

    .product {
      @media (min-width: 1200px) {
        display: flex;
        gap: 20px;
      }
    }

    a{
      color: #373737;
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
          قیمت : <span>0 تا ${price}</span>
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
              <Link to='/singleproduct/bananas'>
                <h4>موز</h4>
              </Link>
              <span>$23.00</span>
            </div>
          </div>
          <div className="product">
            <img alt="popular" src={popular2} />
            <div>
              <Link to='/singleproduct/bagels'>
                <h4>نان شیرینی</h4>
              </Link>
              <span>$10.00</span>
            </div>
          </div>
          <div className="product">
            <img alt="popular" src={popular3} />
            <div>
              <Link to='/singleproduct/bread'>
                <h4>نان</h4>
              </Link>
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
