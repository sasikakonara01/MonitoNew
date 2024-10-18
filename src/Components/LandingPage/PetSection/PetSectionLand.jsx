import React, { useState } from "react";
import CardUnit from "../../Common/Cards/CardUnit";
import useLandingPage from "../PetSection/usePetSectionLand";
import Button from "../../Common/ReUsableButton/Button";

function PetSectionLand() {
  const { petData, isLoading } = useLandingPage();

  return (
    <div className="mx-auto w-11/12 p-1 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full mb-3">
        <div className="flex items-center justify-between w-full px-5 mt-8 mb-3 flex-wrap ">
          <div className="flex-col">
            <p className="text-[#003459]">Whats New?</p>
            <h2 className="md:text-xl text-md font-bold text-start text-[#003459]">
              Take a Look at Some of our Pets
            </h2>
          </div>
          <div className="mt-3 md:mt-0">
            {" "}
            {/*  Button */}
            <Button variant="outlined" Title="View More" icon="true" />
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-t-4 border-gray-200 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
            <div className="text-cyan-800">Loading...</div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-2 text-cyan-800 w-full">
            {petData?.map((item) => (
              <CardUnit
                key={item.id}
                Id={item.id} // Using unique ID for keys is best practice
                Title={item.breed}
                image={item.image}
                Gender={item.gender}
                Age={item.age}
                Price={item.price}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PetSectionLand;
