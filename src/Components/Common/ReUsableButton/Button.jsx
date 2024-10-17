import React from 'react';
import { IoIosArrowDropright } from "react-icons/io";

// Define button types
const buttonStyles = {
  primary: "bg-[#003459] text-white hover:bg-[#005a8b]",
  secondary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  dark: "bg-gray-800 text-white hover:bg-gray-700",
  light: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  outlined: "border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white",
  outlinedLight: "border border-gray-300 text-gray-800 hover:bg-gray-200 hover:text-white",
};

const Button = ({ 
  variant = "primary", 
  Title,
  children, 
  onClick, 
  className = "", 
  icon = false, // default value is false, so icon is hidden by default
  ...props 
}) => {
  const baseStyle = "py-2 px-4 rounded-full flex items-center justify-center";
  const variantStyle = buttonStyles[variant] || buttonStyles.primary;

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}{Title}
      {icon && <span className="p-1"><IoIosArrowDropright /></span>}
    </button>
  );
};

export default Button;
