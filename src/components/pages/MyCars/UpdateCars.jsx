import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios"; // Import axios

const UpdateCars = () => {
  const navigate = useNavigate();
  const cars = useLoaderData();
  const {
    _id,
    model,
    dailyRentalPrice,
    availability,
    registrationNumber,
    features,
    bookingCount,
    description,
    images,
    additionalInfo,
  } = cars;

  const handleUpdateCar = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    // Using axios to update the car data
    axios
      .put(`https://car-rent-server-side.vercel.app/cars/${_id}`, initialData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Car Updated",
          text: "Your car details have been successfully updated!",
        }).then(() => {
          navigate("/myCars");
        });
      })
      .catch((err) => {
        console.error("Error updating car:", err);
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Something went wrong while updating car details.",
        });
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center my-7 text-[#034833]">Update My Cars</h2>
    <div className="max-w-4xl mx-auto p-8 mb-10 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleUpdateCar}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Car Model</label>
            <input
              type="text"
              name="model"
              className="w-full p-3 border border-[#00C1A2] rounded-md"
              placeholder="Enter car model"
              defaultValue={model}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">
              Daily Rental Price
            </label>
            <input
              type="number"
              name="dailyRentalPrice"
              className="w-full p-3 border border-[#00C1A2] rounded-md"
              placeholder="Enter daily rental price"
              defaultValue={dailyRentalPrice}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Availability</label>
            <select
              name="availability"
              className="w-full p-3 border border-[#00C1A2] rounded-md"
              defaultValue={availability}
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
              defaultValue={registrationNumber}
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
              defaultValue={features}
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Description</label>
            <textarea
              name="description"
              className="w-full p-3 border border-[#00C1A2] rounded-md"
              placeholder="Enter description"
              defaultValue={description}
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Images</label>
            <input
              type="url"
              name="images"
              className="w-full p-3 border border-[#00C1A2] rounded-md"
              placeholder="Enter image URL"
              defaultValue={images}
            />
          </div>
        </div>
        <div className="w-full">
          <label className="block font-semibold mb-2">
            Additional Information
          </label>
          <input
            type="text"
            name="additionalInfo"
            className="w-full p-3 border border-[#00C1A2] rounded-md"
            placeholder="Any other information"
            defaultValue={additionalInfo}
          />
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="relative h-10 w-full origin-top transform rounded-lg border-2 border-[#00C1A2] text-xl text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 bg-[#00C1A2] hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-[#034833]"
          >
            Update
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateCars;
