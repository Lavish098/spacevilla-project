import React from "react";
import { assets } from "../../assets/assets";

const VillaSphere = () => {
  return (
    <div className="relative w-full h-[940px] mb-[300px] bg-hero-pattern3 bg-cover bg-no-repeat text-white font-sans">
      <div className="bg-black w-full h-[100%] opacity-50 absolute"></div>

      {/* Main Section */}
      <div className="container mx-auto px-4 z-10 py-12 md:py-20 flex flex-col items-center justify-center">
        <div className="md:w-[80%] z-10 space-y-6 flex flex-col items-center justify-center">
          <div className="bg-[#039855] text-white flex items-center justify-center px-4 py-4 rounded-md w-32 text-center">
            <h2>Feature</h2>
          </div>
          <h1 className="text-4xl font-bold">
            VillaSphere - The All-in-One Real Estate Platform
          </h1>
          <div className="w-[75%] ">
            <p className="text-gray-300 text-[20px] leading-8">
              VillaSphere is the backbone of Spacevilla 2.0. It's where users
              can find everything they need - from renting a property to booking
              a shortlet, ordering food, or even investing in real estate. With
              AI-driven personalization, VillaSphere ensures that every user
              gets a tailored experience.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Boxes Section */}
      <div className="container mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Real Estate Hub Box */}
        <div className="bg-white backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
          <h2 className="text-2xl text-[#039855] font-semibold mb-4 flex items-center">
            Real Estate Hub <span className="ml-2 text-green-400"> 🏡</span>
          </h2>
          <p className="text-gray-900">
            A Real Estate & Lifestyle Super App Ecosystem built on trust,
            transparency, and inclusivity. We're leveraging cutting-edge
            technologies like AI, Blockchain, VR, and Cloud to transform the
            real estate experience.
          </p>
        </div>

        {/* On-Demand Services Box */}
        <div className="bg-white backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
          <h2 className="text-2xl text-[#039855] font-semibold mb-4 flex items-center">
            On-Demand Services
          </h2>
          <p className="text-gray-900">
            Access a wide range of on-demand services directly within the app.
            Order food delivery, book transportation, and connect with trusted
            home service providers - all at your fingertips.
          </p>
        </div>

        {/* Investment Opportunities Box */}
        <div className="bg-white backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
          <h2 className="text-2xl text-[#039855]  font-semibold mb-4 flex items-center">
            Investment Opportunities
            <span className="ml-2 text-yellow-400"> 💰</span>
          </h2>
          <p className="text-gray-900">
            Unlock exciting investment opportunities. Explore fractional
            ownership and crowdfunding options, and grow your real estate
            portfolio.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center absolute right-3 md:top-[90%] lg:top-[600px]">
        <img
          src={assets.villa}
          alt="3D House"
          className="rounded-lg "
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default VillaSphere;
