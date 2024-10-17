import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing React Icons for social share
import PetSectionLand from "../../Components/LandingPage/PetSection/PetSectionLand";
import s1 from "../../Assets/Shibu/s1.png";
import s2 from "../../Assets/Shibu/s2.png";
import s3 from "../../Assets/Shibu/s3.png";
import s4 from "../../Assets/Shibu/s4.png";
import s5 from "../../Assets/Shibu/s5.png";
import helth from "../../Assets/helth.png";
import guarantee from "../../Assets/guarantee.png";
import Button from "../../Components/Common/ReUsableButton/Button";
import Footer from "../../Components/Footer/Footer";

const ProductDetail = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 mt-5">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">
        <a href="/" className="hover:underline">
          Large Dog
        </a>{" "}
        {">"} <span>Shiba Inu Sepia</span>
      </div>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="space-y-4">
          <img className="w-full rounded-md" src={s1} alt="Shiba Inu Sepia" />
          <div className="flex space-x-2 overflow-x-auto">
            {/* Thumbnail images */}
            {[s1, s2, s3, s4, s5].map((src, index) => (
              <img
                key={index}
                className="w-16 h-16 rounded-md object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
                src={src}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">Shiba Inu Sepia</h1>
            <p className="text-xl text-gray-600 font-semibold">
              34.000.000 VND
            </p>

            {/* Divider */}
            <div className="border-t border-gray-300 mt-4"></div>

            {/* Buttons */}
            <div className="mt-4 flex flex-wrap space-x-4">
              <Button variant="primary" Title="Contact Us" />
              <Button variant="outlined" Title="Chat with Monito" />
            </div>

            {/* Product Details */}
            <div className="mt-6 space-y-2">
              {[
                { label: "SKU:", value: "#0000078" },
                { label: "Gender:", value: "Female" },
                { label: "Age:", value: "2 Months" },
                { label: "Size:", value: "Small" },
                { label: "Color:", value: "Apricot & Tan" },
                { label: "Vaccinated:", value: "Yes" },
                { label: "Dewormed:", value: "Yes" },
                { label: "Cert:", value: "Yes [MKA]" },
                { label: "Microchip:", value: "Yes" },
                { label: "Location:", value: "Vietnam" },
                { label: "Published Date:", value: "12-Oct-2022" },
                {
                  label: "Additional Information:",
                  value: (
                    <>
                      Purebred Shiba Inu.
                      <br />
                      Good body structure.
                      <br />
                      With AKC and FCI Microchip.
                      <br />
                      From champion lineage.
                    </>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-4 border-b border-gray-300 py-2"
                >
                  <p>
                    <strong>{item.label}</strong>
                  </p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="mt-8 space-y-4">
        <div className="flex space-x-2 items-center">
          <img src={guarantee} alt="Guarantee Icon" className="w-6 h-6" />
          <p>100% health guarantee for pets</p>
        </div>
        <div className="flex space-x-2 items-center">
          <img src={helth} alt="Identification Icon" className="w-6 h-6" />
          <p>100% guarantee of pet identification</p>
        </div>
      </div>

      {/* Share Section */}
      <div className="mt-8">
        <h2 className="font-semibold">Share</h2>
        <div className="flex space-x-2 mt-2">
          {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
            <button
              key={index}
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <Icon />
            </button>
          ))}
        </div>
      </div>

      {/* Pet Section */}
      <PetSectionLand />
    </div>
  );
};

export default ProductDetail;
