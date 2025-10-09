import React from 'react';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import { Link } from 'react-router';

const Apps = ({app}) => {

    const {image, title, ratingAvg, downloads, id} = app;
    
    
    
    return (
        <Link to={`/apps/${id}`}>
        <div className='p-4 shadow-xl bg-white rounded-2xl min-h-[460px] hover:scale-103 transition ease-in-out duration-300'>
            <figure className=' flex justify-center'>
                <img className='rounded-2xl w-full' src={image} alt="" />
            </figure>
            <h2 className='text-[20px] font-medium text-[#001931] my-4 text-center'>{title}</h2>

            <div className='flex justify-between'>
                <div className='flex items-center  gap-3 text-[#00D390] bg-[#F1F5E8] rounded-[4px] p-2'>
                    <img className='w-4 h-4' src={downloadIcon} alt="" />
                    <p>{downloads}M</p>
                </div>
                <div className='flex items-center  gap-3 text-[#FF8811] bg-[#FFF0E1] rounded-[4px] p-2'>
                    <img className='w-4 h-4' src={ratingIcon} alt="" />
                    <p>{ratingAvg}</p>
                </div>
                
            </div>
            
        </div>
        </Link>
    );
};

export default Apps;