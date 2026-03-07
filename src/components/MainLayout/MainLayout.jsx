import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
           <section className='w-11/12 mx-auto'>
           <Navbar></Navbar>
           </section>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;