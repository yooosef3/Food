import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { ImRadioChecked } from "react-icons/im";
import { ImRadioUnchecked } from "react-icons/im";
import styled from "styled-components";

const Pay = styled.div`
  padding: 10px;
  @media (min-width: 992px) {
    display: flex;
  }
  .pay-method,
  .total {
    .checkout{
      background-color: #bf1010;
        color: #ffff;
        border: none;
        padding: 12px;
        font-size: 22px;
        margin-top: 20px;
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
    .checkoutFalse{
      background-color: #afaec8;
        color: #ffff;
        border: none;
        padding: 12px;
        font-size: 22px;
        margin-top: 20px;
        width: 170px;
        border-radius: 8px;
        font-weight: 800;
        a {
          color: #ffff;
        }
    }
    margin: 50px auto;
    h1 {
      text-align: center;
    }
  }
  .subtotal {
    margin: 0 auto;
    border: 1px solid #c2c2c2;
    width: 400px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 4px 12px;
    border: none;
    border-radius: 6px;
  }
  .method {
    margin: 0 auto;
    border: 1px solid #c2c2c2;
    padding: 15px;
    text-align: right;
    width: 370px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 4px 12px;
    border-radius: 6px;

    svg{
      font-size:24px;
    }
    
    div {
      display: flex;
      align-items: center;
      margin: 25px 0;
      gap: 10px;
      span{
        font-size:20px;
        font-weight:600;
      }
    }
  }
  .bank-pay {
    color: #a1a1a1;
    display:${props => props.method === 'bank' ? 'block' : 'none'};
  }
  
  .paypal-pay {
    color: #a1a1a1;
    display:${props => props.method === 'paypal' ? 'block' : 'none'};
  }
  
  .cheque-pay {
    color: #a1a1a1;
    display:${props => props.method === 'cheque' ? 'block' : 'none'};
  }

  .subtotal {
    border: 1px solid #c2c2c2;
    padding: 0;
    
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      border-bottom: 1px solid #c2c2c2;
      span {
        margin: 0 20px;
        &:nth-of-type(1) {
          font-weight: 600;
          font-size: 18px;
        }
        &:nth-of-type(2) {
          color: green;
          font-weight: 600;
        }
      }
      &:nth-of-type(3) {
        border-bottom: none;
      }
    }
  }

  .bank, .paypal, .cheque{
    cursor: pointer;
  }
`;

const CheckoutPay = () => {
  const [method, setMethod] = useState('bank');

  const bankHandler = () => {
    setMethod('bank')
  }

  const paypalHandler = () => {
    setMethod('paypal')
  }

  const chequeHandler = () => {
    setMethod('cheque')
  }
  
  const state = useSelector(state => state.cartState);
  const dispatch = useDispatch();

  const checkHandler = () => {
    dispatch({type:'CHECKOUT'});
    toast.success('!پرداخت با موفقیت انجام شد', {position: 'top-center'})
  }
  
  return (
    <Pay method = {method} state={state}>
      <div className="pay-method">
        <h1>روش پرداخت</h1>
        <section className="method">
          <div className="bank">
          {
            method === 'bank' ? <ImRadioChecked style={{color:'green'}} onClick={bankHandler}/> : <ImRadioUnchecked onClick={bankHandler}/>
          }
            <span>پرداخت مستقیم از بانک</span>
          </div>
          <span className="bank-pay">
            پرداخت خود را مستقیماً به حساب بانکی ما انجام دهید. لطفا از شناسه
            سفارش خود به عنوان مرجع پرداخت استفاده کنید. سفارش شما بلافاصله
            ارسال خواهد شد.
          </span>
          <div className="paypal">
          {
            method === 'paypal' ? <ImRadioChecked style={{color:'green'}} onClick={paypalHandler}/> : <ImRadioUnchecked onClick={paypalHandler}/>
          }
            <span> Paypal</span>
          </div>
          <span className="paypal-pay">
            {" "}
            پرداخت از طریق پی پال؛ اگر حساب پی پال ندارید می توانید با کارت
            اعتباری خود پرداخت کنید.
          </span>
          <div className="cheque">
          {
            method === 'cheque' ? <ImRadioChecked style={{color:'green'}} onClick={chequeHandler}/> : <ImRadioUnchecked onClick={chequeHandler}/>
          }
            <span> پرداخت چک</span>
          </div>
          <span className="cheque-pay">
            {" "}
            لطفاً یک چک به نام فروشگاه، خیابان فروشگاه، شهرک فروشگاه،
            ایالت/شهرستان فروشگاه، کدپستی فروشگاه ارسال کنید.
          </span>
        </section>
      </div>
      <div className="total">
        <h1>کل سبد خرید</h1>
        <section className="subtotal">
          <div>
            <span>کل</span>
            <span>${state.total}</span>
          </div>
          <div>
            <span>حمل دریایی</span>
            <span>رایگان</span>
          </div>
          <div>
            <span>هزینه کل</span>
            <span>${state.total}</span>
          </div>
        </section>
        {
        state.selectedItems.length ? 
        <button onClick={checkHandler} className="checkout"> پرداخت</button>:
        <button  className="checkoutFalse"> پرداخت</button>
        }
        <ToastContainer />
      </div>
    </Pay>
  );
};

export default CheckoutPay;
