
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
    <div className="relative w-full h-[220px] md:h-[500px]">
      {/* Carousel Items */}
      <div className="carousel-container w-full overflow-hidden relative h-full">
        <div
          className="carousel-wrapper flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${(activeItem - 1) * 100}%)`,
          }}
        >
          {/* Repeating Carousel Items */}
          {["14.jpg", "9.jpg", "15.jpg", "16.jpg"].map((img, index) => (
            <div
              key={index}
              className="carousel-item w-full h-full flex-shrink-0"
            >
              <img
                src={`/banner-img/${img}`}
                className="w-full h-full object-cover"
                style={{ aspectRatio: "16/9" }}
                alt={`Premium Car ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
        <div className="text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-[#89b918]">
            Drive Your Dreams Today!
          </h1>
          <button className="py-2 px-4 md:px-6 text-sm rounded-full text-white bg-[#034833] hover:bg-[#013324]">
            <Link to="/availableCar">View Available Cars</Link>
          </button>
        </div>
      </div>

      {/* Carousel Navigation Buttons */}
      <div className="flex w-full justify-center gap-2 py-2">
        {[1, 2, 3, 4].map((item) => (
          <button
            key={item}
            onClick={() => setActiveItem(item)}
            className={`btn btn-xs ${activeItem === item ? "btn-active" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
