import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar"; // Adjust the import path as needed
import Footer from "../Footer/Footer"; // Adjust the import path as needed

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar bgColor="bg-white" />
      <div className="flex-grow md:mx-auto mx-2">
        <Outlet /> {/* This renders the child routes */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
