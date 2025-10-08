import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router';
import twiter from '../assets/twiter.png'
import linkdin from '../assets/linkdin.png'
import facebook from '../assets/facebook.png'
const Footer = () => {
    return (
        <div className='py-[35px] bg-[#001931]'>
            <div className='max-w-[1440px] mx-auto grid grid-cols-4 text-white gap-8 border-b border-gray-600 pb-4'>
                <div className='space-y-4 mr-8'>
                    <div><Link className='flex items-center gap-1 ' to='/'>
                        <img className='w-[40px]' src={logo} alt="" />
                        <span className='text-white font-bold'>HERO.IO</span>
                    </Link></div>

                    <p className='text-white'>Hero.io is a powerful all-in-one platform that brings your favorite apps and digital services together in one seamless experience. Instead of switching between dozens of different apps, Hero.io gives you a single, smart hub where everything works — faster, simpler, and more connected.</p>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-[18px] font-semibold'>Services</h2>
                    <ul className='space-y-2 text-gray-400'>
                        <li>App Integration</li>
                        <li>Smart Dashboard</li>
                        <li>Unified Notifications</li>
                        <li>Cloud Sync</li>
                        <li>Personalization</li>
                        <li>Privacy & Security</li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-[18px] font-semibold'>Company</h2>
                    <ul className='space-y-2 text-gray-400'>
                        <li>About Hero.io</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                        <li>Press Kit</li>
                        <li>Partner With Us</li>
                        <li>News & Updates</li>
                    </ul>
                </div>

                <div className='space-y-4'>
                    <h2 className='text-[18px] font-semibold'>Social Links</h2>
                    <div className='flex items-center gap-4'>
                        <img src={twiter} alt="" />
                        <img src={linkdin} alt="" />
                        <img src={facebook} alt="" />
                    </div>

                </div>
            </div>
            
            <p className='text-center text-white pt-8'>Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;