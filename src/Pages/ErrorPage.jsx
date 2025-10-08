import React from 'react';
import errorImage from '../assets/error-404.png';
import { Link } from 'react-router';
import { useNavigate } from "react-router";

const ErrorPage = () => {

    const navigate = useNavigate();
    return (
        <div className='py-[80px] max-w-[1140px] mx-auto'>
            <figure>
                <img className='mx-auto' src={errorImage} alt="" />
            </figure>
            <div>
                <h2 className='text-center text-[48px] text-[#001931] font-semibold'>Oops, page not found!</h2>
                <p className='text-[#627382] text-[20px] text-center'>The page you are looking for is not available.</p>

                 <div className='flex justify-center pb-[80px] mt-3'>
            <button onClick={() => navigate(-1)} className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-[14px] px-8 font-semibold">Go back</button>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;