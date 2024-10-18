// NavBar.js
import React, { useState } from "react";
import Logo from "../../Assets/Frame.png";
import CurrencyDropDown from "../Common/Input/CurrencyDropDown";
import { MagnifyingGlass } from "phosphor-react";

function NavBar({ bgColor = "transparent" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-20 p-4 ${bgColor}`}>
      {" "}
      {/* Set NavBar z-index */}
      <div className="container mx-auto flex items-center justify-around">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-blue-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-16 6h16"
            />
          </svg>
        </button>

        {/* Logo - Positioned with higher z-index */}
        <div className="font-bold text-blue-800 text-center flex-grow md:flex-grow-0 relative z-40">
          {" "}
          {/* Adjusted z-index */}
          <img
            src={Logo}
            alt="Logo"
            onClick={() => (window.location.href = "/")}
            className="h-auto w-auto mx-auto md:m-0 pe-5 lg:pe-0"
          />
        </div>

        {/* Search Icon for Mobile */}
        <button className="md:hidden p-2">
          <MagnifyingGlass className="w-6 h-6 text-blue-800" />
        </button>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex space-x-6 text-lg text-blue-950 font-bold">
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
          <a href="/category" className="hover:text-blue-600">
            Category
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* Desktop Search and Join Button */}
        <div className="hidden md:flex items-center space-x-4 ps-2">
          <div className="hidden md:flex items-center space-x-1 bg-white rounded-full px-4 py-1 shadow-md">
            <MagnifyingGlass className="w-5 h-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search something here!"
              className="outline-none text-gray-600 w-full"
            />
          </div>

          {/* Join Button */}
          <button className="hidden md:flex bg-[#003459] text-white py-1 px-4 md:py-1 lg:py-2 md:px-4 sm:py-0.5 sm:px-3 text-sm sm:text-xs rounded-full">
            Join the community
          </button>

          {/* Currency Dropdown */}
          <CurrencyDropDown />
        </div>
      </div>
      {/* Mobile Menu - Open when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <div className="flex flex-col space-y-2 text-lg text-blue-950 font-bold">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <a href="/category" className="hover:text-blue-600">
              Category
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="/contact" className="hover:text-blue-600">
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
            <MagnifyingGlass className="w-5 h-5 text-gray-600" />
          </div>

          {/* Currency Dropdown for Mobile */}
          <CurrencyDropDown />

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
