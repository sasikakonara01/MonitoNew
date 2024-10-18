import React from "react";
import Button from "../Common/ReUsableButton/Button";
import bannershape from "../../Assets/bannerShape.png";
import bannershape2 from "../../Assets/bannershape2.png";
import girldog from "../../Assets/girldog.png";

const Banner = () => {
  return (
    <div>
      <header
        className="w-full h-[500px] md:h-[400px] relative bg-cover bg-center bg-[#003459] rounded-2xl"
        style={{ backgroundImage: 'url("path-to-header-image.jpg")' }}
      >
        {/* Right-side Banner Shape (visible on all screen sizes) */}
        <img
          src={bannershape}
          alt=""
          className="absolute right-0 bottom-0 top-0 h-2/4 md:h-full md:rounded-2xl rounded-3xl hidden md:block rotate-0 "
        />

        {/* Left-side Banner Shape (visible on all screen sizes) */}
        <img
          src={bannershape2}
          alt=""
          className="absolute left-0 hidden md:block bottom-0 h-3/4 md:h-3/4 rounded-2xl"
        />

        {/* Girl with Dog Image (adjusted for small and medium screens) */}
        <img
          className="absolute bottom-0 left-0 w-full h-1/2 object-cover md:object-contain md:w-1/2 md:left-[0%] md:h-[90%]"
          src={girldog}
          alt="Group of dogs"
        />

        <div className="relative z-10 max-w-7xl mx-auto  flex items-center h-full justify-center md:justify-end px-4">
          <div className="text-center md:text-right">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-6xl font-bold  md:relative md:text-[#003459] text-white">
              One More Friend
            </h1>

            {/* Subheading */}
            <h2 className="text-lg md:text-2xl mt-2 font-bold md:text-[#003459] text-white">
              Thousands More Fun!
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm md:text-md md:text-[#003459] text-white ">
              Having a pet means more joy,
              <br /> a new friend, a happy person who will always
              <br /> be with you to have fun.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-center md:justify-end gap-4">
              <Button
                variant="outlinedLightwhite"
                Title={"View Intro"}
                icon="true"
                className="me-2"
              />
              <Button
                className="text-blue-500 border border-blue-500 md:text-white md:border-white py-2 px-4 rounded"
                Title={"Explore Now"}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
