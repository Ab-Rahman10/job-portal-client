import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="md:w-10/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
