import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CarDetails = () => {
  const car = useLoaderData();
  const [isBooked, setIsBooked] = useState(false); // Track booking status
  const navigate = useNavigate(); // Hook to navigate to another route

  const handleBooking = () => {
    if (isBooked) {
      // If the car is already booked, don't send the request again
      return;
    }

    // Show Toast notification
    toast.info("Booking in progress...");

    // Send specific booking data to the backend
    const bookingData = {
      model: car.model,
      dailyRentalPrice: car.dailyRentalPrice,
      features: car.features,
      bookingCount: car.bookingCount,
      availability: car.availability,
      description: car.description,
      additionalInfo: car.additionalInfo,
      images: car.images,
    };

    fetch('http://localhost:5000/cars-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then(res => res.json())
      .then(data => {
        console.log("Booking response:", data);
        setIsBooked(true); // Mark as booked

        // Show Toast notification for booking success
        toast.success("Booking Successful!");

        // Redirect to /myBookings page after successful booking
        navigate('/myBookings');
      })
      .catch(error => {
        console.error("Error booking car:", error);

        // Show Toast notification for booking failure
        toast.error("Booking Failed. Please try again.");
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
        <div>
          <h3 className="text-lg font-semibold">Booking Count</h3>
          <p>{car.bookingCount}</p>
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
          disabled={isBooked} // Disable the button if the car is booked
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
