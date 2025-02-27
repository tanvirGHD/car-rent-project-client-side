import React from 'react';
import Banner from './Banner';
import ChooseUs from './Chooseus';
import RecentListing from '../RecentListing/RecentListing';
import UserTestimonials from '../UserTestimonials/UserTestimonials';
import SpecialOffers from '../SpecialOffers/SpecialOffers';
import Faq from './Faq';
import PricingPlans from '../PricingPlans/PricingPlans';

const Home = () => {
    return (
        <div className='pb-11 '>
            <Banner></Banner>
            <div className='w-11/12 mx-auto'>
            <ChooseUs></ChooseUs>
            <RecentListing></RecentListing>
            <UserTestimonials></UserTestimonials>
            <SpecialOffers></SpecialOffers>
            <Faq></Faq>
            <PricingPlans></PricingPlans>
            </div>
        </div>
    );
};

export default Home;
