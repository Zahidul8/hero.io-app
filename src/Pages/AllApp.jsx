import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import Apps from '../Components/Apps';
import { Link } from 'react-router';

const AllApp = () => {

    const { apps, loading, error } = useApps();

    const [search, setSearch] = useState('');
    const [searchLoading, setSearchLoading] = useState(false);


    const searchValue = search.trim().toLowerCase();
    const filteredApps = searchValue ? apps.filter(app => app.title.toLowerCase().includes(searchValue)) : apps;


    const handleAllApps = () => {
         setSearch('');
    }

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        setSearchLoading(true);

       const timeout = setTimeout(() => {
            setSearchLoading(false);
        }, 400);

        return () => clearTimeout(timeout);
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


            <div className='max-w-[1440px] mx-auto py-[80px] px-3 2xl:px-0'>
                <h2 className='page-heading font-bold text-[#001931] text-center'>Our All Applications</h2>
                <p className='text-[#627382] md:text-[18px] lg:text-[20px] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

                <div className='flex flex-col md:flex-row justify-between items-center mt-6 space-y-4'>
                    <h2 className='text-[24px] font-semibold text-[#001931]'>({filteredApps.length}) Apps Found</h2>

                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input className='bg-white' onChange={handleSearch} value={search} type="search" required placeholder="Search" />
                    </label>
                </div>

                {
                    searchLoading ? (
                        <div className="flex justify-center items-center py-10">
                            <span className="loading loading-spinner text-[#00D390]"></span>
                            <p className="ml-3 text-[#627382] text-lg">Searching apps...</p>
                        </div>
                    ) : (
                             filteredApps.length === 0 ? <div className='mt-6'>
                        <h2 className='rating-title text-gray-500 font-semibold text-center pb-5 '>No App Found</h2>
                        <div className='flex justify-center pb-[80px]'>
                            <Link onClick={handleAllApps} to='/allapp' className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-[14px] px-8 font-semibold">Show All Apps</Link>
                        </div>
                    </div> : <div className='py-10 max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
                        {
                            filteredApps.map(app => <Apps key={app.id} app={app}></Apps>)
                        }
                    </div>
                    )
                    }


            </div>
        </div>
    );
};

export default AllApp;