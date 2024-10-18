import React, { useState } from "react";
import { CircleFlag } from "react-circle-flags";

// Define a list of all currencies with their respective flags.
const currencies = [
  { code: "VND", flag: <CircleFlag countryCode="vn" height="20" /> },
  { code: "EUR", flag: <CircleFlag countryCode="eu" height="20" /> },
  { code: "JPY", flag: <CircleFlag countryCode="jp" height="20" /> },
  { code: "GBP", flag: <CircleFlag countryCode="gb" height="20" /> },
  { code: "AUD", flag: <CircleFlag countryCode="au" height="20" /> },
  { code: "CAD", flag: <CircleFlag countryCode="ca" height="20" /> },
  { code: "CHF", flag: <CircleFlag countryCode="ch" height="20" /> },
  { code: "CNY", flag: <CircleFlag countryCode="cn" height="20" /> },
  { code: "SEK", flag: <CircleFlag countryCode="se" height="20" /> },
  { code: "NZD", flag: <CircleFlag countryCode="nz" height="20" /> },
  { code: "USD", flag: <CircleFlag countryCode="us" height="20" /> },
];

export default function DropdownLinkButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]); // Default to USD

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (currency) => {
    setSelectedCurrency(currency); // Update the selected currency object
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      {/* Display the selected flag on top */}
      <div className="flex items-center mb-2">
        {React.cloneElement(selectedCurrency.flag, {
          style: { width: "20px", height: "20px" }, // Adjust size as needed
        })}
        <span className="ml-2 text-sm">{selectedCurrency.code}</span>

        <div>
          <button
            onClick={toggleDropdown}
            className="flex items-center bg-transparent text-[#003459] px-4 py-2 rounded focus:outline-none"
          >
            {/* Dropdown arrow icon only */}
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => handleItemClick(currency)}
                className="flex items-center  w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                {/* Use cloneElement to apply styles directly to the flag */}
                {React.cloneElement(currency.flag, {
                  style: { width: "20px", height: "20px" }, // Adjust flag size in dropdown
                })}
                <span className="ml-1">{currency.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
