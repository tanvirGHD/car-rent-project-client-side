import React from 'react';
import Banner from './Banner';
import ChooseUs from './Chooseus';
import RecentListing from '../RecentListing/RecentListing';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChooseUs></ChooseUs>
            <RecentListing></RecentListing>
        </div>
    );
};

export default Home;