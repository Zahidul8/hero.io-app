import React from 'react';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';

const InstalledApps = ({app}) => {
    console.log(app);

    const {image, title, downloads,ratingAvg,size} = app;
    
    return (
        <div className='bg-white p-4 border-1 border-gray-300 mt-5 shadow-md rounded-2xl flex items-center justify-between'>

            <div className='flex gap-6 items-center'>

            <figure>
                <img className='w-[80px] h-[80px] rounded-2xl' src={image} alt="" />
            </figure>
            <div>
                <h2 className='text-[20px] font-medium'>{title}</h2>

                <div className='flex items-center gap-5'>
                <span className='flex items-center gap-2'>
                    <img className='w-4 h-4' src={downloadIcon} alt="" />
                    <span>{downloads}M</span>
                </span>
                <span className='flex items-center gap-2'>
                    <img className='w-4 h-4' src={ratingIcon} alt="" />
                    <span>{ratingAvg}</span>
                </span>
            
                    <span>{size} MB</span>
                </div>

            </div>

            </div>



            <div>
             <button className="btn bg-[#00D390] text-white py-[14px] px-8 font-semibold">Uninstall</button>
            </div>
            
        </div>
    );
};

export default InstalledApps;