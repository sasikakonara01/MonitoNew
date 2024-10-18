// LandingPage.js
import React from "react";
import NavBar from "../NavBar/NavBar";
import Land from "./land";
import PetSectionLand from "./PetSection/PetSectionLand";
import Banner from "../Banner/Banner01";
import Footer from "../Footer/Footer";
import Button from "../Common/ReUsableButton/Button";
import CompanyLogo from "../../Assets/companyLogo.png";
import ProductSection from "../../Components/LandingPage/ProductSection/ProductSection";
import Banner02 from "../Banner/Banner02";
import NewsSection from "../../Components/LandingPage/NewsSection/newsSection"; // Updated import
import navtop from "../../Assets/navtop.png";
import Banner03 from "../Banner/Banner03";

const LandingPage = () => {
  return (
    <>
      <NavBar bgColor="bg-[#fceed5]" />

      <Land />
      <div className="mx-auto md:w-11/12 w-full">
        <PetSectionLand />
        {/* <Banner /> */}
        <Banner03 />
        <ProductSection />
        {/* Section for Pet Sellers */}
        <div className="px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between md:py-6">
            {/* Heading */}
            <h2 className="text-center md:text-left text-lg md:text-xl lg:text-2xl mx-2 mb-4 md:mb-0">
              Proud to be part of{" "}
              <span className="text-[#003459] font-bold">Pet Sellers</span>
            </h2>

            {/* Button */}
            <Button
              variant="outlined"
              Title="View All Our Sellers"
              icon="true"
              className="w-full md:w-auto text-center"
            />
          </div>

          {/* Company Logo */}
          <div className="flex justify-center mt-4">
            <img
              src={CompanyLogo}
              alt="Company Logo"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <Banner02 />
        <NewsSection /> {/* Correct usage of NewsSection */}
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
