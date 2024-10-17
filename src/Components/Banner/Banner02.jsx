import React from "react";
import banner02 from "../../Assets/banner02.png";
import Button from "../Common/ReUsableButton/Button";

const Banner = () => {
  return (
    <div className="w-full flex rounded-2xl flex-col items-center md:items-end justify-center relative overflow-hidden">
      <img
        className="rounded-2xl w-full h-[60vh] md:h-[70vh] object-cover"
        src={banner02}
        alt="Banner"
      />

      {/* Text and buttons on top of the image */}
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start space-y-4 text-center md:text-start px-4 md:px-8 lg:px-16">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#003459]">
          Adoption
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#003459]">
          We Need Help. So Do They.
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-xs md:max-w-lg">
          Adopt a pet and give it a home, it will be love you back
          unconditionally.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
          <Button variant="primary" Title="Explore Now" />
          <Button variant="outlined" Title="View Intro" icon="true" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
