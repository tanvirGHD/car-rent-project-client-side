

import axios from "axios";
import React, { useEffect, useState } from "react";


const RecentListing = () => {
  const [cars, setCars] = useState([]);


  useEffect(() => {
    axios.get("https://car-rent-server-side.vercel.app/cars")
      .then((response) => {
        const data = response.data;
        if (Array.isArray(data)) {
          setCars(data);
        } else if (data.cars && Array.isArray(data.cars)) {
          setCars(data.cars);
        } else {
          console.error("Unexpected data format:", data);
          setCars([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
      });
  }, []);

  // Safely handle slicing only if cars is an array
  const recentCars = Array.isArray(cars) ? cars.slice(-6) : [];

  return (
    <div>
      <h2 className="text-3xl text-[#034833]  font-bold mb-10">
        Recent Listings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {recentCars.map((car) => (
          <div
            key={car._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={car.images}
              alt={car.model}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-2xl font-semibold text-[#89b918]">{car.model}</h3>
              <p className="text-sm text-gray-500">
                Added: {car.dateAdded}
              </p>
              <p className="text-lg font-semibold text-gray-600">{`$${car.dailyRentalPrice}/day`}</p>
              <span
                className={`inline-block px-3 py-1 text-white text-sm rounded-xl mt-2 ${
                  car.availability === "available"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {car.availability}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentListing;
