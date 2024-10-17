import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar"; // Adjust the path as needed
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <NavBar bgColor="bg-white" />
      <div className="flex-grow mx-auto ">
        <Outlet /> {/* This renders the child routes */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
