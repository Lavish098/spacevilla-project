import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideNavBar from "../components/SideNavBar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full relative">
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
