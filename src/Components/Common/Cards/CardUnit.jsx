import React from "react";

function CardUnit({ Title, Gender, Age, Price, image, Id }) {
  return (
    <div
      className="box shadow-lg rounded-lg overflow-hidden bg-white md:p-2 p-1 "
      onClick={() => (window.location.href = `/product/${Id} state=${Id}`)}
    >
      <div className="image w-full h-48">
        <img
          src={image}
          alt={`Image of ${Title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm md:text-lg  font-semibold mb-2">{Title}</h3>
        <div className="flex justify-between mb-2 md:text-sm text-xs text-gray-700">
          <p>Gender: {Gender}</p>
          <p>Age: {Age}</p>
        </div>
        <p className="md:text-lg text-sm font-bold text-gray-800">${Price}</p>
      </div>
    </div>
  );
}

export default CardUnit;
