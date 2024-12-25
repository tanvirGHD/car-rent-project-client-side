

import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

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
    axios.post('http://localhost:5000/cars-booking', bookingData)
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
    <div className="p-6 mb-6 max-w-3xl mx-auto border bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Car Details: {car.model}
      </h2>

      <div className="mb-2">
        <img
          src={car.images}
          alt={car.model}
          className="w-full h-auto rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold">Price Per Day</h3>
          <p>{car.dailyRentalPrice} BDT</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Availability</h3>
          <p>{car.availability}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Features</h3>
          <p>{car.features}</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Description</h3>
        <p>{car.description}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Additional Info</h3>
        <p>{car.additionalInfo}</p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleBooking}
          className={`bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ${isBooked ? 'bg-gray-500 cursor-not-allowed' : ''}`}
          disabled={isBooked} // Disable the button if already booked
        >
          {isBooked ? 'Booked' : 'Book Now'}
        </button>
      </div>

      {/* Toast Container for react-toastify */}
      <ToastContainer />
    </div>
  );
};

export default CarDetails;
