import React from "react";
import Button from "../Common/ReUsableButton/Button";
import Hero from "../../Assets/hero.png";

function land() {
  return (
    <>
      <nav>
        <div className="bg-[#FCEED5] h-[90vh] flex flex-col md:flex-row items-center justify-center relative">
          {/* Left content section */}
          <div className="md:text-start p-8 max-w-lg z-0 md:ms-8 text-center">
            <h1 className="text-5xl font-bold text-[#003459] mb-2">
              One More Friend
            </h1>
            <h2 className="text-3xl font-bold text-[#003459] mb-6">
              Thousands More Fun!
            </h2>
            <p className="text-lg text-gray-700 mb-8 ">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <Button variant="outlined" Title="View Intro" icon="true" />
              <Button variant="primary" Title="Explore Now" />
            </div>
          </div>

          <div className="relative flex-1 lg:flex justify-center items-center mt-5 md:mt-0 h-full hidden">
            {/* Large slanted rounded rectangle */}
            <div className="absolute w-[400px] sm:w-auto sm:h-auto h-[400px] bg-[#F0C987] rounded-[50px] rotate-12 bottom-12 me-12 z-0"></div>

            <img
              src={Hero}
              alt="Pet"
              className="lg:h-full lg:max-h-[90%] w-auto xs:w-auto xs:h-auto mt-12 relative z-1"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default land;
