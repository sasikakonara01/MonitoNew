import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar"; // Adjust the path as needed

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow">
        <Outlet /> {/* This renders the child routes */}
      </div>
    </div>
  );
};

export default Layout;
