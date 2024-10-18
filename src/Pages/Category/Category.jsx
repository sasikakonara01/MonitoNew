import React from "react";
import Footer from "../../Components/Footer/Footer";
import CategoryItems from "./CategoryItems";
import Button from "../../Components/Common/ReUsableButton/Button";
import groupdog from "../../Assets/groupdog.png";
import catohead from "../../Assets/Catogary/catohead.png";
import { FaFilter } from "react-icons/fa";
import { TbFilter } from "react-icons/tb";
import useCategory from "./useCategory";

const Category = () => {
  const {
    handleBreedChange,
    handlePriceChange,
    handleGenderChange,
    handleColorChange,
    toggleFilter,
    isFilterOpen,
    filters,
  } = useCategory();

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header
        className="w-full h-[400px] md:h-[500px] relative bg-cover bg-center bg-[#FCEED5] rounded-2xl"
        style={{ backgroundImage: 'url("path-to-header-image.jpg")' }}
      >
        <img
          src={catohead}
          alt=""
          className="md:block hidden absolute bottom-0 h-full"
        />
        <img
          className="absolute bottom-0 left-0 w-3/4 h-auto object-cover md:object-contain"
          src={groupdog}
          alt="Group of dogs"
        />
        <div className="relative z-10 max-w-7xl mx-auto text-white flex items-center h-full justify-center md:justify-end px-4">
          <div className="text-center md:text-right">
            <h1 className="text-3xl md:text-4xl text-center font-bold md:text-white text-[#003459]">
              One More Friend,
            </h1>
            <h2 className="text-lg md:text-xl text-center md:text-right font-bold md:text-white text-[#003459]">
              Thousands More Fun!
            </h2>
            <p className="mt-4 text-sm md:text-md md:text-white text-[#003459]">
              Having a pet means more joy,
              <br /> a new friend, a happy person who will always
              <br /> be with you to have fun.
            </p>
            <div className="mt-6 flex md:flex-row justify-center md:justify-end">
              <Button
                variant="outlinedLightwhite"
                Title={"View Intro"}
                icon="true"
                className="me-2"
              />
              <Button
                className="text-blue-500 border border-blue-500 md:text-white md:border-white py-2 px-4 rounded"
                Title={"Explore Now"}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col md:flex-row">
        {/* Filter Button for Small Screens */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <button className="text-[#003459]" onClick={toggleFilter}>
            <TbFilter className="text-xl" />
            Filter {/* Filter icon */}
          </button>
        </div>

        {/* Sidebar Filters */}
        <aside
          className={`${
            isFilterOpen ? "block" : "hidden"
          } md:block w-full md:w-1/4 mb-6 md:mb-0`}
        >
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="font-bold text-lg mb-4">Filter</h2>

            {/* Gender Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Gender</h3>
              <div className="grid gap-2">
                <label className="items-center mb-2">
                  <input
                    type="checkbox"
                    value="Male"
                    onChange={handleGenderChange}
                    className="form-checkbox text-blue-500"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="items-center">
                  <input
                    type="checkbox"
                    value="Female"
                    onChange={handleGenderChange}
                    className="form-checkbox text-blue-500"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>

            {/* Color Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="grid gap-2">
                {[
                  "Red",
                  "Apricot",
                  "Black",
                  "Black and White",
                  "Tan",
                  "Silver",
                ].map((color) => (
                  <label className="inline-flex items-center mb-2" key={color}>
                    <input
                      type="checkbox"
                      value={color}
                      onChange={handleColorChange}
                      className="form-checkbox text-red-500"
                    />
                    <span
                      className="ml-2 inline-block w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: color.toLowerCase(),
                        border: "1px solid #000",
                      }} // Change border color as needed
                    ></span>
                    <span className="ml-2">{color}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price</h3>
              <div className="flex space-x-2">
                <input
                  type="number"
                  name="min"
                  placeholder="Min"
                  value={filters.price.min}
                  onChange={handlePriceChange}
                  className="w-1/2 border p-2 rounded-md"
                />
                <input
                  type="number"
                  name="max"
                  placeholder="Max"
                  value={filters.price.max}
                  onChange={handlePriceChange}
                  className="w-1/2 border p-2 rounded-md"
                />
              </div>
            </div>

            {/* Breed Filter */}
            <div>
              <h3 className="font-semibold mb-2">Breed</h3>
              <div className="grid gap-2">
                {["Small", "Medium", "Large"].map((size) => (
                  <label className="inline-flex items-center mb-2" key={size}>
                    <input
                      type="checkbox"
                      value={size}
                      onChange={handleBreedChange}
                      className="form-checkbox text-blue-500"
                    />
                    <span className="ml-2">{size}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="w-full md:w-3/4 md:ml-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Small Dog</h2>
            <div>
              <select className="border text-sm p-1 rounded-full">
                <option className="rounded-full">Sort by: Popular</option>
                <option>Sort by: Latest</option>
                <option>Sort by: Price</option>
              </select>
            </div>
          </div>

          {/* Product List */}
          <div className="max-w-full overflow-hidden w-full">
            <CategoryItems filters={filters} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Category;
