import { decrease, increase, removeItem } from "../../redux/cart/cartActions";

import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import styles from "../../../styles/main/Cart.module.css";
import { useDispatch } from "react-redux";

const Cart = (props) => {
  const {name, price, quantity, imageAll, slug} = props.data;
  const dispatch = useDispatch();
  return (
    <tbody className={styles.cart}>
      <tr>
        <td className={styles.cartImage}>
          <Link to={`/singleproduct/${slug}`}>
            <img alt="product" src={imageAll[0].url} />
          </Link>
          <Link to={`/singleproduct/${slug}`}>
            <h4>{name}</h4>
          </Link>
        </td>
        <td className={styles.price}>
          <h5>{price} $</h5>
        </td>
        <td className={styles.quantity}>
          <div>
          {
            quantity === 1 ? 
            <span className={styles.trashHolder}><FaTrashAlt className={styles.trash} onClick={()=> dispatch(removeItem(props.data))}/></span>:
            <span className={styles.decrease} onClick={()=> dispatch(decrease(props.data))}>-</span>
          }
            <span>{quantity}</span>
            <span className={styles.increase} onClick={()=> dispatch(increase(props.data))}>+</span>
          </div>
        </td>
        <td className={styles.total}>
          <span>{quantity*price} $</span>
        </td>
      </tr>
    </tbody>
  );
};

export default Cart;
