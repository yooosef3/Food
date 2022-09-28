import React, { useState } from "react";

import Loader from "../../Loader";
import { PRODUCTS } from "../../../graphql/queries";
import Product from "./Product";
import styles from "../../../styles/main/products/Products.module.css";
import { useQuery } from "@apollo/client";

const Products = () => {
  const [category, setCategory] = useState('all');

  const { loading, data, error } = useQuery(PRODUCTS);
  

  return (
    <div className={styles.container}>
      <section>
        <p>آخرین محصولات</p>
        <h1>محصولات جدید</h1>
        <ul className={styles.filter}>
          <li
            onClick={() => setCategory('all')}
            className={`${category === 'all' ? styles.selectedFilter : undefined} ${
              styles.li
            }`}
          >
            همه
          </li>
          <li
            onClick={() => setCategory('vegetable')}
            className={`${
              category === 'vegetable' ? styles.selectedFilter : undefined
            } ${styles.li}`}
          >
            سبزیجات
          </li>
          <li
            onClick={() => setCategory('fruit')}
            className={`${category === 'fruit' ? styles.selectedFilter : undefined} ${
              styles.li
            }`}
          >
            میوه{" "}
          </li>
          <li
            onClick={() => setCategory('bread')}
            className={`${category === 'bread' ? styles.selectedFilter : undefined} ${
              styles.li
            }`}
          >
            نان
          </li>
        </ul>
      </section>
      <div className={styles.products}>
       {
        (loading) ? <Loader /> :
        (error) ? <h1 style={{color: '#e52029',textAlign:'center'}}>یک خطای شبکه رخ داده است, بعدا امتحان کنید</h1>:
        category === 'all' ?
            data.products.map(product => <Product key={product.id} {...product}/>) :
            data.products.map(
              product =>  {if (product.type === category) {return <Product key={product.id} {...product}/>}}
       )}
      </div>
    </div>
  );
};

export default Products;
