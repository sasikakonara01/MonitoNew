// CategoryItems.js
import React from "react";
import CardUnit from "../../Components/Common/Cards/CardUnit";
import useCategoryItem from "../Category/useCategoryItems";

function CategoryItems({ filters }) {
  const { filteredPetData, isLoading } = useCategoryItem(filters);

  return (
    <div className="w-full flex flex-col items-center">
      {isLoading ? (
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-t-4 border-gray-200 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
          <div className="text-cyan-800">Loading...</div>
        </div>
      ) : filteredPetData.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full w-[100vh] text-center border border-dashed border-gray-300">
          <h2 className="text-cyan-800 font-bold text-xl">No Pets Found</h2>
          <p className="text-gray-600">Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-cyan-800 w-full">
          {filteredPetData.map((item) => (
            <CardUnit
              key={item.id} // Using unique ID for keys is best practice
              Title={item.breed}
              image={item.image} // Ensure that `item.image` exists
              Gender={item.gender}
              Age={item.age} // Ensure that `item.age` exists
              Price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryItems;
