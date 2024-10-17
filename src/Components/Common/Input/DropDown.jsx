// src/components/Dropdown.js
import React, { useState } from "react";

const Dropdown = ({ options, label = "Drop down" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      {/* Dropdown button */}
      <button
        onClick={toggleDropdown}
        className="w-full p-3 border border-gray-300 rounded-full text-left bg-white 
                   flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <span className="truncate">{selectedOption}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute w-full mt-1 border border-gray-300 rounded-3xl bg-white shadow-lg z-10 max-h-48 overflow-hidden">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`p-3 cursor-pointer hover:bg-blue-100 
                          ${
                            selectedOption === option ? "bg-blue-100" : ""
                          } rounded-lg`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
