import React from "react";
import styled from "styled-components";

const Address = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 15px 70px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 55px;
  }
  .billing,
  .delivery {
    margin-top: 40px;
  }
  h2 {
    color: #292929;
    text-align: center;
    margin-bottom: 40px;
    @media(min-width: 992px){
    text-align: right;
    }
  }
  form {
    .name,
    .phone-mail {
      display: flex;
      flex-direction: column;
      @media (min-width: 768px) {
        gap: 25px;
        flex-direction: row;
        justify-content: space-between;
      }
    }
    input {
      border-bottom: 1px solid #c2c2c2;
      height: 40px;
      color:#797979;
      margin-bottom:30px;
      &::placeholder {
        color: #797979;
        font-size: 20px;
      }
    }

    .bill-ship {
      display: flex;
      gap: 25px;
      margin: 40px 0;
      padding: 0;
      width: fit-content;
      input {
        height: 20px;
        width: 20px;
      }
    }
  }
`;
const CheckoutAddress = () => {
  return (
    <Address>
      <div className="billing">
        <h2>آدرس تسویه حساب</h2>
        <form>
          <div className="name">
            <input type="text" placeholder="نام" />
            <input type="text" placeholder="نام خانوادگی" />
          </div>
          <input type="text" placeholder="شرکت" />
          <input type="text" placeholder="آدرس" />
          <input type="text" placeholder="شهر" />
          <div className="phone-mail">
            <input type="text" placeholder="ایمیل" />
            <input type="text" placeholder="تلفن" />
          </div>
          <div className="bill-ship">
            <input type="checkbox" />
            <label>آدرس تسویه حساب با آدرس پرداخت من یکسان است</label>
          </div>
        </form>
      </div>
      <div className="delivery">
        <h2>آدرس تحویل</h2>
        <form>
          <div className="name">
            <input type="text" placeholder="نام" />
            <input type="text" placeholder="نام خانوادگی" />
          </div>
          <input type="text" placeholder="شرکت" />
          <input type="text" placeholder="آدرس" />
          <input type="text" placeholder="شهر" />
          <div className="phone-mail">
            <input type="text" placeholder="ایمیل" />
            <input type="text" placeholder="تلفن" />
          </div>
        </form>
      </div>
    </Address>
  );
};

export default CheckoutAddress;
