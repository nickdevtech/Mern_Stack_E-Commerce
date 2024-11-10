import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center text-3xl font-bold pt-10 border-t border-gray-300">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-lg"
          src={assets.contact_img}
          alt="Contact Us"
        />
        <div className="flex flex-col justify-center items-start gap-4 md:gap-6">
          <p className="font-semibold text-xl text-gray-800">Our Store</p>
          <p className="text-gray-700">
            2789 New York, <br /> Washington
          </p>
          <p className="text-gray-600">
            Tel: 353+757 <br /> ShopPlus@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-800">
            Careers at ShopPlus
          </p>
          <button className="border border-black bg-transparent text-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300 rounded-lg shadow-sm hover:shadow-md">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
