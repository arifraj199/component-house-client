import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ComputerParts from './ComputerParts';
import ConnectUs from './ConnectUs';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ComputerParts></ComputerParts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <ConnectUs></ConnectUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;