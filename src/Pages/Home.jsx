import React from 'react';
import Banner from '../Components/Banner';
import TrendingApps from './TrendingApps';
import useApps from '../Hooks/useApps';

const Home = () => {

    const {loading,error} = useApps();


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
            <Banner></Banner>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;