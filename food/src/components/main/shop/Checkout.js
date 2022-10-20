import CheckoutAddress from './CheckoutAddress';
import CheckoutPay from './CheckoutPay';
import PagesHeader from '../PagesHeader';
import React from 'react';
import YourCart from './YourCart';
import styled from 'styled-components';

const Check = styled.div`
    border-bottom:1px solid #c2c2c2;
    .checkout{
        padding:15px;
    }
`
const Checkout = () => {
    return (
        <Check>
            <PagesHeader headline='پرداخت' page='فروشگاه' path='checkout'/>
            <div className='checkout'>
                <CheckoutAddress />
                <YourCart />
                <CheckoutPay />
            </div>
        </Check>
    );
};

export default Checkout;