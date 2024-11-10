import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* About Title Section */}
      <div className="text-center pt-8 border-t pb-8">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* About Content Section */}
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <img
          className="w-full md:max-w-[456px] rounded-lg shadow-lg"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-base leading-relaxed">
            Welcome to ShopPlusPlus, where innovation meets convenience in the
            world of online shopping. Our mission is to provide a seamless and
            enjoyable shopping experience for customers around the globe. We
            believe in the power of choice. That's why we've curated a diverse
            selection of products across various categories, ensuring that you
            find exactly what you're looking for. From the latest fashion trends
            to cutting-edge electronics, our catalog is designed to cater to all
            your needs.
          </p>
          <p className="text-base leading-relaxed">
            Our journey began with a simple idea: to revolutionize the way
            people shop online. We are committed to offering high-quality
            products at competitive prices, backed by exceptional customer
            service. Our team works tirelessly to source the best products and
            negotiate the best deals, so you can shop with confidence. We
            understand that shopping online should be easy and hassle-free.
            That's why we've invested in a user-friendly platform that makes
            browsing, purchasing, and receiving your items as smooth as
            possible. With secure payment options and reliable shipping, your
            satisfaction is our top priority.
          </p>
          <b className="text-xl text-gray-800 mt-4">Our Mission</b>
          <p className="text-base leading-relaxed">
            At ShopPlusPlus, our mission is to transform the online shopping
            experience by offering a diverse range of high-quality products at
            competitive prices. We are committed to innovation, convenience, and
            exceptional customer service, ensuring that every interaction with
            our platform is seamless and satisfying. Our goal is to empower our
            customers with choice and confidence, making shopping not just a
            necessity, but a delightful experience.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center py-8">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row gap-6 text-sm mb-20">
        <div className="border px-10 py-8 flex flex-col gap-5 shadow-lg rounded-lg">
          <b className="text-lg font-semibold">Quality Assurance:</b>
          <p className="text-gray-600">
            This involves verifying that all features of the e-commerce platform
            work as intended.
          </p>
        </div>
        <div className="border px-10 py-8 flex flex-col gap-5 shadow-lg rounded-lg">
          <b className="text-lg font-semibold">Convenience:</b>
          <p className="text-gray-600">
            At ShopPlus, we understand that your time is valuable. That's why
            we've designed our platform to offer the utmost convenience in
            online shopping.
          </p>
        </div>
        <div className="border px-10 py-8 flex flex-col gap-5 shadow-lg rounded-lg">
          <b className="text-lg font-semibold">Exceptional Customer Service:</b>
          <p className="text-gray-600">
            At ShopPlus, we pride ourselves on delivering exceptional customer
            service that goes above and beyond expectations.
          </p>
        </div>
      </div>

      {/* Newsletter Box */}
      <NewsletterBox />
    </div>
  );
};

export default About;
