import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center py-10 px-4 sm:px-8 bg-gray-50 rounded-xl shadow-lg">
      {/* Title and Description */}
      <p className="text-2xl font-semibold text-gray-800">
        Subscribe Now & Get 40% Off
      </p>
      <p className="text-gray-500 mt-3 max-w-md mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, beatae?
      </p>

      {/* Subscription Form */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-2/3 md:w-1/2 mx-auto mt-6 flex items-center gap-4 border rounded-lg overflow-hidden shadow-md border-gray-300"
      >
        {/* Email Input */}
        <input
          className="w-full py-3 px-4 border-none outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 placeholder-gray-500 text-gray-800 text-sm"
          type="email"
          placeholder="Enter your email"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white text-xs font-medium py-3 px-6 md:px-10 rounded-lg transition-all duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
