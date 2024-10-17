import React, { useState } from "react";
import Logo from "../../Assets/Frame.png";

function NavBar({ bgColor = "transparent" }) {
  // bgColor prop with default value
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-10 p-4 ${bgColor}`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-blue-800">
          <img src={Logo} alt="Logo" className="h-8 w-15 ps-12" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-amber"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Menu Items for Desktop */}
        <div className="hidden md:flex space-x-6 text-lg text-blue-950 font-bold">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
          <a href="/category" className="hover:text-blue-600">
            Category
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* Search Bar for Desktop */}
        <div className="hidden md:flex items-center space-x-2 bg-white rounded-full px-4 py-1 shadow-md">
          <input
            type="text"
            placeholder="Search something here!"
            className="outline-none text-gray-600 w-full"
          />
        </div>

        {/* Join Button for Desktop */}
        <button className="hidden md:flex bg-blue-800 text-white py-1 px-4 rounded-full">
          Join the community
        </button>

        {/* Currency Dropdown for Desktop */}
        <div className="hidden md:flex items-center text-blue-800">
          <span className="mr-1">VND</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.23 7.21a.75.75 0 011.04-.02L10 10.586l3.73-3.364a.75.75 0 011.02 1.1l-4 3.607a.75.75 0 01-1.04 0l-4-3.607a.75.75 0 01-.02-1.02z" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <div className="flex flex-col space-y-2 text-lg text-blue-950 font-bold">
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
            <a href="#category" className="hover:text-blue-600">
              Category
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Search Bar for Mobile */}
          <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-1 shadow-md w-10/12">
            <input
              type="text"
              placeholder="Search something here!"
              className="outline-none text-gray-600 w-full"
            />
          </div>

          {/* Join Button for Mobile */}
          <button className="bg-blue-800 text-white py-1 px-4 rounded-full w-10/12">
            Join the community
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
