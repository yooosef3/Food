import React, { useContext } from "react";

import { CategoryContext } from "../../../App";
import Loader from "../../shared/Loader";
import { PRODUCTS } from "../../../graphql/queries";
import Product from "./Product";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

const Prd = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 40px;

  @media (min-width: 640px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 85%;
    justify-content: center;
  }
`;
const ProductPack = () => {
  const { loading, data, error } = useQuery(PRODUCTS);
  
  const { category } = useContext(CategoryContext);
  return (
    <Prd>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1 style={{ color: "#e52029", textAlign: "center", fontSize: "18px" }}>
          یک خطای شبکه رخ داده است, بعدا امتحان کنید
        </h1>
      ) : category === "all" ? (
        data.products.map((product) => (
          <Product key={product.id} {...product} />
        ))
      ) : (
        data.products.map((product) => {
          if (product.type === category) {
            return <Product key={product.id} {...product} />;
          }
        })
      )}
    </Prd>
  );
};

export default ProductPack;
