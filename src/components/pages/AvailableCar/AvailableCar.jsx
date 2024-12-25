
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const AvailableCar = () => {
  const [cars, setCars] = useState([]);
  const [booking, setBooking] = useState([])
  const [view, setView] = useState("grid"); // Grid or List view
  const [searchQuery, setSearchQuery] = useState(""); // For search functionality

  const axiosSecure = useAxiosSecure()
  // Fetching the car data
  useEffect(() => {
    axiosSecure.get("/cars")
      .then((response) => {
        setCars(response.data);  
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
      });
  }, []);


  // Search functionality
  const filteredCars = cars.filter(
    (car) =>
      car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.features.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.additionalInfo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Updated header with larger font size and color */}
      <h2 className="text-4xl text-[#00C1A2] mb-6">Available Cars</h2>

      {/* Search Bar with updated color */}
      <input
        type="text"
        placeholder="Search by model, features or location..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-6 p-2 mr-3 border-2 border-[#00C1A2] rounded"
      />

      {/* Toggle Button for Grid/List View with updated color */}
      <button
        onClick={() => setView(view === "grid" ? "list" : "grid")}
        className="mb-6 p-2 text-white rounded bg-[#00C1A2] transition-all duration-300 ease-in-out hover:bg-teal-500"
      >
        Switch to {view === "grid" ? "List" : "Grid"} View
      </button>

      {/* Available Cars */}
      <div
        className={
          view === "grid"
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-6"
        }
      >
        {filteredCars.map((car) => (
          <div
            key={car._id}
            className="p-4 border border-gray-300  bg-white rounded shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out transform hover:scale-105"
          >
            <img
              src={car.images}
              alt={car.model}
              className="w-full h-48 object-cover mb-4 rounded transition-all duration-500 ease-in-out transform hover:scale-110"
            />
            <h3 className="text-xl text-[#00C1A2] mb-2 transition-all duration-500 ease-in-out">
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
            <Link to={`/details/${car._id}`}>
              <button className="bg-[#00C1A2] text-white py-2 px-4 rounded mt-4 w-full transition-all duration-500 ease-in-out transform hover:scale-105">
                Details Information
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCar;
