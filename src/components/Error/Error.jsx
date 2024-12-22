import React from "react";
import errorLottieData from "../../../src/assets/Animation - 1734895774955.json"; // Replace with your Lottie file
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10  bg-blue-50 text-center relative">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-4 left-4 btn btn-primary bg-[#00C1A2] border-none hover:bg-[#0eaa90] text-white px-6 py-3 rounded-lg"
      >
        Back to Home
      </Link>

      {/* Lottie Animation */}
      <div className="w-72 md:w-96 mb-8">
        <Lottie animationData={errorLottieData} />
      </div>

      {/* Error Message */}
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
    </div>
  );
};

export default Error;
