import React, { useState } from "react";

import { PRODUCTS } from "../../../graphql/queries";
import Product from "./Product";
import styles from "../../../styles/main/products/Products.module.css";
import { useQuery } from "@apollo/client";

const Products = () => {
  const [category, setCategory] = useState({
    all: true,
    vegetable: false,
    fruit: false,
    bread: false,
  });

  const { loading, data, error } = useQuery(PRODUCTS);
  console.log(data);
  if (loading) return <h1>loading ...</h1>;
  if (error) return <h1>some error occured ...</h1>;

  return (
    <div className={styles.container}>
      <section>
        <p>آخرین محصولات</p>
        <h1>محصولات جدید</h1>
        <ul className={styles.filter}>
          <li
            onClick={() => setCategory({ all: true })}
            className={`${category.all ? styles.selectedFilter : undefined} ${
              styles.li
            }`}
          >
            همه
          </li>
          <li
            onClick={() => setCategory({ vegetable: true })}
            className={`${
              category.vegetable ? styles.selectedFilter : undefined
            } ${styles.li}`}
          >
            سبزیجات
          </li>
          <li
            onClick={() => setCategory({ fruit: true })}
            className={`${category.fruit ? styles.selectedFilter : undefined} ${
              styles.li
            }`}
          >
            میوه{" "}
          </li>
          <li
            onClick={() => setCategory({ bread: true })}
            className={`${category.bread ? styles.selectedFilter : undefined} ${
              styles.li
            }`}
          >
            نان
          </li>
        </ul>
      </section>
      <div className={styles.products}>
        {data.products.some(
          (product) =>
            (product.type === category || category.all) && <Product />
        )}
      </div>
    </div>
  );
};

export default Products;
