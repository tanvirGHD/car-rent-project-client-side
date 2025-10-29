import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/common/Footer';
import Navbar from '../pages/common/Navbar';

const MainLayout = () => {
    const location = useLocation();
    return (

        <div className='bg-[#ffffff] dark:bg-[#000000]'>
            <Navbar></Navbar>
            <div className={`${location.pathname === "/" ? "w-full" : "w-11/12"} mx-auto`}>
                <Outlet />
            </div>
            <Footer />
        </div>

    );
};

export default MainLayout;