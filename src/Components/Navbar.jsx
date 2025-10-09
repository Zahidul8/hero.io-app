import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';
import githubLogo from '../assets/github.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-2 md:px-4 lg:px-[80px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allapp'>Apps</NavLink></li>
                        <li><NavLink to='/installation'>Installation</NavLink></li>

                    </ul>
                </div>
                <div><Link className='flex items-center gap-1 ' to='/'>
                <img className='w-[40px]' src={logo} alt="" />
                <span className='text-[#632EE3] font-bold'>HERO.IO</span>
                </Link></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-medium text-black'><NavLink to='/'>Home</NavLink></li>
                    <li className='font-medium text-black'><NavLink to='/allapp'>Apps</NavLink></li>
                    <li className='font-medium text-black'><NavLink to='/installation'>Installation</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end">
                <Link to='https://github.com/Zahidul8' className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2]" target='_blank'><img src={githubLogo} alt="" /><span className='text-white font-semibold'>Contribute</span></Link>
            </div>
        </div>
    );
};

export default Navbar;