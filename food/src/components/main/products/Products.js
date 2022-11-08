import React, { useContext } from "react";

import { CategoryContext } from "../../../App";
import ProductPack from "./ProductPack";
import styles from "../../../styles/main/products/Products.module.css";

const Products = () => {

  const {category, setCategory} = useContext(CategoryContext);

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
          <li
            onClick={() => setCategory('meat')}
            className={`${category === 'meat' ? styles.selectedFilter : undefined} ${
              styles.li
            }`}
          >
            گوشت
          </li>
        </ul>
      </section>
      <ProductPack category={{category, setCategory}}/>
    </div>
  );
};

export default Products;
