import React from "react";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const AddCar = () => {
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const handleAddCar = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    axiosSecure
      .post("/cars", initialData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Car data has been successfully added to the database.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        navigate("/availableCar");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "There was an error adding the car data to the database.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 mb-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Car</h2>
      <form onSubmit={handleAddCar}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Car Model</label>
            <input
              type="text"
              name="model"
              className="w-full p-3 border border-[#00C1A2] rounded-md"
              placeholder="Enter car model"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Daily Rental Price</label>
            <input
              type="number"
              name="dailyRentalPrice"
              className="w-full p-3 border border-[#00C1A2] rounded-md"
              placeholder="Enter daily rental price"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Availability</label>
            <select
              name="availability"
              className="w-full p-3 border border-[#00C1A2] rounded-md"
              required
            >
              <option value="">Select availability</option>
              <option value="available">Available</option>
              <option value="notAvailable">Not Available</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2">
              Vehicle Registration Number
            </label>
            <input
              type="text"
              name="registrationNumber"
              className="w-full p-3 border border-[#00C1A2] rounded-md"
              placeholder="Enter registration number"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Features</label>
            <input
              type="text"
              name="features"
              className="w-full p-3 border border-[#00C1A2] rounded-md"
              placeholder="e.g., GPS, AC, etc."
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Description</label>
            <textarea
              name="description"
              className="w-full p-3 border border-[#00C1A2] rounded-md"
              placeholder="Enter description"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Images (URL)</label>
            <input
              type="url"
              name="images"
              className="w-full p-3 border border-[#00C1A2] rounded-md"
              placeholder="Enter image URL"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Date Added</label>
            <input
              type="date"
              name="dateAdded"
              className="w-full p-3 border border-[#00C1A2] rounded-md"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block font-semibold mb-2">Additional Information</label>
          <input
            type="text"
            name="additionalInfo"
            className="w-full p-3 border border-[#00C1A2] rounded-md"
            placeholder="Any other information"
          />
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-[#00C1A2] text-white w-full px-6 py-2 rounded-md hover:bg-[#00A18D]"
          >
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
