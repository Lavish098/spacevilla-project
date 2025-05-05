import React from "react";

const ExclusiveSection = () => {
  return (
    <div className="w-full h-full px-8 pt-20 pb-8 bg-gray-50 inline-flex flex-col justify-start items-center gap-6">
      <div className="w-full md:w-[611px] h-14 text-center justify-end text-slate-700 text-4xl md:text-5xl font-semibold font-['Crimson_Pro'] leading-[60px]">
        Exclusive Locations
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <div className="self-stretch inline-flex justify-start items-start gap-5">
          <div className="w-full h-60 relative bg-lekki bg-no-repeat rounded-lg overflow-hidden"></div>
          <div className="w-full h-60 relative bg-aja bg-no-repeat rounded-lg overflow-hidden"></div>
          <div className="w-full h-60 relative bg-ikeja bg-no-repeat rounded-lg overflow-hidden"></div>
        </div>
        <div className="self-stretch h-80 relative bg-vi bg-no-repeat bg-auto rounded-lg overflow-hidden"></div>
      </div>
    </div>
  );
};

export default ExclusiveSection;
