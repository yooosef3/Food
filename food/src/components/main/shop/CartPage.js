import React, { useContext } from "react";

import Cart from "./Cart";
import { CartContext } from "../../context/CartContextProvider";
import PagesHeader from "../PagesHeader";
import styled from "styled-components";

const Div = styled.div`
  border-bottom: 1px solid #d4d4d4;
  .table {
    overflow-x: auto;
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

  .coupon-pay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 30px;
    gap: 40px;
    @media (min-width: 768px) {
      align-items: start;
    }
    @media (min-width: 992px) {
      flex-direction: row;
      gap: 80px;
    }
    .coupon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      @media (min-width: 640px) {
        flex-direction: row;
      }
      input {
        border: 1px solid #8b8b8b;
        width: 150px;
        height: 30px;
        padding: 13px;
        border-radius: 8px;
        text-align: center;
        outline: 0;
        color: #464646;
        &::placeholder {
          font-size: 22px;
          color: #464646;
        }
        &:focus{
          border-color: green;
        }
      }
      span {
        background-color: #47a316;
        color: #ffff;
        padding: 14px;
        font-size: 20px;
        border-radius: 8px;
        width: 150px;
        text-align: center;
        transition: all 0.2s linear;
        cursor: pointer;
        &:hover {
          background-color: #2f6b0f;
        }
      }
    }

    .pay {
      display: flex;
      gap: 60px;
      p {
        color: #767676;
        text-align: center;
        font-size: 22px;
        margin: 10px 0;
        span {
          color: #1a5e0d;
        }
      }

      button {
        background-color: #bf1010;
        color: #ffff;
        border: none;
        padding: 12px;
        font-size: 22px;
        width: 170px;
        border-radius: 8px;
        font-weight: 800;
        transition: all 0.2s linear;
        cursor: pointer;
        &:hover {
          background-color: #970e0e;
        }
      }
    }
  }
`;
const CartPage = () => {
  const {state} = useContext(CartContext);
  return (
    <Div>
      <PagesHeader headline={"سبد خرید"} path={"cart"} page={" فروشگاه"} />
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
          {
            state.selectedItems.map(item => 
            <Cart key={item.id} data={item}/>
            )
          }
        </table>
      </div>
      <div className="coupon-pay">
        <div className="coupon">
          <input placeholder="کد تخفیف" />
          <span>اعمال</span>
        </div>
        <div className="pay">
          <p>
            قیمت کل: <span>$46</span>
          </p>
          <button>پرداخت</button>
        </div>
      </div>
    </Div>
  );
};

export default CartPage;
