import React from 'react';
import styles from '../../../styles/main/offer/OfferNewsLetter.module.css'

const OfferNewsLetter = () => {
    return (
        <div className={styles.OfferNewsLetter}>
            <div className={styles.newsletterInfo}>
                <div>
                    <h1>با ما</h1>
                    <h2>در تماس باشید</h2>
                </div>
                <p>در خبرنامه ما عضو شوید</p>
            </div>
            <div className={styles.newsletterSub}>
                <input type='email' placeholder='ایمیل خود را وارد کنید'/>
                <button type='submit'>عضویت</button>
            </div>
        </div>
    );
};

export default OfferNewsLetter;