import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import GiftBox from "../../../Assets/Group.png"; // Ensure this path is correct

function ItemCardUnit({ Title, Product, Size, Price, image, Gift }) {
  return (
    <div className="box shadow-lg rounded-lg overflow-hidden bg-white p-4">
      <div className="image w-full h-48">
        <img
          src={image}
          alt={`Image of ${Title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 truncate">{Title}</h3>
        <div className="flex justify-between mb-2 text-sm text-gray-700">
          <p className="truncate">Product: {Product}</p>
          <p className="truncate">Size: {Size}</p>
        </div>
        <p className="text-lg font-bold text-gray-800">{Price} VND</p>
      </div>
      {Gift && (
        <div className="p-4 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-lg flex items-center">
          <img src={GiftBox} alt="Gift box icon" className="mr-2 h-5 w-5" />
          <span className="truncate">{Gift}</span>
        </div>
      )}
    </div>
  );
}

// PropTypes for prop validation
ItemCardUnit.propTypes = {
  Title: PropTypes.string.isRequired,
  Product: PropTypes.string.isRequired,
  Size: PropTypes.string.isRequired,
  Price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  Gift: PropTypes.string, // Not required, as the gift message may not always be present
};

export default ItemCardUnit;
