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
    <div className="p-4 mb-10">
      {/* Updated header with larger font size and color */}
      <h2 className="text-3xl text-[#034833] dark:text-[#F59E0B] font-bold mb-6">
        Available Cars
      </h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by model, features or location..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-6 p-2 mr-3 border-2 border-[#034833] rounded"
      />

      {/* Toggle Button for Grid/List View */}
      <button
        onClick={() => setView(view === "grid" ? "list" : "grid")}
        className="mb-6 p-2 text-white rounded bg-[#034833] transition-all duration-300 ease-in-out hover:bg-[#013324]"
      >
        Switch to {view === "grid" ? "List" : "Grid"} View
      </button>

      {/* Available Cars */}
      <div
        className={
          view === "grid"
            ? "grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            : "space-y-6"
        }
      >
        {filteredCars.map((car) => (
          <div
            key={car._id}
            className="flex flex-col justify-between p-4 border border-gray-300 bg-white rounded shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={car.images}
              alt={car.model}
              className="w-full h-48 object-cover mb-4 rounded transition-all duration-500 ease-in-out transform hover:scale-110"
            />

            {/* Car Information */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#89b918] mb-2 transition-all duration-500 ease-in-out">
                {car.model}
              </h3>
              <p>
                <strong>Price:</strong> {car.dailyRentalPrice} BDT/day
              </p>
              <p>
                <strong>Features:</strong> {car.features}
              </p>
              <p>
                <strong>Description:</strong> {car.description}
              </p>
              <p>
                <strong>Location:</strong> {car.additionalInfo}
              </p>
            </div>

            {/* Button */}
            <Link to={`/details/${car._id}`}>
              <button className="relative h-10 w-full origin-top transform rounded-lg border-2 border-[#034833] text-xl text-[#034833] before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-[#034833]">
                Details Info
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCar;
