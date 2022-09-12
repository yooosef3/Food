import AboutHistorySlider from './AboutHistorySlider';
import React from 'react';
import styles from '../../../styles/main/AboutUs/AboutHistory.module.css'

const AboutHistory = () => {
    return (
        <div className={styles.container}>
            <h1>تاریخچه ما</h1>
            <AboutHistorySlider />
        </div>
    );
};

export default AboutHistory;