import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import React from 'react';
import styles from '../../../styles/main/products/Product.module.css'

const Product = ({image, name, price, discount, type}) => {
    return (
        <div className={styles.container}>
            <img src={image.url} alt='product'/>
            <h3>{name}</h3>
            <div>
                <span>${discount}</span>
                <span>${price}</span>
            </div>
            <div className={styles.button}>
                <Link to='#'>
                    <FiSearch />
                </Link>
                <Link to='/shopCart'>
                    <HiOutlineShoppingCart />
                </Link>
            </div>
        </div>
    );
};

export default Product;