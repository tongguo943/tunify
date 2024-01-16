import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="h-[40px] p-2 text-gray-400 focus-within:text-gray-600 bg-[#282828] rounded-3xl">
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex flex-row justify-start items-center h-full">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
    // <div className="flex flex-row items-center bg-[#181818]">
    //   <div className="m-4 flex flex-row items-center text-[#B3B3B3]">
    //     <IoIosArrowBack className="w-6 h-6 mr-4 cursor-pointer" onClick={() => navigate(-1)} />
    //     <IoIosArrowForward className="w-6 h-6 cursor-pointer" onClick={() => navigate(1)} />
    //   </div>
    //   <form onSubmit={handleSubmit} autoComplete="off" className="h-10 p-2 text-gray-400 focus-within:text-gray-600 bg-[#282828] rounded-3xl">
    //     <label htmlFor="search-field" className="sr-only">
    //       Search all songs
    //     </label>
    //     <div className="flex flex-row justify-start items-center h-full">
    //       <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
    //       <input
    //         name="search-field"
    //         autoComplete="off"
    //         id="search-field"
    //         className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
    //         placeholder="Search"
    //         type="search"
    //         value={searchTerm}
    //         onChange={(e) => setSearchTerm(e.target.value)}
    //       />
    //     </div>
    //   </form>
    // </div>
  );
};

export default Searchbar;
