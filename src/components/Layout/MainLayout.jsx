import React from 'react';
import Navbar from '../pages/common/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/common/Footer';

const MainLayout = () => {
    const location = useLocation();
    return (
    //     <div className='bg-[#e0f7f3]'>
    //     <div className="max-w-7xl mx-auto flex flex-col min-h-screen ">
    //     <Navbar></Navbar>
    //     {/* <main className="flex-grow">
    //     <Outlet />
    //     </main> */}
    //     <div className={`${location.pathname === "/" ? "w-full" : "max-w-7xl"} mx-auto`}>
    //   <Outlet />
    // </div>
    //     <Footer />
    //     </div>
    //     </div>

        <div className='bg-[#F7FEE7]'>
            <Navbar></Navbar>
            <div className={`${location.pathname === "/" ? "w-full" : "w-11/12"} mx-auto`}>
            <Outlet />
            </div>
            <Footer />
        </div>

    );
};

export default MainLayout;