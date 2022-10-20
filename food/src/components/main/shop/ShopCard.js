import { Link } from "react-router-dom";
import React from "react";
import orange from "../../../assets/images/1112882761.jpg";
import styled from "styled-components";

const Card = styled.div`
    
    background-color:#f5f5f5;
    padding-bottom:15px;
    border-radius:6px;
    width:190px;
    overflow:hidden;
    cursor:pointer;
    transition: all 0.2s linear;

    &:hover{
        background-color:#ffff;
        box-shadow:rgba(0, 0, 0, 0.1) 0 4px 12px;
    }
    @media(min-width:640px){
        width:220px;
    }

    @media(min-width:768px){
        width:250px;
    }
  img {
    width: 100%;
  }

  a {
    width: fit-content;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    &:hover {
      h3 {
        color: red;
      }
    }
    h3 {
      transition: all 0.2s linear;
      color: #252525;
      font-size:16px;
    }
  }
  p{
    color:#54ab02;
    text-align:center;
    font-weight:700;
    font-size:16px;
  }
`;
const ShopCard = () => {
  return (
    <Card>
      <img alt="shop" src={orange} />
      <Link to="#">
        <h3>ORANGE MUSTARD</h3>
      </Link>
      <p>$30.00</p>
    </Card>
  );
};

export default ShopCard;
