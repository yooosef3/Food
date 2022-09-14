import AboutBanner from './AboutBanner';
import AboutHistory from './AboutHistory';
import AboutStat from './AboutStat';
import AboutStore from './AboutStore';
import AboutTeam from './AboutTeam';
import AboutTestim from './AboutTestim';
import Map from '../Map';
import React from 'react';
import Sponsors from '../Sponsors';

const AboutUs = () => {
    return (
        <div>
            <AboutBanner />
            <AboutStore />
            <AboutHistory />
            <AboutTeam />
            <AboutStat />
            <AboutTestim />
            <Sponsors />
            <Map />
        </div>
    );
};

export default AboutUs;