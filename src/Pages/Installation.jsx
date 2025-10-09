import React, { useEffect, useState } from 'react';
import InstalledApps from '../Components/InstalledApps';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import useApps from '../Hooks/useApps';

const Installation = () => {

    const {loading, error} = useApps();
    const navigate = useNavigate();
    const [appsStr, setAppsStr] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('applist'));
        if (storedData) {
            return setAppsStr(storedData);

        }
    }, [])



    const handleRemove = (id) => {


        const existingList = JSON.parse(localStorage.getItem('applist')) || [];

        const updatedList = existingList.filter(item => item.id !== id);
        setAppsStr(updatedList);
        localStorage.setItem('applist', JSON.stringify(updatedList));

        toast('App Uninstalled Successfully !', {
            position: 'top-center',
        });
    }

    const handleSort = (type) => {
        if (type === 'high') {
            const updatedList = [...appsStr].sort((a, b) => b.downloads - a.downloads);
            console.log(updatedList);

            return setAppsStr(updatedList);
        } else if (type === 'low') {
            const updatedList = [...appsStr].sort((a, b) => a.downloads - b.downloads);
            return setAppsStr(updatedList);

        }



    }



          if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <span className="loading loading-spinner loading-lg text-[#00D390]"></span>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 py-20">Failed to load app list.</p>
    );
  }


    return (

        <div>
            {
                appsStr.length === 0?
            <div className='pt-35'>
                <h2 className='text-center page-heading text-[#001931] font-semibold'>No installed Apps</h2>

                <div className='flex justify-center pb-[80px] mt-3'>
                    <button onClick={() => navigate(-1)} className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-[14px] px-8 font-semibold">Go back</button>
                </div>
            </div> : <div className='py-[80px] max-w-[1440px] mx-auto px-3 2xl:px-0'>
                <h2 className='page-heading font-bold text-[#001931] text-center'>Your Installed Apps</h2>
                <p className='text-[#627382] sm:text-[18px] md:text-[20px] text-center'>Explore All Trending Apps on the Market developed by us.</p>


                <div className='flex flex-col md:flex-row justify-between items-center  mt-6 space-y-4'>
                    <h2 className='text-[24px] font-semibold text-[#001931]'>({appsStr.length}) Apps Found</h2>


                    <select defaultValue="Pick a color" className="select">
                        <option disabled={true}>Sort by size</option>
                        <option onClick={() => handleSort('high')}>High-Low</option>
                        <option onClick={() => handleSort('low')}>Low-High</option>
                    </select>

                </div>


                <div>
                    {
                        appsStr.map(app => <InstalledApps key={app.id} handleRemove={handleRemove} app={app}></InstalledApps>)
                    }
                </div>


            </div>
            }

            
            <ToastContainer />

        </div>
    );
};

export default Installation;