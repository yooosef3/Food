import React, { useContext } from "react";

import { CartContext } from "../../context/CartContextProvider";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../../../styles/main/Cart.module.scss";

const Cart = (props) => {
  const {name, price, quantity, imageAll, slug} = props.data;
  const {dispatch} = useContext(CartContext);
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
            <span className={styles.trashHolder}><FaTrashAlt className={styles.trash} onClick={()=> dispatch({type: 'REMOVE_ITEM', payload: props.data})}/></span>:
            <span className={styles.decrease} onClick={()=> dispatch({type: 'DECREASE', payload: props.data})}>-</span>
          }
            <span>{quantity}</span>
            <span className={styles.increase} onClick={()=> dispatch({type: 'INCREASE', payload: props.data})}>+</span>
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
