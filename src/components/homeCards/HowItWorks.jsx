import React from "react";
import { assets } from "../../assets/assets";

const HowItWorks = () => {
  return (
    <div className="w-full h-full mx-1 md:mx-5 pb-40 relative">
      {/* Header section */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-stretch">
          <img src={assets.icon} alt="" className="w-5 h-5" />
          <p className="text-green-600 font-medium mb-2">~How it works</p>
        </div>
        <h1 className=" text-2xl md:text-3xl font-serif font-bold">
          Easier shopping and finding what you want.
        </h1>
      </div>

      {/* Tabs */}
      <div className="w-full flex justify-center mb-10">
        <div className="w-[100%] md:w-[500px] flex justify-between items-center bg-gray-100 rounded-md p-1 md:p-3 text-xs md:text-base">
          <button className="px-6 py-3 rounded-md bg-green-600 text-white font-medium">
            Personal
          </button>
          <button className="px-6 py-2 text-gray-600 font-medium">
            Affiliate
          </button>
          <button className="px-6 py-2 text-gray-600 font-medium">
            Broker
          </button>
          <button className="px-6 py-2 text-gray-600 font-medium">
            Business
          </button>
        </div>
      </div>

      {/* Main content with phone and steps */}
      <div className="relative">
        {/* Step 1 - Top left */}

        <div className="w-full h-full relative grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20 xl:gap-32">
          <div className="w-full md:w-[350px] lg:w-[300px] xl:w-[450px] px-7 py-9 bg-emerald-50 rounded-[28.67px] shadow-[0px_3.8222219944000244px_15.671110153198242px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-0.96px] outline-emerald-200 flex flex-col justify-start items-start gap-7">
            <div className="w-20 p-2.5 bg-gradient-to-l from-emerald-600 to-green-400 rounded-lg inline-flex justify-center items-center gap-2">
              <div className="justify-start text-white text-sm font-normal font-['Inter'] leading-tight">
                Step 1
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
              <div className="self-stretch inline-flex justify-start items-center gap-3.5">
                <div className="justify-start text-gray-900 text-2xl font-medium font-['Inter'] leading-loose">
                  Find your perfect place
                </div>
              </div>
              <div className="self-stretch text-justify justify-start text-slate-600 text-xl font-normal font-['Inter'] leading-7">
                Discover our range of properties and services tailored to your
                needs. Whether you want a cozy apartment or a spacious family
                home, we have options for everyone.{" "}
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="hidden w-[425px] h-[850px] overflow-hidden lg:left-[300px] lg:top-[267.70px] xl:left-[550px] xl:top-[167.70px] lg:block absolute">
            {/* Phone in center */}
            <div className="relative flex justify-center">
              <div className="lg:w-[350px] xl:w-[425px] relative">
                {/* iPhone frame image */}
                <img
                  src={assets.iphone}
                  alt="iPhone frame"
                  className="xl:w-[425px] xl:h-[850px] lg:w-[350px]"
                />

                {/* Video positioned inside the frame */}
                <div className="absolute -z-10 inset-0 flex items-center justify-center">
                  <div className="w-[92%] h-[97%] overflow-hidden rounded-3xl">
                    <video
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                      src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1423746217558959172/5ded71b9bd66207c46fc685673eda4eb91bfaf6a?Expires=1747008000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RfcBxMX0-sPZ679fqxk9R9XWd6pd0ZqBpAR3p6EDRj2zPIAbkCtM7RCg4bgBDhhFMmXzcEBpj7~8gvDMLdjmpp9xqGhdJopmGj7qiTZ3MjrjAK9OOQ1627OzguDpryUxncY5BQrEW2TzF8bn1KrsJnUGQ7AaW~PVtR7Q8I4AFGjExYhH2giR-Njas5DZPeRUTLjJK5z98l2iP0MIX1-pXa7~40VXPf3coBPU4wm9D10hGwFhrKHfjCyjNNDu44txReJ3YH24A7XyNU-jkgptEAOuG60HAWNQ6fmugcIaSWwh-kTHXFloEuoK-YQCPt95yyi0TJrfJjx3WY0AbB5Cdg__"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="w-full md:w-[350px] lg:w-[300px] xl:w-[450px] px-7 py-9 lg:ml-[35%] xl:ml-[20%] bg-emerald-50 rounded-[28.67px] shadow-[0px_3.8222219944000244px_15.671110153198242px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-0.96px] outline-emerald-200 inline-flex flex-col justify-start items-start gap-7">
            <div className="w-20 p-2.5 bg-gradient-to-l from-emerald-600 to-green-400 rounded-lg inline-flex justify-center items-center gap-2">
              <div className="justify-start text-white text-sm font-normal font-['Inter'] leading-tight">
                Step 2
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
              <div className="self-stretch inline-flex justify-start items-center gap-3.5">
                <div className="justify-start text-gray-900 text-2xl font-medium font-['Inter'] leading-loose">
                  Book a Tour
                </div>
              </div>
              <div className="self-stretch text-justify justify-start text-slate-600 text-xl font-normal font-['Inter'] leading-7">
                Take the time to schedule an inspection for any properties that
                catch your eye. This will give you a chance to explore the
                features and layout in person, helping you make a more informed
                decision about your potential new home.
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="w-full md:w-[350px] lg:w-[300px] xl:w-[450px] px-7 py-9 left-0 top-[411.37px] bg-emerald-50 rounded-[28.67px] shadow-[0px_3.8222219944000244px_15.671110153198242px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-0.96px] outline-emerald-200 inline-flex flex-col justify-start items-start gap-9">
            <div className="w-20 p-2.5 bg-gradient-to-l from-emerald-600 to-green-400 rounded-lg inline-flex justify-center items-center gap-2">
              <div className="justify-start text-white text-sm font-normal font-['Inter'] leading-tight">
                Step 3
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
              <div className="self-stretch inline-flex justify-start items-center gap-3.5">
                <div className="w-60 justify-start text-gray-900 text-2xl font-medium font-['Inter'] leading-loose">
                  Make an Offer
                </div>
              </div>
              <div className="self-stretch text-justify justify-start text-slate-600 text-xl font-normal font-['Inter'] leading-7">
                To proceed with your transaction, please submit your offer
                directly through the app. This will ensure a smooth and
                efficient process, allowing you to finalize your deal quickly
                and easily.
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="w-full md:w-[350px] lg:w-[300px] xl:w-[450px] px-7 py-9 lg:ml-[35%] xl:ml-[20%] bg-emerald-50 rounded-[28.67px] shadow-[0px_3.8222219944000244px_15.671110153198242px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-0.96px] outline-emerald-200 inline-flex flex-col justify-start items-start gap-9">
            <div className="w-20 p-2.5 bg-gradient-to-l from-emerald-600 to-green-400 rounded-lg inline-flex justify-center items-center gap-2">
              <div className="justify-start text-white text-sm font-normal font-['Inter'] leading-tight">
                Step 4
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
              <div className="self-stretch inline-flex justify-start items-center gap-3.5">
                <div className="justify-start text-gray-900 text-2xl font-medium font-['Inter'] leading-loose">
                  Make Payment{" "}
                </div>
              </div>
              <div className="self-stretch text-justify justify-start text-slate-600 text-xl font-normal font-['Inter'] leading-7">
                To complete your purchase, please make a secure payment. This
                protects your financial information and ensures your order is
                processed smoothly. Thank you for choosing us!
              </div>
            </div>
          </div>
        </div>

        {/* arrows */}

        {/* First arrow */}
        <div className="w-full z-10 absolute hidden lg:block left-[-13%] top-[0px]">
          <svg
            width="100%" // Increased width for a longer arrow
            height="100"
            viewBox="0 0 400 100" // Adjust viewBox to match
            xmlns="http://www.w3.org/2000/svg"
            style={{}}
          >
            <path
              id="arrowPath"
              d="M10 50 L600 50" // Straight line, longer length
              stroke="#34d399"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10, 6"
              markerStart="url(#circlehead)"
              markerEnd="url(#arrowhead)"
            />
            <defs>
              <marker
                id="circlehead"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="10"
                markerHeight="10"
                orient="auto"
              >
                <circle cx="5" cy="5" r="5" fill="#34d399" />
              </marker>
              <marker
                id="arrowhead"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path d="M0,0 L10,5 L0,10 Z" fill="#34d399" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Second arrow */}
        <div className="w-full -z-20 hidden lg:block absolute rotate-180 left-[-5%] lg:top-[190px] xl:top-[130px]">
          <svg
            width="100%"
            height="400"
            viewBox="0 0 100 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-400 150 C -200 20, 300 250, 450 100"
              stroke="#34d399"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10, 6"
              markerStart="url(#arrowEnd)"
              markerEnd="url(#arrowStart)"
            />
            <defs>
              <marker
                id="arrowEnd" // Define a new marker for the start
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-end-reverse" //  or try "auto-start-reverse"
              >
                <path d="M10,0 L0,5 L10,10 Z" fill="#34d399" />
              </marker>
              <marker
                id="arrowStart"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 Z" fill="#34d399" />{" "}
                {/* Tailwind green-400 */}
              </marker>
            </defs>
          </svg>
        </div>

        {/* Third arrow */}
        <div className="w-full hidden lg:block -z-20 absolute rotate-180 left-[0%] -bottom-[120px]">
          <svg
            width="100%"
            height="400"
            viewBox="0 0 100 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-350 100 C -200 0, 350 0, 550 100"
              stroke="#34d399"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10, 6"
              markerStart="url(#arrowStart)"
              markerEnd="url(#arrowEnd)"
            />
            <defs>
              <marker
                id="arrowEnd" // Define a new marker for the start
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto" //  or try "auto-start-reverse"
              >
                <path d="M10,0 L0,5 L10,10 Z" fill="#34d399" />
              </marker>
              <marker
                id="arrowStart"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 Z" fill="#34d399" />{" "}
                {/* Tailwind green-400 */}
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
