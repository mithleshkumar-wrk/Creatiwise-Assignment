import React, { useState } from "react";


const images = [
  'https://source.unsplash.com/random/800x400?nature',
  'https://source.unsplash.com/random/800x400?water',
  'https://source.unsplash.com/random/800x400?sky',
  'https://source.unsplash.com/random/800x400?forest'
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    setCurrentIndex(isFirst ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLast = currentIndex === images.length - 1;
    setCurrentIndex(isLast ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`}
               className="min-w-full h-64 object-cover" />
        ))}
      </div>

      {/* Left button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 text-black p-2 rounded-full hover:bg-white transition"
      >
        &#8592;
      </button>

      {/* Right button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 text-black p-2 rounded-full hover:bg-white transition"
      >
        &#8594;
      </button>
    </div>
  );
};

export default TestimonialSlider;
