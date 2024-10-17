import React from "react";
import Footer from "../../Components/Footer/Footer";
import CategoryItems from "./CategoryItems";
import Button from "../../Components/Common/ReUsableButton/Button";
import groupdog from "../../Assets/groupdog.png";

const Category = () => {
  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <header
        className="w-full h-[400px] md:h-[500px] relative bg-cover bg-center bg-[#FCEED5] rounded-md "
        style={{ backgroundImage: 'url("path-to-header-image.jpg")' }}
      >
        {/* Blue shape on the right */}
        <div className="absolute top-0 right-0 h-full w-full md:w-1/2 bg-[#003459] rounded-3xl hidden md:block"></div>

        {/* Image of dog(s) on the left */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover md:object-contain md:h-full md:w-auto"
          src={groupdog}
          alt="Group of dogs"
        />

        {/* Container for content */}
        <div className="relative z-10 max-w-7xl mx-auto text-white  flex items-center h-full justify-center md:justify-end px-4">
          <div className="text-center md:text-right">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold md:text-white text-[#003459]">
              One More Friend,
            </h1>
            <h2 className="text-lg md:text-xl font-bold md:text-white text-[#003459]">
              Thousands More Fun!
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm md:text-mdmd:text-white text-[#003459]">
              Having a pet means more joy,
              <br /> a new friend, a happy person who will always
              <br /> be with you to have fun.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-end">
              <Button
                variant="light"
                Title={"View Intro"}
                icon="true"
                className="mb-4 md:mb-0 md:mr-4"
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
      <div className="max-w-7xl mx-auto py-12 px-4 flex">
        {/* Sidebar Filters */}
        <aside className="w-1/4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="font-bold text-lg mb-4">Filter</h2>

            {/* Gender Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Gender</h3>
              <div>
                <label className=" items-center mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-500"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className=" items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-500"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>

            {/* Color Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                <label className="inline-flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-red-500"
                  />
                  <span className="ml-2">Red</span>
                </label>
                {/* Add other color filters similarly */}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price</h3>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-1/2 border p-2 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-1/2 border p-2 rounded-md"
                />
              </div>
            </div>

            {/* Breed Filter */}
            <div>
              <h3 className="font-semibold mb-2">Breed</h3>
              <div>
                <label className="inline-flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-500"
                  />
                  <span className="ml-2">Small</span>
                </label>
                {/* Add other breed filters */}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="w-3/4 ml-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Small Dog</h2>
            <div>
              <select className="border p-2 rounded-md">
                <option>Sort by: Popular</option>
                {/* Other sorting options */}
              </select>
            </div>
          </div>

          {/* Product List */}
          <div className="grid  gap-6">
            <CategoryItems />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Category;
