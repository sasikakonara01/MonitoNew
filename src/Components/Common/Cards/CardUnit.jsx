import React from "react";

function CardUnit({ Title, Gender, Age, Price, image }) {
  return (
    <div className="box shadow-lg rounded-lg overflow-hidden bg-white p-2">
      <div className="image w-full h-48">
        <img
          src={image}
          alt={`Image of ${Title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{Title}</h3>
        <div className="flex justify-between mb-2 text-sm text-gray-700">
          <p>Gender: {Gender}</p>
          <p>Age: {Age}</p>
        </div>
        <p className="text-lg font-bold text-gray-800">${Price}</p>
      </div>
    </div>
  );
}

export default CardUnit;
