import React, { useContext } from "react";

import Cart from "./Cart";
import { CartContext } from "../../context/CartContextProvider";
import styled from "styled-components";

const You = styled.div`
  .table {
    overflow-x: auto;
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
    width: 85%;
    margin: 30px auto;
    border-radius: 8px;
    padding: 2px 0 4px 0;
  }

  .empty {
    background-color: #ecaaaa;
    color: #d71515;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    width: 85%;
    margin: 30px auto;
    border-radius: 8px;
    padding: 2px 0 4px 0;
  }
`;
const YourCart = () => {
  const { state } = useContext(CartContext);
  return (
    <You>
      <h1>سبد خرید شما</h1>
      {state.checkout ? (
        <p className="success">پرداخت با موفقیت انجام شد!</p>
      ) : !state.checkout && !state.selectedItems.length ? (
        <p className="empty">سبد خرید شما خالی است!</p>
      ) : (
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
            {state.selectedItems.map((item) => (
              <Cart key={item.id} data={item} />
            ))}
          </table>
        </div>
      )}
    </You>
  );
};

export default YourCart;
