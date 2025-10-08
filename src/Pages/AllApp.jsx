import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import App from '../Components/App';
import { Link } from 'react-router';

const AllApp = () => {

    const { apps, loading, error } = useApps();
    const [search, setSearch] = useState('');

    const searchValue = search.trim().toLowerCase();
    const filteredApps = searchValue? apps.filter(app => app.title.toLowerCase().includes(searchValue)): apps;


const handleAllApps = ()=> {
    filteredApps = apps;
}


    return (
        <div className='max-w-[1440px] mx-auto py-[80px]'>
            <h2 className='text-[48px] font-bold text-[#001931] text-center'>Our All Applications</h2>
            <p className='text-[#627382] text-[20px] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between items-center'>
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
                    <input onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>
            </div>

            {
                filteredApps.length === 0?   <div className='mt-6'>
                <h2 className='text-[40px] text-gray-500 font-semibold text-center pb-5 '>No App Found</h2>
                <div className='flex justify-center pb-[80px]'>
                    <Link onClick={handleAllApps} to='/allapp' className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-[14px] px-8 font-semibold">Show All Apps</Link>
                </div>
            </div> : <div className='py-10 max-w-[1440px] mx-auto grid grid-cols-4 gap-4'>
                {
                    filteredApps.map(app => <App key={app.id} app={app}></App>)
                }
            </div>
            }

            

          

        </div>
    );
};

export default AllApp;