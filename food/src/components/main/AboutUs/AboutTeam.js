import AboutTeamSlider from './AboutTeamSlider';
import React from 'react';
import styles from '../../../styles/main/AboutUs/AboutTeam.module.css'

const AboutTeam = () => {
    return (
        <div className={styles.container}>
            <h1>تیم ما</h1>
            <AboutTeamSlider />
        </div>
    );
};
export default AboutTeam;