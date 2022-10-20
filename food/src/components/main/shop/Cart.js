import { Link } from "react-router-dom";
import React from "react";
import prod from "../../../assets/images/product-mini-4-146x132.png";
import styles from "../../../styles/main/Cart.module.scss";

const Cart = () => {
  return (
    <tbody className={styles.cart}>
      <tr>
        <td className={styles.cartImage}>
          <Link to="/singleproduct">
            <img alt="product" src={prod} />
          </Link>
          <Link to="/singleproduct">
            <h4> پرتقال</h4>
          </Link>
        </td>
        <td className={styles.price}>
          <h5>$23.00 </h5>
        </td>
        <td className={styles.quantity}>
          <div>
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </div>
        </td>
        <td className={styles.total}>
          <span>$46.00</span>
        </td>
      </tr>
    </tbody>
  );
};

export default Cart;
