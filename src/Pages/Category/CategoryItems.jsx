import React from "react";
import CardUnit from "../../Components/Common/Cards/CardUnit";
import usePetSectionLand from "../../Components/LandingPage/PetSection/usePetSectionLand";

function CategoryItems() {
  const { petData, isLoading } = usePetSectionLand();
  return (
    <>
      {isLoading ? (
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-t-4 border-gray-200 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
          <div className="text-cyan-800">Loading...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-cyan-800 w-full">
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
    </>
  );
}

export default CategoryItems;
