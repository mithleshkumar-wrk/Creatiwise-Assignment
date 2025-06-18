import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
   return (
    <div className=" flex flex-col items-center pt-24 bg-black text-white font-syne px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">🚧 Page Not Ready</h1>
      <p className="text-lg md:text-2xl mb-4">
        "Every great idea starts with a blank page."
      </p>
      <p className="text-base md:text-lg mb-8">
        This page is not designed yet. Please go back to the home page.
      </p>
      <Link
        to="/"
        className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
      >
        Go to Home Page
      </Link>
    </div>
  );
}

export default About