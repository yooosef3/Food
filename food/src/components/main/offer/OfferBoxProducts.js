import OfferBox from './OfferBox';
import React from 'react';
import styles from '../../../styles/main/offer/OfferBoxProducts.module.css'

const OfferBoxProducts = () => {
    return (
        <div className={styles.OfferBoxProducts}>
            <OfferBox />
            <OfferBox />
            <OfferBox />
        </div>
    );
};

export default OfferBoxProducts;