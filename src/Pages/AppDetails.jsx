import React, { useState } from 'react';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import useApps from '../Hooks/useApps';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import iconReview from '../assets/icon-review.png';

import RatingsChart from '../Components/RatingsChart';
import NotFoundApp from './NotFoundApp';

const AppDetails = () => {

    const { id } = useParams()
    const { apps, loading, error } = useApps();
    const [status, setStatus] =useState(false);

    const appData = apps.find(app => app.id === Number(id));

    

    const { image, companyName, description, downloads, ratingAvg, ratings, reviews, size, title } = appData || {};

  
    


    const handleStatus = () => {
        if (status) {
            return;
        }
        toast('App installed Successfully !',{
            position: 'top-center',
        });
        setStatus(true);
        handleStoreApp();
    }

    const handleStoreApp = () => {
        const existingApp = JSON.parse(localStorage.getItem('applist')) || [];

        const alreadyInList = existingApp.some(item=> item.id === appData.id);
        if (alreadyInList) {
            return;
        }
        const updatedAppList = [...existingApp,appData];
        localStorage.setItem('applist', JSON.stringify(updatedAppList));
    }


    return (

        <div>
            {
                appData?  <div className='max-w-[1440px] mx-auto py-[80px]'>
            <div className='flex gap-10 border-b border-gray-400 pb-12'>
                <figure>
                    <img className='max-w-[350px] rounded-2xl' src={image} alt="" />
                </figure>
                <div className='flex-1'>
                    <div className='border-b border-gray-400 pb-8'>
                        <h1 className='text-[32px] font-bold text-[#001931]'>{title}</h1>
                        <p className='text-[#627382] text-[20px]'>Developed by <span className='text-[#632EE3] font-semibold '>{companyName}</span></p>
                    </div>


                    <div className='my-[30px] flex'>
                        <div className='mr-[50px] space-y-2'>
                            <img className='w-[40px] h-[40px]' src={downloadIcon} alt="" />
                            <p className='text-[#001931]'>Downloads</p>
                            <p className='text-[40px] font-extrabold text-[#001931]'>{downloads}M</p>
                        </div>


                        <div className='mr-[50px] space-y-2'>
                            <img className='w-[40px] h-[40px]' src={ratingIcon} alt="" />
                            <p className='text-[#001931]'>Average Ratings</p>
                            <p className='text-[40px] font-extrabold text-[#001931]'>{ratingAvg}</p>
                        </div>

                        <div className=' space-y-2'>
                            <img className='w-[40px] h-[40px]' src={iconReview} alt="" />
                            <p className='text-[#001931]'>Total Reviews</p>
                            <p className='text-[40px] font-extrabold text-[#001931]'>{reviews}K</p>
                        </div>
                    </div>

                    <div>
                        <button onClick={handleStatus} className='btn bg-[#00D390] text-white text-[20px] font-semibold'>
                            {status? 'Installed': `Install Now (${size}MB)`}
                            
                        </button>
                    </div>

                </div>
            </div>

{/* charts */}
            <div>
              <RatingsChart ratings={ratings}></RatingsChart>
            </div>

            <div>
                <h2 className='text-3xl font-semibold text-[#001931] mb-4'>Description</h2>
                <p className='text-[#627382] text-[20px]'>{description}</p>
            </div>

             <ToastContainer />
        </div> : <NotFoundApp></NotFoundApp>
            }
        </div>
       
    );
};

export default AppDetails;