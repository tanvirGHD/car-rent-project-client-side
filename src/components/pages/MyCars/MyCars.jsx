import React, { useState, useEffect } from "react";

const MyCars = () => {
  const [cars, setCars] = useState([]);
  const [sortOption, setSortOption] = useState("dateAsc"); // Default sorting by date (Oldest First)

  useEffect(() => {
    // Fetch the cars from the backend
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error fetching cars:", err));
  }, []);

  // Function to sort cars based on the selected option
  const sortCars = (cars, option) => {
    switch (option) {
      case "dateAsc":
        return cars.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
      case "dateDesc":
        return cars.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      case "priceAsc":
        return cars.sort((a, b) => a.dailyRentalPrice - b.dailyRentalPrice);
      case "priceDesc":
        return cars.sort((a, b) => b.dailyRentalPrice - a.dailyRentalPrice);
      default:
        return cars;
    }
  };

  // Apply the sorting function
  const sortedCars = sortCars([...cars], sortOption);

  const handleUpdate = (carId) => {
    console.log("Update car with ID:", carId);
    // Add update logic here (trigger modal or form)
  };

  const handleDelete = (carId) => {
    console.log("Delete car with ID:", carId);
    // Add delete logic here (confirmation and remove car)
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">My Cars</h2>

      {/* Sorting Dropdown */}
      <div className="mb-4">
        <label className="mr-2 text-lg">Sort by:</label>
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
        <div>
          <p>No cars added yet. <a href="/add-car" className="text-blue-500">Add a car</a></p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
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
                <tr key={car._id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">
                    <img src={car.images} alt={car.model} className="w-24 h-16 object-cover" />
                  </td>
                  <td className="border px-4 py-2">{car.model}</td>
                  <td className="border px-4 py-2">{car.dailyRentalPrice} BDT</td>
                  <td className="border px-4 py-2">{car.availability}</td>
                  <td className="border px-4 py-2">
                    {new Date(car.dateAdded).toLocaleDateString()} {/* Dynamically formatted date */}
                  </td>
                  <td className="border px-4 py-2 flex justify-between gap-2">
                    <button
                      onClick={() => handleUpdate(car._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                    >
                      Update
                    </button>
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
