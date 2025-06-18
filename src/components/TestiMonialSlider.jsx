import React, { useState } from "react";


const slides = [
  { name: "Floyd", message: "Hired Fast!" },
  { name: "Jane", message: "Easy to Use!" },
  
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Go to first
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(slides.length - 1); // Go to last
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <div className="w-full max-w-md overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((item, i) => (
            <div key={i} className="min-w-full px-6 py-8 bg-gray-800 rounded-lg shadow text-center">
              <p className="text-xl font-bold">{item.name}</p>
              <p className="text-gray-300 italic mt-2">"{item.message}"</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
