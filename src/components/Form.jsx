import React, { useState } from "react";
import { assets } from "../assets/assets";
import { X } from "lucide-react";

const Form = ({ title = "Call Back", setIsVisible }) => {
  return (
    <div className="fixed right-4 lg:top-[700px] xl:top-32 xl:right-[400px] inset-0 z-50 flex items-center justify-end">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/10 "
        onClick={() => setIsVisible(false)}
      ></div>

      {/* Modal */}
      <div className="relative z-50 w-[300px] h-[550px] sm:w-[400px] bg-white shadow-lg rounded-md overflow-hidden">
        {/* Green Header */}
        <div className="bg-[#0A5F2C] h-14 bg-feather bg-cover text-white p-4 relative">
          <div
            className="absolute inset-0 bg-[#0A5F2C]"
            style={{ opacity: 0.6 }}
          ></div>
          <h2 className="text-white text-md absolute ">{title}</h2>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-4 text-white hover:text-white/80"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        {/* Form Content */}
        <div className="bg-white p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-[#4CAF50] rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-sm font-medium">
              Welcome to Spaceville! Kindly complete the form below to get in
              touch with us.
            </h2>
          </div>

          <form className="space-y-4">
            <div>
              <label className="text-gray-600 flex items-center gap-2">
                <span className="text-[#4CAF50]">→</span> Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                // value={formData.name}
                // onChange={handleChange}
                className="w-full border-b border-dotted border-gray-300 focus:outline-none focus:border-[#4CAF50] px-0 py-2"
              />
            </div>

            <div>
              <label className="text-gray-600 flex items-center gap-2">
                <span className="text-[#4CAF50]">→</span> Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                // value={formData.email}
                // onChange={handleChange}
                className="w-full border-b border-dotted border-gray-300 focus:outline-none focus:border-[#4CAF50] px-0 py-2"
              />
            </div>

            <div>
              <label className="text-gray-600 flex items-center gap-2">
                <span className="text-[#4CAF50]">→</span> Phone
              </label>
              <div className="flex items-center border-b border-dotted border-gray-300">
                <div className="flex items-center gap-1 text-gray-500 pr-2">
                  <img
                    src="https://flagcdn.com/16x12/ng.png"
                    alt="Country flag"
                    className="h-4"
                  />
                  <span className="text-xs">+234</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  //   value={formData.phone}
                  //   onChange={handleChange}
                  className="border-none focus:outline-none px-0 py-2 flex-1"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#0A5F2C] hover:bg-[#0A5F2C]/90 text-white rounded-md py-2"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
