import React from "react";

function ItemCardUnit({ Title, Product, Size, Price, image, Gift }) {
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
          <p>Product: {Product}</p>
          <p>Size: {Size}</p>
        </div>
        <p className="text-lg font-bold text-gray-800">{Price} VND</p>
      </div>
      <div className="p-4 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-lg">
        <p className="flex items-center">
          <span className="mr-2 text-lg">🎁</span> {Gift}
        </p>
      </div>
    </div>
  );
}

export default ItemCardUnit;
