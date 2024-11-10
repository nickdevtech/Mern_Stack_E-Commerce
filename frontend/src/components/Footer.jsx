import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-white text-black w-full ">
      <div className="flex flex-cols grid-cols-3  sm:grid  gap-14 my-2 mt-10 px-4 sm:px-16 text-sm w-full">
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <img className="mb-5 w-32" src={assets.logo} alt="ShopPlus Logo" />
          <p className="w-full md:w-4/5 text-gray-800 leading-relaxed">
            At ShopPlus, we believe in delivering exceptional service and
            products to our customers. Whether you're shopping for the latest
            gadgets, stylish clothing, or home essentials, we have something for
            everyone.
          </p>
        </div>

        {/* Company Information */}
        <div>
          <h1 className="text-xl font-bold mb-4 text-black">COMPANY</h1>
          <ul className="flex flex-col gap-2 text-gray-800">
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">
              Delivery
            </li>
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <p className="text-xl font-medium mb-5 text-black">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-800">
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">
              +112-467-575
            </li>
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">
              ShopPlus@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div>
        <hr className="border-gray-300 my-6" />
        <p className="py-5 text-sm text-center text-gray-800">
          © Copyright 2024 ShopPlus.com | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
