import AboutBanner from './AboutBanner';
import AboutHistory from './AboutHistory';
import AboutSlider from './AboutSlider';
import AboutSponsors from './AboutSponsors';
import AboutStat from './AboutStat';
import AboutStore from './AboutStore';
import AboutTeam from './AboutTeam';
import AboutTestim from './AboutTestim';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <AboutBanner />
            <AboutStore />
            <AboutHistory />
            <AboutTeam />
            <AboutStat />
            <AboutTestim />
            <AboutSponsors />
        </div>
    );
};

export default AboutUs;