import React from "react";

const SellSection = () => {
  return (
    <div className="w-full h-[450px] mb-12 relative bg-hero-pattern2 bg-cover md:bg-[center_bottom_-120px] bg-no-repeat">
      <div className="bg-black w-full h-[450px] opacity-50 absolute"></div>
      <div className="flex flex-col mx-5 justify-center items-center gap-8">
        <div className="w-full h-[450px]  z-10 flex flex-col justify-center items-center gap-2">
          <div className=" text-center justify-center text-white text-3xl md:text-5xl font-semibold font-['Crimson_Pro'] leading-[60px]">
            Looking to Sell Properties ?
          </div>
          <div className="w-full md:w-[696px] h-20 z-10 text-center justify-center text-white text-base md:text-xl font-medium font-['Inter'] leading-7">
            Sign up as a property owner, landlord, real estate agency, agent, or
            marketer to list your property for sale.
            <br />
          </div>
          <div
            data-destructive="False"
            data-icon="False"
            data-main="Primary"
            data-state="Default"
            data-type="Home buttons inclusive"
            className="rounded-lg inline-flex justify-start items-start z-10"
          >
            <div
              data-icon="False"
              data-size="2xl"
              className="px-7 py-3 bg-neutral-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-100 flex justify-center items-center gap-2 overflow-hidden"
            >
              <div className="justify-start text-slate-600 text-lg font-semibold font-['Inter'] leading-7">
                Sign up
              </div>
            </div>
          </div>
          <div className="w-full md:w-[573px] h-14 text-center justify-end z-10">
            <span className="text-white text-xl font-medium font-['Inter'] leading-[72px]">
              Join
            </span>
            <span className="text-white text-xl font-semibold font-['Inter'] leading-[72px]">
              {" "}
              10,000+ other sellers in our SpaceVilla community
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellSection;
