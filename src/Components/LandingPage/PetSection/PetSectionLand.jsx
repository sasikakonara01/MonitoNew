import React from "react";
import CardUnit from "../../Common/Cards/CardUnit";
import useLandingPage from "../useLandingPage";
import Button from "../../Common/ReUsableButton/Button";

function PetSectionLand() {
  const { petData, isLoading } = useLandingPage();

  return (
    <>
      <div className="flex items-center justify-between w-full px-5 mt-8 mb-3">
        {/* Left-aligned Title */}
        <h2 className="text-xl font-bold text-start">
          Take a Look at Some of our Pets
        </h2>
        {/* Right-aligned Button */}
        <Button variant="outlined" Title="View More" icon="true" />
      </div>

      <div className="mx-auto w-11/12 p-1">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-cyan-800">
            {petData?.map((item) => (
              <CardUnit
                key={item.id} // Using unique ID for keys is best practice
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
    </>
  );
}

export default PetSectionLand;
