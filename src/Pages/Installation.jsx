import React from 'react';
import InstalledApps from '../Components/InstalledApps';

const Installation = () => {

    const appStrData = JSON.parse(localStorage.getItem('applist')) || [];
   
    return (
        <div className='py-[80px] max-w-[1440px] mx-auto'>
            <h2 className='text-[48px] font-bold text-[#001931] text-center'>Your Installed Apps</h2>
            <p className='text-[#627382] text-[20px] text-center'>Explore All Trending Apps on the Market developed by us.</p>


            <div className='flex justify-between items-center'>
                <h2 className='text-[24px] font-semibold text-[#001931]'>({appStrData.length}) Apps Found</h2>

                <button className='btn'>Sort data</button>
            </div>


            <div>
                {
                    appStrData.map(app => <InstalledApps key={app.id} app = {app}></InstalledApps>)
                }
            </div>

        </div>
    );
};

export default Installation;