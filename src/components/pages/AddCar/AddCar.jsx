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
    <div>
      <h2 className="text-3xl mt-6 text-[#034833] dark:text-[#F59E0B]  font-bold mb-6 text-center">Add Car</h2>
    <div className="max-w-4xl mx-auto p-8 mb-10 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleAddCar}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Car Model</label>
            <input
              type="text"
              name="model"
              className="w-full p-3 border border-[#02e6a1] rounded-md"
              placeholder="Enter car model"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Daily Rental Price</label>
            <input
              type="number"
              name="dailyRentalPrice"
              className="w-full p-3 border border-[#02e6a1] rounded-md"
              placeholder="Enter daily rental price"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Availability</label>
            <select
              name="availability"
              className="w-full p-3 border border-[#02e6a1] rounded-md"
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
              className="w-full p-3 border border-[#02e6a1] rounded-md"
              placeholder="Enter registration number"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Features</label>
            <input
              type="text"
              name="features"
              className="w-full p-3 border border-[#02e6a1] rounded-md"
              placeholder="e.g., GPS, AC, etc."
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Description</label>
            <textarea
              name="description"
              className="w-full p-3 border border-[#02e6a1] rounded-md"
              placeholder="Enter description"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Images (URL)</label>
            <input
              type="url"
              name="images"
              className="w-full p-3 border border-[#02e6a1] rounded-md"
              placeholder="Enter image URL"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Date Added</label>
            <input
              type="date"
              name="dateAdded"
              className="w-full p-3 border border-[#02e6a1] rounded-md"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block font-semibold mb-2">Additional Information</label>
          <input
            type="text"
            name="additionalInfo"
            className="w-full p-3 border border-[#02e6a1] rounded-md"
            placeholder="Any other information"
          />
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
           className="relative h-10 w-full origin-top transform rounded-lg border-2 bg-[#018d63] border-[#034833] text-xl text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-[#034833]"
          >
            Add Car
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddCar;
