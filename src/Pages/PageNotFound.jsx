// PageNotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
   return (
    <div className=" flex flex-col  items-center bg-black text-white px-4 text-center font-syne pt-16 ">
      <h1 className="text-[6rem] md:text-[8rem] font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
      
      <p className="text-lg md:text-xl mb-4 italic text-gray-300">
        “Sometimes, the path you’re looking for doesn’t exist... yet.”
      </p>
      
      <p className="mb-8 text-base md:text-lg text-gray-400">
        It looks like you’ve ventured into the unknown. Let’s get you back home!
      </p>
      
      <Link
        to="/"
        className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition duration-200"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default PageNotFound;
