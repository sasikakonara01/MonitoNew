// src/components/InputField.js
import React, { useState } from "react";

const InputField = ({
  label,
  placeholder,
  type = "text",
  required = false,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (required && e.target.value === "") {
      setError("Empty text");
    } else {
      setError("");
    }
  };

  const clearInput = () => {
    setValue("");
    if (required) {
      setError("Empty text");
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full p-3 border ${
            error ? "border-red-500" : "border-gray-300"
          } 
                     rounded-md focus:outline-none focus:border-blue-500 transition duration-150`}
        />
        {value && (
          <button
            onClick={clearInput}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {/* Clear Icon (X mark) */}
            &times;
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
