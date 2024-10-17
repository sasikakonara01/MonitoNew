import React from "react";

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center h-48 md:h-64 lg:h-72 w-full rounded-lg overflow-hidden shadow-lg bg-[#f8f4e3]">
      {/* Dark blue rotated square */}
      <div className="absolute top-0 left-0 h-80 w-80 bg-blue-900 rotate-dark-blue rounded-full"></div>

      {/* Light blue rotated square */}
      <div className="absolute rounded-lg top-0 left-0 h-64 w-64 bg-blue-700 rotate-light-blue "></div>

      {/* Content on the right */}
      <div className="relative z-10 flex flex-col items-start px-6 md:px-12 lg:px-16 py-4 md:py-8 lg:py-10 text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
          One More Friend
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-600 mt-2">
          Thousands More Fun!
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-4">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
      </div>
    </div>
  );
};

export default Banner;
