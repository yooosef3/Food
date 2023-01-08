import { useDispatch, useSelector } from "react-redux";

import Cart from "./Cart";
import { Link } from "react-router-dom";
import PagesHeader from "../PagesHeader";
import React from "react";
import { clear } from "../../redux/cart/cartActions";
import styled from "styled-components";

const Div = styled.div`
  border-bottom: 1px solid #d4d4d4;
  .table {
    overflow-x: auto;
    width: 90%;
    margin: 0 auto;
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
        &:focus {
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
      flex-direction: column;
      gap: 50px;
      @media (min-width: 640px) {
        flex-direction: row;
        align-items: center;
      }
      p {
        color: #767676;
        text-align: center;
        font-size: 22px;
        font-weight: 600;
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
        a {
          color: #ffff;
        }
      }

      .clear {
        background-color: #767676;
        text-align: center;
        color: #ffff;
        padding: 15px;
        border-radius: 8px;
        transition: all 0.2s linear;
        cursor: pointer;
        &:hover {
          background-color: #464646;
        }
      }
    }
  }
  .empty{
    color: #bf1010;
    font-weight: 600;
    font-size: 20px;
    margin-right: 25px;
  }
`;
const CartPage = () => {
  const state = useSelector(state => state.cartState);
  const dispatch = useDispatch();
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
          {!state.selectedItems.length ? (
            <p className="empty">سبد خرید شما خالی است!</p>
          ) : (
            state.selectedItems.map((item) => (
              <Cart key={item.id} data={item} />
            ))
          )}
        </table>
      </div>
      <div className="coupon-pay">
        <div className="coupon">
          <input placeholder="کد تخفیف" />
          <span>اعمال</span>
        </div>
        <div className="pay">
          <p>
            قیمت کل: <span>{state.total}$</span>
          </p>
          <Link to="/checkout">
            <button>صفحه پرداخت</button>
          </Link>
          <h3 className="clear" onClick={() => dispatch(clear())}>
            حذف محصولات
          </h3>
        </div>
      </div>
    </Div>
  );
};

export default CartPage;
