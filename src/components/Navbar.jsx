import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { PropertyContext } from "../context/PropertyContext";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { toggleSideBar } = useContext(PropertyContext);
  return (
    <>
      <div className="w-full h-16 bg-gray-100 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15)] border-b-[0.50px] border-gray-300 flex justify-between">
        <div className="w-full flex justify-between items-center gap-10">
          <div className="w-full flex justify-between items-center gap-14">
            <div className="flex justify-center items-center gap-3">
              <div className="w-5 h-4 mx-3 relative flex justify-center items-center ">
                <div className="text-[20px] cursor-pointer">
                  <button onClick={toggleSideBar}>
                    <img src={assets.menu} alt="" />
                  </button>
                </div>
              </div>
              <div className="w-28 h-11 relative">
                <Link to="/">
                  <img
                    className="w-24 h-9 left-[8.29px] top-[4.40px] absolute"
                    src={assets.logo}
                  />
                </Link>
              </div>
            </div>
            <div className="hidden xl:flex justify-start items-center gap-7">
              <div className="w-11 h-4 justify-start text-gray-400 text-base font-semibold font-['Inter']">
                <Link to="/">Home</Link>
              </div>
              <div className="w-28 h-4 justify-start text-gray-400 text-base font-semibold font-['Inter']">
                Buy a Property
              </div>
              <div className="w-28 h-4 justify-start text-gray-400 text-base font-semibold font-['Inter']">
                Sell a Property
              </div>
              <div className="w-20 h-4 justify-start text-gray-400 text-base font-semibold font-['Inter']">
                About Us
              </div>
              <div className="p-[5px] flex justify-start items-center gap-2">
                <div className="w-4 h-4 relative overflow-hidden">
                  <img src={assets.phone} alt="" />
                </div>
                <div className="justify-end text-zinc-500 text-xs font-semibold font-['Inter'] leading-normal">
                  (+234) 909 2237 678
                </div>
              </div>
            </div>
            <img
              className="w-11 h-11 rounded-full border-[0.75px] border-emerald-600"
              src={assets.profile_icon}
            />
          </div>
        </div>
      </div>

      {/* SideBar menu for mobile */}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
