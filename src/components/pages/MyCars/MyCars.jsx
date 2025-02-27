import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const MyCars = () => {
  const [cars, setCars] = useState([]);
  const [sortOption, setSortOption] = useState("dateAsc"); // Default sorting option
  const axiosSecure = useAxiosSecure();

  // Fetch cars from the backend using axios
  useEffect(() => {
    axiosSecure
      .get("/cars", {})
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
      });
  }, []);

  // Handle delete with confirmation
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://car-rent-server-side.vercel.app/cars/${id}`)
          .then(() => {
            setCars((prevCars) => prevCars.filter((car) => car._id !== id));
            Swal.fire(
              "Deleted!",
              "The car has been deleted successfully.",
              "success"
            );
          })
          .catch((error) => {
            console.error("Error deleting car:", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the car.",
              "error"
            );
          });
      }
    });
  };

  // Sort cars based on selected option
  const sortCars = (cars, option) => {
    switch (option) {
      case "dateAsc":
        return [...cars].sort(
          (a, b) => new Date(a.dateAdded) - new Date(b.dateAdded)
        );
      case "dateDesc":
        return [...cars].sort(
          (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
        );
      case "priceAsc":
        return [...cars].sort(
          (a, b) => a.dailyRentalPrice - b.dailyRentalPrice
        );
      case "priceDesc":
        return [...cars].sort(
          (a, b) => b.dailyRentalPrice - a.dailyRentalPrice
        );
      default:
        return cars;
    }
  };

  // Sorted cars
  const sortedCars = sortCars(cars, sortOption);

  return (
    <div className="px-4 py-6">
      <h2 className="text-3xl font-bold text-[#034833] dark:text-[#F59E0B] mb-4">
        My Cars
      </h2>

      {/* Sorting Dropdown */}
      <div className="mb-4">
        <label className="mr-2 text-lg dark:text-white">Sort by:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="dateAsc">Date Added (Oldest First)</option>
          <option value="dateDesc">Date Added (Newest First)</option>
          <option value="priceAsc">Price (Lowest First)</option>
          <option value="priceDesc">Price (Highest First)</option>
        </select>
      </div>

      {/* Display Cars Table */}
      {cars.length === 0 ? (
        <div className="flex items-center justify-center h-64 bg-green-100 rounded-lg shadow-md">
          <p className="text-gray-600 text-lg">
            No cars added yet.{" "}
            <Link
              to="/addCar"
              className="text-blue-500 font-semibold hover:underline"
            >
              Add a car
            </Link>
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#89B918] dark:bg-[#034833] text-white">
                <th className="px-4 py-2">Car Image</th>
                <th className="px-4 py-2">Car Model</th>
                <th className="px-4 py-2">Daily Rental Price</th>
                <th className="px-4 py-2">Availability</th>
                <th className="px-4 py-2">Date Added</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedCars.map((car) => (
                <tr
                  key={car._id}
                  className="hover:bg-[#c3da8b] dark:text-white dark:hover:bg-[#014e38]"
                >
                  <td className="border border-black dark:border-white px-4 py-2">
                    <img
                      src={car.images}
                      alt={car.model}
                      className="w-24 h-16 object-cover"
                    />
                  </td>
                  <td className="border border-black dark:border-white px-4 py-2">
                    {car.model}
                  </td>
                  <td className="border border-black dark:border-white px-4 py-2">
                    {car.dailyRentalPrice} BDT
                  </td>
                  <td className="border border-black dark:border-white px-4 py-2">
                    {car.availability}
                  </td>
                  <td className="border border-black dark:border-white px-4 py-2">
                    {car.dateAdded}
                  </td>
                  <td className="border border-black dark:border-white px-4 py-2 flex justify-between gap-2">
                    <Link to={`/updateCar/${car._id}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(car._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCars;