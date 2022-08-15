import React, { useState } from 'react';

import styles from '../../styles/header/RightHamburger.module.css'

const RightHamburger = () => {
    
    const [open, setOpen] = useState(false)
    
    const clickHandler = () => {
        setOpen(!open)
    }
    
    return (
        <div className={open ? styles.clicked : styles.container} onClick={clickHandler}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default RightHamburger;