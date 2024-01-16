import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const Error = () => (
  <div className="w-full flex flex-col justify-center items-center mt-10">
    <FaExclamationCircle className="w-10 h-10 my-10 text-[#B3B3B3]" />
    <h1 className="font-bold text-3xl text-[#B3B3B3] text-left mt-4 mb-10">Oops! Something went wrong.</h1>
  </div>
);

export default Error;
