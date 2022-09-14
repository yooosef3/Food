import AboutTestimSlider from './AboutTestimSlider';
import React from 'react';
import styles from '../../../styles/main/AboutUs/AboutTestim.module.css'

const AboutTestim = () => {
    return (
        <div className={styles.container}>
            <h1>نظرات</h1>
            <AboutTestimSlider />
        </div>
    );
};

export default AboutTestim;