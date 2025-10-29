import axios from 'axios';
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CarDetails = () => {
  const car = useLoaderData(); // Retrieve car data from loader
  const [isBooked, setIsBooked] = useState(false); // State to track booking status
  const navigate = useNavigate(); // Hook to navigate after booking

  const handleBooking = () => {
    if (isBooked) {
      // If already booked, don't proceed
      return;
    }

    // Show a toast for booking progress
    toast.info("Booking in progress...");

    // Prepare booking data
    const bookingData = {
      model: car.model,
      dailyRentalPrice: car.dailyRentalPrice,
      features: car.features,
      availability: car.availability,
      description: car.description,
      additionalInfo: car.additionalInfo,
      images: car.images,
    };

    // Use axios to post booking data
    axios.post('https://car-rent-server-side.vercel.app/cars-booking', bookingData)
      .then(response => {
        setIsBooked(true); // Mark the car as booked
        toast.success("Booking Successful!"); // Notify booking success
        navigate('/myBookings'); // Navigate to myBookings page
      })
      .catch(error => {
        console.error("Error booking car:", error);
        toast.error("Booking Failed. Please try again."); // Notify booking failure
      });
  };

  return (
    <div className="py-12 px-4 bg-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#034833] dark:text-[#F26611] mb-3">
            {car.model}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Premium vehicle details at a glance
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* LEFT COLUMN - Car Image (Takes 3 columns) */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex items-center justify-center">
              <div className="relative p-6 w-full">
                <div className="relative overflow-hidden rounded-2xl shadow-xl group" style={{ height: '500px' }}>
                  <img
                    src={car.images}
                    alt={car.model}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F26611]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute top-10 right-10 bg-gradient-to-r from-[#F26611] to-orange-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold text-lg">
                  {car.dailyRentalPrice} BDT/day
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Compact Details (Takes 2 columns) */}
          <div className="lg:col-span-2 space-y-4">

            {/* Availability Badge */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm font-medium opacity-90">Status</p>
                  <p className="text-xl font-bold capitalize">{car.availability}</p>
                </div>
              </div>
            </div>

            {/* Features Card */}
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="font-bold text-gray-800 dark:text-white">Features</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{car.features}</p>
            </div>

            {/* Description Card */}
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6 text-[#F26611] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="font-bold text-gray-800 dark:text-white">Description</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{car.description}</p>
            </div>

            {/* Additional Info Card */}
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold text-gray-800 dark:text-white">Additional Info</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{car.additionalInfo}</p>
            </div>

            {/* Book Now Button */}
            <button
              onClick={handleBooking}
              className={`group relative w-full px-6 py-4 text-lg font-bold rounded-2xl shadow-xl transition-all duration-300 overflow-hidden ${isBooked
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#F26611] to-orange-600 hover:from-orange-600 hover:to-[#F26611] hover:shadow-2xl hover:scale-105'
                }`}
              disabled={isBooked}
            >
              <span className="relative z-10 text-white flex items-center justify-center gap-3">
                {isBooked ? (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Booked Successfully
                  </>
                ) : (
                  <>
                    Book Now
                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Toast Container for react-toastify */}
      <ToastContainer />
    </div>
  );
};

export default CarDetails;