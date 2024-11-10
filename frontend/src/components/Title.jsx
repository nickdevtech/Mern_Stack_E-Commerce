import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <p className="text-gray-600 text-xl sm:text-2xl font-semibold">
        {text1} <span className="text-gray-800 font-bold">{text2}</span>
      </p>
      <div className="w-16 sm:w-20 h-[2px] bg-black"></div>
    </div>
  );
};

export default Title;
