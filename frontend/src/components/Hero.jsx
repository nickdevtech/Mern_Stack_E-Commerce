import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-gray-100 via-white to-gray-100 py-16 sm:py-24">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start px-6 sm:px-12">
        <div className="text-[#414141] text-center sm:text-left">
          {/* Section Title */}
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-6">
            <p className="w-12 sm:w-14 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm sm:text-base text-gray-700 uppercase">
              OUR BESTSELLERS
            </p>
          </div>
          {/* Main Heading */}
          <h1 className="font-prata text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-800 mb-4 sm:mb-6">
            Latest Products
          </h1>
          {/* Shop Now Section */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <p className="font-semibold text-sm sm:text-base text-gray-800 hover:text-[#414141] transition-colors duration-300">
              SHOP NOW
            </p>
            <p className="w-8 sm:w-10 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full sm:w-1/2 mt-8 sm:mt-0 flex justify-center">
        <img
          className="w-full h-auto max-w-full rounded-lg shadow-xl transform transition duration-300 hover:scale-105"
          src={assets.hero_img}
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
