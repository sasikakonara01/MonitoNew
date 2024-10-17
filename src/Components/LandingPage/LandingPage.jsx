// In LandingPage.js
import React from "react";
import NavBar from "../NavBar/NavBar";
import Land from "./land";
import PetSectionLand from "./PetSection/PetSectionLand";
import Banner from "../Banner/Banner01";
import Footer from "../Footer/Footer";
import InputField from "../Common/Input/InputField";
import Dropdown from "../Common/Input/DropDown";
import ProductSection from "./ProductSection/ProductSection";

const LandingPage = () => {
  return (
    <>
      <NavBar bgColor="bg-[#fceed5]" />
      <Land />
      <PetSectionLand />
      <Banner />
      <ProductSection />

      <Footer />
    </>
  );
};

export default LandingPage;
