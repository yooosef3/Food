import Loader from '../../shared/Loader';
import { PRODUCTS } from '../../../graphql/queries';
import Product from '../products/Product';
import React from 'react';
import styles from '../../../styles/main/offer/OfferBoxProducts.module.css'
import { useQuery } from '@apollo/client';

const OfferBoxProducts = () => {
    const {loading, data, error} = useQuery(PRODUCTS);
    if(loading) return <Loader />
    if(error) return <h1 style={{color: '#e52029',textAlign:'center', fontSize:'18px'}}>یک خطای شبکه رخ داده است, بعدا امتحان کنید</h1>

    return (
        <div className={styles.OfferBoxProducts}>
            {data.products.filter(product => product.type == 'meat').map(product => <Product key={product.id} {...product}/>)}
        </div>
    );
};

export default OfferBoxProducts;