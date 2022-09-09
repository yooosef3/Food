import Clients from "../../components/main/Clients"
import Facilities from "../../components/main/Facilities";
import HomeUs from "../../components/main/AboutUs/HomeUs";
import LatestNews from "../../components/main/LatestNews";
import Map from "../../components/main/Map";
import OffHome from "../../components/main/OffHome";
import Questions from "../../components/main/Questions";
import React from 'react';
import Sponsors from "../../components/main/Sponsors";
import TopSlider from '../main/topSlider/TopSlider';

const HomePage = () => {
    return (
        <div>
            <TopSlider />
            <HomeUs />
            <Facilities />
            <Clients />
            <OffHome />
            <Sponsors />
            <Questions />
            <LatestNews />
            <Map />
        </div>
    );
};

export default HomePage;