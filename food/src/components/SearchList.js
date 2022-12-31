import Product from "./main/products/Product";
import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Search = styled.div`
  padding: 150px 15px 40px 15px;
  border-bottom: 1px solid silver;
  h2{
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid gray;
  }
  .list {
    display: flex;
    gap: 25px;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;
const SearchList = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <Search>
      <h2>نتایج جستجو</h2>
      <div className="list">
        {data.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </Search>
  );
};

export default SearchList;
