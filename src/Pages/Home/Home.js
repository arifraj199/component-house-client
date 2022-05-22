import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ComputerParts from './ComputerParts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ComputerParts></ComputerParts>
            <BusinessSummary></BusinessSummary>
            {/* <Reviews></Reviews>
            <Footer></Footer> */}
        </div>
    );
};

export default Home;