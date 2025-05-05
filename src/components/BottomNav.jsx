import React from "react";
import { assets } from "../assets/assets";

const BottomNav = () => {
  return (
    <div className="my-10 mt-40 ">
      <img src={assets.logo} alt="" className="mb-5 w-32" />
      <div className="grid grid-cols-2 gap-5 mx-6 sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr] sm:gap-10 text-sm">
        <div className="w-[300px]">
          <p className="text-xl font-medium mb-5">Contact Us</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="w-[50%] sm:w-full flex justify-start items-stretch">
              <img src={assets.marker} alt="" className="mr-2 w-5 h-5" />
              Ikeja Town Square, Obafemi Awolowo Way, Ikeja, 101233, Lagos
            </li>
            <li className="w-full flex justify-start items-stretch">
              <img src={assets.phone} alt="" className="mr-2 w-5 h-5" />
              +234 909 2237 678
            </li>
            <li className="w-full flex justify-start items-stretch">
              <img src={assets.email} alt="" className="mr-2 w-5 h-5" />
              connect@spacevilla.africa
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Features</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>Buy a Property</li>
            <li>Sell a Property</li>
            <li>Villasphere</li>
            <li>Help me choose</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb05">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Terms and policies</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Terms of Use</li>
            <li>Privacy policy</li>
            <li>Cookies policy</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
