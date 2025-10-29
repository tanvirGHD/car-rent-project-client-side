import axios from "axios";
import { useEffect, useState } from "react";

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
  const recentCars = Array.isArray(cars) ? cars.slice(-8) : [];

  return (
    <div className="py-16 px-4 bg-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-[#034833] dark:text-[#F26611] font-extrabold mb-4">
            Recent Listings
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our latest additions to the fleet - premium vehicles ready for your journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentCars.map((car) => (
            <div
              key={car._id}
              className="group bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-700"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={car.images}
                  alt={car.model}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Availability Badge */}
                <span
                  className={`absolute top-4 right-4 px-3 py-1.5 text-white text-xs font-semibold rounded-full shadow-lg ${car.availability === "available"
                    ? "bg-gradient-to-r from-green-500 to-green-600"
                    : "bg-gradient-to-r from-red-500 to-red-600"
                    }`}
                >
                  {car.availability}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-[#F26611] dark:text-[#F26611] truncate">
                  {car.model}
                </h3>

                <div className="flex items-center justify-between text-sm">
                  <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {car.dateAdded}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-[#034833] dark:text-white">
                      ${car.dailyRentalPrice}
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/day</span>
                    </p>
                    {/* <button className="px-4 py-2 bg-gradient-to-r from-[#F26611] to-[#e05a0a] text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      View
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentListing;