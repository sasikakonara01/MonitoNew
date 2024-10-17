import React from "react";
import Footer from "../../Components/Footer/Footer";
import CategoryItems from "./CategoryItems";

const Category = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header
        className="w-full h-[300px] relative bg-cover bg-center"
        style={{ backgroundImage: 'url("path-to-header-image.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-white flex items-center h-full px-4">
          <div>
            <h1 className="text-4xl font-bold">
              One More Friend, Thousands More Fun!
            </h1>
            <p className="mt-4 text-lg">
              Having a pet means more joy, a new friend, a happy person who will
              always be with you to have fun.
            </p>
            <div className="mt-6">
              <button className="px-6 py-2 bg-blue-500 rounded-full text-white mr-4">
                View Intro
              </button>
              <button className="px-6 py-2 bg-white rounded-full text-blue-500">
                Explore Now
              </button>
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
      <Footer />
    </div>
  );
};

export default Category;
