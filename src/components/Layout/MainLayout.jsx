import React from 'react';
import Navbar from '../pages/common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/common/Footer';

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
        <Outlet />
        </main>
        <Footer />
        </div>
    );
};

export default MainLayout;