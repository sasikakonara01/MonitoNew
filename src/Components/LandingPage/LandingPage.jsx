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

const LandingPage = () => {
  return (
    <>
      <NavBar bgColor="bg-[#fceed5]" />
      <Land />
      <div className="mx-auto w-11/12">
        <PetSectionLand />
        <Banner />
        <ProductSection />

        {/* Section for Pet Sellers */}
        <div className="px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between md:py-6">
            <h2 className="text-center md:text-start text-lg md:text-xl lg:text-2xl mx-2 mb-4 md:mb-0">
              Proud to be part of{" "}
              <span className="text-[#003459] font-bold">Pet Sellers</span>
            </h2>
            <Button
              variant="outlined"
              Title="View All Our Sellers"
              icon="true"
              className="w-full md:w-auto text-center"
            />
          </div>

          <div className="flex justify-center mt-4">
            <img src={CompanyLogo} alt="Company Logo" />
          </div>
        </div>
        <Banner02 />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
