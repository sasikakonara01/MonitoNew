import React from "react";
import Button from "../Common/ReUsableButton/Button";
import Hero from "../../Assets/hero.png";
import shapes from "../../Assets/shape.png";

function Land() {
  return (
    <>
      <nav>
        <div className="bg-[#FCEED5] min-h-[90vh] flex flex-col md:flex-row items-center justify-center relative pt-10">
          {/* Left content section */}
          <div className="md:text-start p-8 max-w-lg z-1 md:ms-8 text-center">
            <h1 className="text-5xl font-bold text-[#003459] mb-2">
              One More Friend
            </h1>
            <h2 className="text-3xl font-bold text-[#003459] mb-6">
              Thousands More Fun!
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <Button variant="outlined" Title="View Intro" icon="true" />
              <Button variant="primary" Title="Explore Now" />
            </div>
          </div>

          {/* Right content section */}
          <div className="relative flex flex-1 justify-center items-center mt-5 md:mt-0 h-full">
            {/* Shape and Hero Images */}
            <div className="relative z-0 flex flex-col items-center h-full">
              {/* Shape Image */}
              <img
                className="absolute bottom-0 right-12 xl:h-[80vh] lg:h-[50vh] md:h-[30vh] h-[20vh] max-w-none"
                src={shapes}
                alt="Shape Image"
              />
              {/* Hero Image */}
              <img
                src={Hero}
                alt="Pet"
                className="max-w-full relative z-1 mt-auto"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Land;
