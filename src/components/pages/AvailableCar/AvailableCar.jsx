import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvailableCar = () => {
  const [cars, setCars] = useState([]);
  const [booking, setBooking] = useState([]);
  const [view, setView] = useState("grid");
  const [searchQuery, setSearchQuery] = useState(""); // For search functionality

  // Fetching the car data
  useEffect(() => {
    axios
      .get("https://car-rent-server-side.vercel.app/cars")
      .then((response) => {
        console.log(response.data); // Log the response data to ensure it's an array
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
      });
  }, []);

  // Search functionality
  const filteredCars = Array.isArray(cars)
    ? cars.filter(
      (car) =>
        car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.features.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.additionalInfo.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  return (
    <div className="py-16 px-4 bg-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#034833] dark:text-[#F26611] mb-4">
            Available Cars
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Browse our premium collection of vehicles ready for your journey
          </p>
        </div>

        {/* Search and View Toggle Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search by model, features or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-[#F26611] focus:outline-none shadow-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setView(view === "grid" ? "list" : "grid")}
            className="px-8 py-4 bg-gradient-to-r from-[#F26611] to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2 justify-center">
              {view === "grid" ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  List View
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Grid View
                </>
              )}
            </span>
          </button>
        </div>

        {/* Available Cars */}
        <div
          className={
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              : "space-y-6 max-w-4xl mx-auto"
          }
        >
          {filteredCars.map((car) => (
            <div
              key={car._id}
              className="group relative flex flex-col justify-between bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={car.images}
                  alt={car.model}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#F26611] to-orange-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  {car.dailyRentalPrice} BDT/day
                </div>
              </div>

              {/* Car Information */}
              <div className="p-6 space-y-3 flex-1">
                <h3 className="text-2xl font-bold text-[#F26611] group-hover:text-orange-600 transition-colors duration-300">
                  {car.model}
                </h3>

                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-gray-900 dark:text-white min-w-fit">Features:</span>
                    <span>{car.features}</span>
                  </p>
                  <p className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-gray-900 dark:text-white min-w-fit">Description:</span>
                    <span>{car.description}</span>
                  </p>
                  <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-[#F26611] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-gray-900 dark:text-white">Location:</span>
                    <span>{car.additionalInfo}</span>
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="p-6 pt-0">
                <Link to={`/details/${car._id}`} className="block">
                  <button className="relative w-full py-3 px-6 bg-gradient-to-r from-[#F26611] to-orange-600 text-white font-bold rounded-xl overflow-hidden group/btn shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Details
                      <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-[#F26611] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </Link>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F26611]/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableCar;