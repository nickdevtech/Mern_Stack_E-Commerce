import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Easy Exchange Policy */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              className="w-16 mb-4"
              src={assets.exchange_icon}
              alt="Easy Exchange"
            />
            <p className="text-lg font-semibold text-gray-800">
              Easy Exchange Policy
            </p>
            <p className="text-gray-500">
              We Offer Hassle-Free Exchange Policy
            </p>
          </div>

          {/* 7 Days Return Policy */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              className="w-16 mb-4"
              src={assets.quality_icon}
              alt="7 Days Return"
            />
            <p className="text-lg font-semibold text-gray-800">
              7 Days Return Policy
            </p>
            <p className="text-gray-500">
              We Provide 7 Days Free Return Policy
            </p>
          </div>

          {/* 24/7 Customer Support */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              className="w-16 mb-4"
              src={assets.support_img}
              alt="Customer Support"
            />
            <p className="text-lg font-semibold text-gray-800">
              24/7 Customer Support
            </p>
            <p className="text-gray-500">We Provide 24/7 Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
