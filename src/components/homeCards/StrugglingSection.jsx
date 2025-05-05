import React from "react";
import { assets } from "../../assets/assets";

const StrugglingSection = () => {
  return (
    <div className="w-full h-[450px] mt-[200px]  mb-12 relative bg-hero-pattern3 bg-cover bg-[center_bottom_-120px] bg-no-repeat">
      <div className="bg-black w-full h-[450px] opacity-50 absolute"></div>
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="w-full h-[450px] z-10 flex flex-col justify-center items-center gap-2">
          <div className=" text-center justify-center text-white text-5xl font-semibold font-['Crimson_Pro'] leading-[60px]">
            Struggling with what to decide? Need Help...
          </div>
          <div className="w-full md:w-[696px] h-20 z-10 text-center justify-center text-white text-xl font-medium font-['Inter'] leading-7">
            We can help you find your dream home by guiding you through a few
            simple steps and matching you with tailor-made property listings.
            Talk to our Agents here.
            <br />
          </div>
          <div
            data-state="Default"
            data-type="Chat with an agent"
            className="px-7 py-3 bg-neutral-100 rounded-lg inline-flex justify-start items-center gap-2.5"
          >
            <div className="w-5 h-5 relative overflow-hidden">
              <div className="w-5 h-5 left-[2.50px] top-[2.50px] absolute">
                <img src={assets.message} alt="" />
              </div>
            </div>
            <div className="justify-start text-slate-700 text-lg font-semibold font-['Inter'] leading-7">
              Chat with a Spacevilla agent
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrugglingSection;
