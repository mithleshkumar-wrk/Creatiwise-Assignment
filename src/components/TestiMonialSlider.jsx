import React from "react";
import Frame3 from '../assets/Frame3.svg'


const TestimonialSlider = () => {
  return (
    <>
    <div className="pb-16 pt-16">
      <div>
        <img src={Frame3} alt="img" />
      </div>
      <div className="flex justify-center items-center gap-8 pt-8">
        <div className="h-8 w-8 bg-gray-400 text-black flex justify-center items-center rounded-full hover:bg-white cursor-pointer">
        <i className=" ri-arrow-left-line"></i>
        </div>
        <div className="h-8 w-8 bg-white text-black flex justify-center items-center rounded-full hover:bg-gray-400 cursor-pointer">
        <i className="ri-arrow-right-line"></i>
        </div>
        
      </div>
    </div>
    </>
  )
  
};

export default TestimonialSlider;
