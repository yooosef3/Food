import React from 'react';
import pay1 from '../../assets/images/payment-1-45x15.png'
import pay2 from '../../assets/images/payment-2-46x28.png'
import pay3 from '../../assets/images/payment-3-62x17.png'
import styles from '../../styles/footer/FooterBotom.module.css'

const FooterBotom = () => {
    return (
        <div>
            <p>© 2022 Grocmart. تمامی حقوق محفوظ است</p>
            <div>
                <p>سیاست حفظ حریم خصوصی</p>
                <div>
                    <div>
                        <img alt='payment' src={pay1}/>
                    </div>
                    <div>
                        <img alt='payment' src={pay2}/>
                    </div>
                    <div>
                        <img alt='payment' src={pay3}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBotom;