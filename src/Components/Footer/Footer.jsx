import React from "react";
import Logo from "../../Assets/Frame.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-[#fceed5] py-10 text-center text-gray-700">
      {/* Subscription Section */}
      <div className="max-w-4xl mx-auto mb-8 mt-3 px-4">
        <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-[#003459] rounded-2xl">
          <h2 className="text-lg text-start ps-2 font-semibold text-[#ffffff] w-full md:w-2/5">
            Register Now So You Don't Miss Our Programs
          </h2>
          <div className="bg-white rounded-lg w-full md:w-3/5 flex flex-col md:flex-row py-1.5 px-1.5">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full md:w-3/5 h-10 px-3 rounded border border-gray-300 mb-2 md:mb-0 md:me-2"
            />
            <button className="bg-[#003459] text-white px-6 w-full md:w-2/5 py-1 rounded h-10">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col md:flex-row md:space-x-8 mb-5 justify-around items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Category
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </nav>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:justify-around md:space-x-5">
        <p className="text-sm text-gray-600">
          © 2022 Monito. All rights reserved.
        </p>
        <img src={Logo} alt="Monito Logo" className="w-24" />
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
