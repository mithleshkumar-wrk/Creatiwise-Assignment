import React from 'react';
import FIGMA from '../assets/FIGMA.svg';
import DESIGNER from '../assets/DESIGNER.svg';
import img6 from '../assets/img6.png';

const ScrollingMarquee = () => {
  const set = (
    <div className="inline-block">
      <img src={img6} alt="Star" className="inline-block h-12 w-auto mr-8" />
      <img src={FIGMA} alt="FIGMA" className="inline-block h-auto w-[80rem] mr-8" />
      <img src={img6} alt="Star" className="inline-block h-12 w-auto mr-8" />
      <img src={DESIGNER} alt="DESIGNER" className="inline-block h-auto w-[60rem] mr-8" />
    </div>
  );

  return (
    <div className="w-full overflow-hidden bg-black flex justify-center items-center py-10">
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-30%); }
          }
          .scrolling-banner {
            display: inline-block;
            animation: slide 15s linear infinite;
            white-space: nowrap;
          }
        `}
      </style>

      <div className="scrolling-banner">
        <div className="flex flex-row gap-[21rem]">
          {set}
          {set}
          {set}
          {set}
          {set}
        </div>
      </div>
    </div>
  );
};

export default ScrollingMarquee;
