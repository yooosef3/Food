import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/main/products/Product.module.css";

const Product = ({ image, name, price, discount, slug }) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateX(-50%)" }}
      whileInView={{ opacity: 1, transform: "translateX(0%)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={styles.container}
    >
      <img src={image.url} alt="product" />
      <Link to={`/singleproduct/${slug}`} className={styles.productName}>
        <h3>{name}</h3>
      </Link>
      <div>
        <span>${discount}</span>
        <span>${price}</span>
      </div>
      <div className={styles.button}>
        <Link to={`/singleproduct/${slug}`}>
          <FiSearch />
        </Link>
        <Link to={`/singleproduct/${slug}`}>
          <HiOutlineShoppingCart />
        </Link>
      </div>
    </motion.div>
  );
};

export default Product;