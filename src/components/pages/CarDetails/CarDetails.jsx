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
    <div>
      <h2 className="text-3xl font-bold text-[#034833] my-6 text-center">Car Details</h2>
      <div className="p-6 mb-6 max-w-3xl mx-auto border bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center text-[#108562]">
          Car Model: {car.model}
        </h2>

        <div className="mb-2">
          <img
            src={car.images}
            alt={car.model}
            className="w-full h-auto rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold flex items-center">
              <img src="https://img.icons8.com/ios/50/000000/money.png" alt="Price Icon" className="w-6 h-6 mr-2" />
              Price Per Day
            </h3>
            <p>{car.dailyRentalPrice} BDT</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold flex items-center">
              <img src="https://img.icons8.com/ios/50/000000/checked-checkbox.png" alt="Availability Icon" className="w-6 h-6 mr-2" />
              Availability
            </h3>
            <p>{car.availability}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold flex items-center">
              <img src="https://img.icons8.com/ios/50/000000/settings.png" alt="Features Icon" className="w-6 h-6 mr-2" />
              Features
            </h3>
            <p>{car.features}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold flex items-center">
              <img src="https://img.icons8.com/?size=100&id=SSNN1cs9I7OU&format=png&color=000000" alt="Description Icon" className="w-6 h-6 mr-2" />
              Description
            </h3>
            <p>{car.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold flex items-center">
              <img src="https://img.icons8.com/ios/50/000000/info.png" alt="Additional Info Icon" className="w-6 h-6 mr-2" />
              Additional Info
            </h3>
            <p>{car.additionalInfo}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleBooking}
            className={`relative h-10 w-full origin-top transform rounded-lg border-2 border-[#00C1A2] text-xl text-[#00C1A2] before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-[#00C1A2] ${isBooked ? 'bg-gray-500 cursor-not-allowed' : ''}`}
            disabled={isBooked} // Disable the button if already booked
          >
            {isBooked ? 'Booked' : 'Book Now'}
          </button>
        </div>

        {/* Toast Container for react-toastify */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default CarDetails;
