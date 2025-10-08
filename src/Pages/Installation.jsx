import React, { useEffect, useState } from 'react';
import InstalledApps from '../Components/InstalledApps';

const Installation = () => {

        const [appsStr, setAppsStr] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('applist'));
        if (storedData) {
            return setAppsStr(storedData);

        }
    }, [])

    const handleRemove= (id) => {
            const existingList = JSON.parse(localStorage.getItem('applist')) ||[];

            const updatedList = existingList.filter(item => item.id !== id);
            setAppsStr(updatedList);
              localStorage.setItem('applist', JSON.stringify(updatedList));
    }
    

  
    return (
        <div className='py-[80px] max-w-[1440px] mx-auto'>
            <h2 className='text-[48px] font-bold text-[#001931] text-center'>Your Installed Apps</h2>
            <p className='text-[#627382] text-[20px] text-center'>Explore All Trending Apps on the Market developed by us.</p>


            <div className='flex justify-between items-center'>
                <h2 className='text-[24px] font-semibold text-[#001931]'>({appsStr.length}) Apps Found</h2>

                <button className='btn'>Sort data</button>
            </div>


            <div>
                {
                    appsStr.map(app => <InstalledApps key={app.id} handleRemove = {handleRemove}  app = {app}></InstalledApps>)
                }
            </div>

        </div>
    );
};

export default Installation;