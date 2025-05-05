import React, { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  const { isSideBarOpen } = useContext(PropertyContext);
  return isSideBarOpen ? (
    <div className=" w-52 z-10 xl:z-0 pl-6 pr-2.5 py-8 bg-gray-100 border-r border-gray-300 inline-flex flex-col justify-start items-center gap-10">
      <div className="flex flex-col justify-between items-end gap-6 h-full">
        <div className="flex flex-col justify-between items-center gap-6 h-full">
          <div className="w-52 h-[727px] flex flex-col justify-between items-center">
            <div className="self-stretch flex flex-col justify-start items-center gap-5">
              <div className="p-2 bg-emerald-100 rounded-lg w-48 flex justify-start items-center gap-2">
                <Link to="/">
                  <div className="flex item-center w-[70px] justify-between text-gray-900 text-base font-semibold font-['Inter'] leading-normal">
                    <img src={assets.home} alt="" />
                    <h2>Home</h2>
                  </div>
                </Link>
              </div>
              <div className="self-stretch p-2 rounded-lg backdrop-blur-blur inline-flex justify-start items-center gap-2">
                <div className="flex item-center w-[200px] justify-between text-gray-900 text-base font-semibold font-['Inter'] leading-normal">
                  <img src={assets.search} alt="" />
                  Explore Marketplace
                </div>
              </div>
              <div className="self-stretch p-2.5 rounded-lg inline-flex justify-start items-center gap-2.5">
                <div className="flex items-center justify-start text-gray-900 text-base font-semibold font-['Inter'] leading-normal">
                  <img src={assets.heart} alt="" />
                  My wishlist
                </div>
              </div>
              <div className="self-stretch p-2.5 rounded-lg inline-flex justify-start items-center gap-2.5">
                <div className="flex justify-start items-center gap-7">
                  <div className="flex justify-start items-center gap-2.5">
                    <div className="flex items-center justify-start text-gray-900 text-base font-semibold font-['Inter'] leading-normal">
                      <img src={assets.transaction} alt="" /> Transactions
                    </div>
                  </div>
                  <div className="px-1.5 py-1 bg-emerald-900 rounded inline-flex flex-col justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-50 text-[10px] font-semibold font-['Inter']">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch p-2.5 rounded-lg inline-flex justify-start items-center gap-2.5">
                <div className="flex items-center justify-start text-gray-900 text-base font-semibold font-['Inter'] leading-normal">
                  <img src={assets.calender} alt="" />
                  Tour schedules
                </div>
              </div>
              <div className="self-stretch p-2.5 rounded-lg inline-flex justify-start items-center gap-2.5">
                <div className="flex items-center justify-start text-gray-900 text-base font-semibold font-['Inter'] leading-normal">
                  <img src={assets.card} alt="" />
                  Payments
                </div>
              </div>
              <div className="self-stretch p-2.5 rounded-lg inline-flex justify-start items-center gap-2.5">
                <div className="flex justify-start items-center gap-7">
                  <div className="flex justify-start items-center gap-2.5">
                    <div className="w-24 flex items-center justify-start text-gray-900 text-lg font-semibold font-['Crimson_Pro'] leading-7">
                      <img src={assets.bell} alt="" />
                      Notifications
                    </div>
                  </div>
                  <div className="px-1.5 py-1 bg-emerald-900 rounded inline-flex flex-col justify-start items-center gap-2">
                    <div className="text-center justify-start text-neutral-50 text-[10px] font-semibold font-['Inter']">
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-32 flex flex-col justify-end items-start gap-[5px]">
              <div className="justify-start text-gray-400 text-[10px] font-medium font-['Inter'] leading-none">
                SETTINGS
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch p-3 rounded-lg  inline-flex justify-start items-center gap-3">
                  <div className="flex justify-start items-center gap-1.5">
                    <div className="flex items-center justify-start text-gray-900 text-base font-semibold font-['Inter'] leading-normal">
                      <img src={assets.phone} alt="" />
                      Help & Support
                    </div>
                  </div>
                </div>
                <div className="self-stretch p-3 rounded-lg inline-flex justify-start items-center gap-3">
                  <div className=" flex justify-start items-center gap-1.5">
                    <div className="flex justify-start text-gray-900 text-base font-semibold font-['Inter'] leading-normal">
                      <img src={assets.logout} alt="" />
                      Log Out
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default SideNavBar;
