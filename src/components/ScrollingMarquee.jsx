import React from 'react';
import FIGMA from '../assets/FIGMA.png'
import DESIGNER from '../assets/DESIGNER.png'
import Star from '../assets/Star.png'

const ScrollingMarquee = () => {
  const set = (
    <div className="inline-block">
      <img src={Star} alt="Star" className="inline-block    mr-8 " />
      <img src={FIGMA} alt="FIGMA" className="inline-block   mr-8" />
      <img src={Star} alt="Star" className="inline-block   mr-8 " />
      <img src={DESIGNER} alt="DESIGNER" className="inline-block   mr-8 h-8 " />
      <img src={Star} alt="Star" className="inline-block   mr-8 " />
    </div>
  );

  return (
    <div className="w-full  md:h-24 overflow-hidden bg-black flex flex-row justify-center items-center py-20">
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
        <div className="flex flex-row gap-[25rem]">
          {/* Repeat 2–3 times for seamless scroll */}
          {set}
          {set}
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
