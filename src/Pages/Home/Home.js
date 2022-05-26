import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ComputerParts from './ComputerParts';
import ConnectUs from './ConnectUs';
import Reviews from './Reviews';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ComputerParts></ComputerParts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <WhyChooseUs></WhyChooseUs>
            <ConnectUs></ConnectUs>
            
        </div>
    );
};

export default Home;