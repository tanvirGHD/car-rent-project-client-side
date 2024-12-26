import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [activeItem, setActiveItem] = useState(1);

  // Change active item every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev === 4 ? 1 : prev + 1)); // Loop back to 1 after item 4
    }, 2000); // 2000ms = 2 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative w-full">
      {/* Carousel Items */}
      <div
        className="carousel-container w-full overflow-hidden relative"
        style={{ width: "100%", height: "100%" }}
      >
        <div
          className="carousel-wrapper w-full flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${(activeItem - 1) * 100}%)`,
          }}
        >
          {/* Repeating Carousel Items for Seamless Looping */}
          <div className="carousel-item w-full">
            <img src="/banner-img/1.png" className="w-full" alt="Premium Car 1" />
          </div>
          <div className="carousel-item w-full">
            <img src="/banner-img/2.png" className="w-full" alt="Premium Car 2" />
          </div>
          <div className="carousel-item w-full">
            <img src="/banner-img/3.png" className="w-full" alt="Premium Car 3" />
          </div>
          <div className="carousel-item w-full">
            <img src="/banner-img/1.png" className="w-full" alt="Premium Car 1" />
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl font-bold mb-4">Drive Your Dreams Today!</h1>
          <Link
            to="/availableCar"
            className="btn btn-primary py-2 px-6 text-lg rounded-full bg-[#179983] hover:bg-[#179983]"
          >
            View Available Cars
          </Link>
        </div>
      </div>

      {/* Carousel Navigation Buttons */}
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
