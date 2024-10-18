import React from "react";
import ItemCardUnit from "../../Common/Cards/ItemCardUnit";
import useProductionSection from "./useProductionSection";
import Button from "../../Common/ReUsableButton/Button";

function ProductSection() {
  const { productData, isLoading } = useProductionSection();

  return (
    <div className="mx-auto w-11/12 p-2 flex flex-col items-start">
      <div className="w-full mb-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between w-full px-4 sm:px-5 mt-6 mb-4">
          <div className="text-start sm:text-left">
            <p className="text-[#003459] text-sm sm:text-base">
              Hard to choose the right products for your pets?
            </p>
            <h2 className="text-lg sm:text-xl font-bold text-[#003459] mt-2">
              Our Products
            </h2>
          </div>
          {/* View More Button */}
          <div className="mt-4 sm:mt-0 w-full sm:w-auto">
            <Button variant="outlined" Title="View More" icon="true" />
          </div>
        </div>

        {/* Loading Spinner */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-4 border-t-4 border-gray-200 border-t-cyan-500 rounded-full animate-spin mb-3"></div>
            <div className="text-cyan-800">Loading...</div>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {productData?.map((item) => (
              <ItemCardUnit
                key={item.id}
                Title={item.name}
                Product={item.product}
                image={item.image}
                Gift={item.description}
                Size={item.size}
                Price={item.price}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductSection;
