import Cart from "./Cart";
import React from "react";
import styled from "styled-components";

const You = styled.div`
  .table {
    overflow-x: auto;
  }
  h1 {
    color: #292929;
    text-align: center;
    @media(min-width: 1400px){
    text-align: right;
    margin-right:200px;
    }
  }
  table {
    width: 1120px;
    border-collapse: collapse;
    margin: 20px auto;
    margin-top: 100px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    border-radius: 6px;
    thead {
      background-color: #61897d8b;
      tr {
        text-align: right;
      }
    }
  }
  th {
    color: #ffff;
    padding: 15px 0 15px;
    font-size: 22px;
    &:first-of-type {
      padding-right: 25px;
    }
  }
`;
const YourCart = () => {
  return (
    <You>
      <h1>سبد خرید شما</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>نام محصول</th>
              <th>قیمت</th>
              <th>تعداد</th>
              <th> قیمت کل</th>
            </tr>
          </thead>
          <Cart />
          <Cart />
          <Cart />
        </table>
      </div>
    </You>
  );
};

export default YourCart;
