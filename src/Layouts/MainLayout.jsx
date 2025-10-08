import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';

const MainLayout = () => {



    return (
        <div>
            <Navbar></Navbar>

            <main className='bg-gray-100 min-h-[calc(100vh-456px)]'>

                <Outlet></Outlet>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;