import Cart from "./Cart";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const You = styled.div`
  .table {
    overflow-x: auto;
    width: 95%;
    margin: 0 auto;
  }
  h1 {
    color: #292929;
    text-align: center;
    @media (min-width: 1400px) {
      text-align: right;
      margin-right: 200px;
    }
  }
  table {
    width: 1120px;
    border-collapse: collapse;
    margin: 20px auto;
    margin-top: 20px;
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
  .success {
    background-color: #b0e1b0;
    color: green;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    width: 400px;
    margin: 30px ;
    border-radius: 8px;
    padding: 6px 0 10px 0;
  }

  .empty {
    background-color: #ecaaaa;
    color: #d71515;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    width: 400px;
    margin: 30px ;
    border-radius: 8px;
    padding: 6px 0 10px 0;
  }
`;
const YourCart = () => {
  const state = useSelector(state => state.cartState) 
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
          {state.checkout ? (
            <p className="success">پرداخت با موفقیت انجام شد!</p>
          ) : !state.checkout && !state.selectedItems.length ? (
            <p className="empty">سبد خرید شما خالی است!</p>
          ) : state.checkout && !state.selectedItems.length ? (
            <p className="empty">سبد خرید شما خالی است!</p>
          ) : (
            state.selectedItems.map((item) => (
              <Cart key={item.id} data={item} />
            ))
          )}
        </table>
      </div>
    </You>
  );
};

export default YourCart;
