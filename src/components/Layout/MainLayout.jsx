import React from 'react';
import Navbar from '../pages/common/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/common/Footer';

const MainLayout = () => {
    const location = useLocation();
    return (

        <div className='bg-[#dae7ba] dark:bg-[#006b4d]'>
            <Navbar></Navbar>
            <div className={`${location.pathname === "/" ? "w-full" : "w-11/12"} mx-auto`}>
            <Outlet />
            </div>
            <Footer />
        </div>

    );
};

export default MainLayout;