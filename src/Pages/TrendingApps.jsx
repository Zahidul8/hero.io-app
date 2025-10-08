import React from 'react';
import useApps from '../Hooks/useApps';
import App from '../Components/App';
import { Link } from 'react-router';

const TrendingApps = () => {

    const {apps, loading, error} = useApps();

    const reducedApp = apps.slice(0,8);
    
    return (
        <div>
            <div>
                <h2 className='text-[48px] font-bold text-center'>Trending Apps</h2>
                <p className='text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='py-10 max-w-[1440px] mx-auto grid grid-cols-4 gap-4'>
            {
                reducedApp.map(app => <App key={app.id} app ={app}></App> )
            }
            </div>

            <div className='flex justify-center pb-[80px]'>
            <Link to='/allapp' className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-[14px] px-8 font-semibold">Show All</Link>
            </div>
        </div>
    );
};

export default TrendingApps;