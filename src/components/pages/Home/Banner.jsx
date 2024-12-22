import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Video */}
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/8vPpJIqGMBI?autoplay=1&controls=0&loop=1&playlist=8vPpJIqGMBI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
      </div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content: Heading and Button */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        {/* Motivational Heading */}
        <Marquee pauseOnHover={true} className="space-x-4">
          <h1 className="text-5xl font-bold mb-6 shadow-lg">
            Drive Your Dreams Today!
          </h1>
        </Marquee>

        {/* Call-to-Action Button */}
        <Link
          to="/availableCar"
          className="bg-blue-500 text-white py-3 px-8 rounded-lg text-xl font-semibold shadow-md hover:bg-blue-600 transition duration-300"
        >
          View Available Cars
        </Link>
      </div>
    </section>
  );
};

export default Banner;
