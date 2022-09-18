import { PRODUCTS } from "../../../graphql/queries";
import Product from "./Product";
import React from "react";
import styles from "../../../styles/main/products/Products.module.css";
import { useQuery } from "@apollo/client";

// import loading from "../../../assets/images/b6e0b072897469.5bf6e79950d23.gif";



const Products = () => {
  const { loading, data, error } = useQuery(PRODUCTS);
    if(loading) return <h1>loading ...</h1>
  
  return (
    <div className={styles.container}>
      <section>
        <p>آخرین محصولات</p>
        <h1>محصولات جدید</h1>
        <ul>
          <li>همه</li>
          <li>سبزیجات</li>
          <li>میوه </li>
          <li>نان</li>
        </ul>
      </section>
      <div className={styles.products}>
        {data.products.map(product => <Product key={product.id} {...product}/>)}
      </div>
    </div>
  );
};

export default Products;
