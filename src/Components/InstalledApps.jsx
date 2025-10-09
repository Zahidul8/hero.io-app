import React from 'react';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';

const InstalledApps = ({app,handleRemove}) => {

    const {image, title, downloads,ratingAvg,size,id} = app;

   

    
    return (
        <div className='bg-white p-2 sm:p-4 border-1 border-gray-300 mt-5 shadow-md rounded-2xl flex items-center justify-between'>

            <div className='flex gap-3 sm:gap-6 items-center'>

            <figure className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]'>
                <img className=' rounded-2xl w-full min-w-[60px] min-h-[60px]' src={image} alt="" />
            </figure>
            <div>
                <h2 className='md:text-[20px] font-medium text-[#001931]'>{title}</h2>

                <div className='flex items-center gap-3 sm:gap-5 text-[14px] sm:text-[16px]'>
                <span className='flex items-center gap-1 sm:gap-2'>
                    <img className='w-4 h-4' src={downloadIcon} alt="" />
                    <span className='text-[#001931]'>{downloads}M</span>
                </span>
                <span className='flex items-center gap-1 sm:gap-2'>
                    <img className='w-4 h-4' src={ratingIcon} alt="" />
                    <span className='text-[#001931]'>{ratingAvg}</span>
                </span>
            
                    <span className='text-[#001931]'>{size} MB</span>
                </div>

            </div>

            </div>



            <div>
             <button onClick={() => handleRemove(id)} className=" bg-[#00D390] text-white text-[14px] sm:text-[16px] py-2 sm:py-[12px] px-3 sm:px-8 rounded-md font-semibold">Uninstall</button>
            </div>
            
        </div>
    );
};

export default InstalledApps;