import React from 'react';
import playstore from '../assets/Playstore.png';
import appstore from '../assets/Appstore.png';
import { Link } from 'react-router';
import heroimage from '../assets/hero.png';

const Banner = () => {
    return (
        <div className='py-[80px]'>
            <div className='text-center'>
                <h3 className='banner-heading font-bold text-[#001931] max-w-[597px] mx-auto leading-20'>We Build <span className='text-[#632EE3]'>Productive</span> Apps</h3>
                <p className='text-[#627382] max-w-[800px] mx-auto mt-4 p-2 md:p-0'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex items-center gap-3 justify-center mt-10'>
                <Link className='btn border border-gray-300 py-4 ' to='https://play.google.com/store/games?device=windows' target='_blank'>
                <img src={playstore} alt="" />
                <p className='text-[#001931]'>Google Play</p>
                </Link>
                <Link className='btn border border-gray-300 py-4 ' to='https://www.apple.com/app-store' target='_blank'>
                <img src={appstore} alt="" />
                <p className='text-[#001931]'>App Store</p>
                </Link>
                
            </div>

            <div className='mt-10 flex justify-center items-center px-2'>
                <img src={heroimage} alt="" />
            </div>
            <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-[80px] text-white '>
                <h1 className='cart-heading font-semibold text-center'>Trusted by Millions, Built for You</h1>

                <div className='grid grid-cols-1 lg:grid-cols-3 max-w-[1076px] mx-auto gap-15 lg:gap-6 mt-10'>
                    <div className='text-center'>
                        <p>Total Downloads</p>
                        <h1 className='cart-title font-extrabold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p>Total Reviews</p>
                        <h1 className='cart-title font-extrabold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p>Active Apps</p>
                        <h1 className='cart-title font-extrabold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Banner;