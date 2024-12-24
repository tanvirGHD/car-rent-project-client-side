import React from 'react';
import Banner from './Banner';
import ChooseUs from './Chooseus';
import RecentListing from '../RecentListing/RecentListing';
import UserTestimonials from '../UserTestimonials/UserTestimonials';
import SpecialOffers from '../SpecialOffers/SpecialOffers';

const Home = () => {
    return (
        <div className='py-11'>
            <Banner></Banner>
            <ChooseUs></ChooseUs>
            <RecentListing></RecentListing>
            <UserTestimonials></UserTestimonials>
            <SpecialOffers></SpecialOffers>
        </div>
    );
};

export default Home;