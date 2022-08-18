import React, { useState } from 'react';

import styles from '../../styles/header/RightHamburger.module.css'

const RightHamburger = ({openHam}) => {
    
    const [open, setOpen] = useState(false)
    
    const clickHandler = () => {
        setOpen(!open)
    }
    
    return (
        <div className={openHam ? styles.clicked : styles.container} onClick={clickHandler}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default RightHamburger;