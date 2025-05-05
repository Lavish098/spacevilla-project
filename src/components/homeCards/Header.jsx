import React from "react";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className=" w-full h-[680px] flex flex-col justify-center items-center relative bg-hero-pattern bg-cover bg-[center_top_-120px] md:bg-[center_top_-120px] bg-no-repeat opacity-85">
      <div className=" flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="w-full md:w-[650px] h-16 text-center justify-end text-white text-[34px] md:text-5xl font-semibold font-['Crimson_Pro'] leading-[60px]">
            Find Your Dream Home
          </div>
          <div className="w-full md:w-[696px] text-center justify-end text-slate-100 text-lg font-semibold font-['Inter'] leading-7">
            Discover a world of elegance and comfort in our exquisite homes,
            where every detail is crafted with care.
          </div>
        </div>
        <div className="inline-flex justify-start items-center gap-4">
          <div className="px-6 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-white flex justify-start items-center gap-2">
            <div className="w-5 h-5 relative overflow-hidden">
              <img
                src={assets.incomingCall}
                alt=""
                style={{ filter: "brightness(0) invert(1)" }}
                className="w-5 h-5"
              />
            </div>
            <div className="justify-start text-white text-base font-semibold font-['Inter'] leading-snug">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
