import React from "react";
import { Apple, PlayCircle } from "lucide-react"; // For App Store and Google Play icons
import { assets } from "../../assets/assets";

const SpacevillaApp = () => {
  return (
    <div className="bg-gray-50 w-full h-[957px] py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section: Text and App Store Buttons */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Get started with the{" "}
            <span className="text-gray-900">Spacevilla App</span>
          </h2>
          <p className="text-gray-600 sm:text-2xl w-[80%]">
            Building a Trust-Based, Inclusive, and Digitized Ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <div className="w-[50%]">
              <a
                href="#" // Replace with your App Store link
                className="gap-2 hover:bg-gray-800 transition-colors"
              >
                <img
                  src={assets.appStore}
                  alt=""
                  className="w-[70%] h-[90px]"
                />
              </a>
              <a
                href="#" // Replace with your Google Play link
                className="   gap-2 hover:bg-gray-900 transition-colors"
              >
                <img
                  src={assets.googlePlay}
                  alt=""
                  className="w-[80%] h-[90px]"
                />
              </a>
            </div>
            <img
              src={assets.qr} // Replace with your actual phone image URL
              alt="Spacevilla App on Phone"
              className="w-[170px] h-[170px] rounded-3xl shadow-2xl" //Added shadow
            />
          </div>
        </div>

        <div className="">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: "46%",
              left: "35%",
              transform: "rotate(30deg)",
            }}
          >
            <defs>
              <marker
                id="arrowhead"
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
            <path
              d="M10 10 C 50 100, 90 -80, 150 50"
              stroke="#34d399"
              strokeWidth="6"
              fill="none"
              strokeDasharray="10, 6"
              markerEnd="url(#arrowhead)"
            />
          </svg>
        </div>

        {/* QR Code and Link */}
        <div className="absolute bottom-[30%] left-[30%] border border-green-500 shadow-green-400 bg-white/90 backdrop-blur-md p-4 rounded-full shadow-lg flex flex-col items-center gap-2">
          {/* The QR code would typically be an <img> tag with the QR code source. */}

          <a
            href="#" // Replace with your app download link (could be a universal link)
            className="text-green-500 text-[20px] font-medium hover:text-green-700 transition-colors text-center"
          >
            Scan the QR Code to download the Spacevilla App
          </a>
        </div>
        <div className="md:w-[40%] mt-12 md:mt-0 hidden md:flex justify-center absolute right-[75px] top-0">
          {/* Placeholder for the 3D house image.  Since we can't directly render a 3D model,
                                we'll use a regular image.  You'd replace this with your actual 3D rendering solution. */}
          <img
            src={assets.iphoneApp} // Replace with your image URL
            alt="3D House"
            className="rounded-lg "
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SpacevillaApp;
