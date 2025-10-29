// import React from "react";
// import Swal from "sweetalert2";

// import { useNavigate } from "react-router-dom";
// import useAxiosSecure from "../../../hook/useAxiosSecure";

// const AddCar = () => {
//   const axiosSecure = useAxiosSecure();

//   const navigate = useNavigate();
//   const handleAddCar = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const initialData = Object.fromEntries(formData.entries());

//     axiosSecure
//       .post("/cars", initialData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         if (response.data.insertedId) {
//           Swal.fire({
//             title: "Success!",
//             text: "Car data has been successfully added to the database.",
//             icon: "success",
//             confirmButtonText: "OK",
//           });
//         }
//         navigate("/availableCar");
//       })
//       .catch((error) => {
//         Swal.fire({
//           title: "Error!",
//           text: "There was an error adding the car data to the database.",
//           icon: "error",
//           confirmButtonText: "Try Again",
//         });
//       });
//   };

//   return (
//     <div>
//       <h2 className="text-3xl mt-6 text-[#034833] dark:text-[#F59E0B]  font-bold mb-6 text-center">Add Car</h2>
//     <div className="max-w-4xl mx-auto p-8 mb-10 bg-white shadow-lg rounded-lg">
//       <form onSubmit={handleAddCar}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block font-semibold mb-2">Car Model</label>
//             <input
//               type="text"
//               name="model"
//               className="w-full p-3 border border-[#02e6a1] rounded-md"
//               placeholder="Enter car model"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-semibold mb-2">Daily Rental Price</label>
//             <input
//               type="number"
//               name="dailyRentalPrice"
//               className="w-full p-3 border border-[#02e6a1] rounded-md"
//               placeholder="Enter daily rental price"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-semibold mb-2">Availability</label>
//             <select
//               name="availability"
//               className="w-full p-3 border border-[#02e6a1] rounded-md"
//               required
//             >
//               <option value="">Select availability</option>
//               <option value="available">Available</option>
//               <option value="notAvailable">Not Available</option>
//             </select>
//           </div>
//           <div>
//             <label className="block font-semibold mb-2">
//               Vehicle Registration Number
//             </label>
//             <input
//               type="text"
//               name="registrationNumber"
//               className="w-full p-3 border border-[#02e6a1] rounded-md"
//               placeholder="Enter registration number"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-semibold mb-2">Features</label>
//             <input
//               type="text"
//               name="features"
//               className="w-full p-3 border border-[#02e6a1] rounded-md"
//               placeholder="e.g., GPS, AC, etc."
//             />
//           </div>
//           <div>
//             <label className="block font-semibold mb-2">Description</label>
//             <textarea
//               name="description"
//               className="w-full p-3 border border-[#02e6a1] rounded-md"
//               placeholder="Enter description"
//             />
//           </div>
//           <div>
//             <label className="block font-semibold mb-2">Images (URL)</label>
//             <input
//               type="url"
//               name="images"
//               className="w-full p-3 border border-[#02e6a1] rounded-md"
//               placeholder="Enter image URL"
//             />
//           </div>
//           <div>
//             <label className="block font-semibold mb-2">Date Added</label>
//             <input
//               type="date"
//               name="dateAdded"
//               className="w-full p-3 border border-[#02e6a1] rounded-md"
//               required
//             />
//           </div>
//         </div>
//         <div className="mt-4">
//           <label className="block font-semibold mb-2">Additional Information</label>
//           <input
//             type="text"
//             name="additionalInfo"
//             className="w-full p-3 border border-[#02e6a1] rounded-md"
//             placeholder="Any other information"
//           />
//         </div>
//         <div className="mt-6 text-center">
//           <button
//             type="submit"
//            className="relative h-10 w-full origin-top transform rounded-lg border-2 bg-[#018d63] border-[#034833] text-xl text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-[#034833]"
//           >
//             Add Car
//           </button>
//         </div>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default AddCar;




import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#034833] dark:text-[#F26611] mb-3">
            Add New Car
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Fill in the details to add a vehicle to your fleet
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Decorative Header Bar */}
          <div className="h-2 bg-gradient-to-r from-[#F26611] via-orange-500 to-[#034833]"></div>

          <form onSubmit={handleAddCar} className="p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Car Model */}
              <div className="group">
                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F26611]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Car Model
                </label>
                <input
                  type="text"
                  name="model"
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-[#F26611] focus:ring-2 focus:ring-[#F26611]/20 outline-none transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g., Toyota Corolla 2024"
                  required
                />
              </div>

              {/* Daily Rental Price */}
              <div className="group">
                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Daily Rental Price (BDT)
                </label>
                <input
                  type="number"
                  name="dailyRentalPrice"
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g., 5000"
                  required
                />
              </div>

              {/* Availability */}
              <div className="group">
                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Availability Status
                </label>
                <select
                  name="availability"
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                >
                  <option value="">Select availability</option>
                  <option value="available">Available</option>
                  <option value="notAvailable">Not Available</option>
                </select>
              </div>

              {/* Vehicle Registration Number */}
              <div className="group">
                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Registration Number
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g., ABC-1234"
                  required
                />
              </div>

              {/* Features */}
              <div className="group">
                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Features
                </label>
                <input
                  type="text"
                  name="features"
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g., GPS, AC, Bluetooth"
                />
              </div>

              {/* Description */}
              <div className="group">
                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  Description
                </label>
                <textarea
                  name="description"
                  rows="3"
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Describe the car..."
                />
              </div>

              {/* Images URL */}
              <div className="group">
                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Image URL
                </label>
                <input
                  type="url"
                  name="images"
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="https://example.com/car-image.jpg"
                />
              </div>

              {/* Date Added */}
              <div className="group">
                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Date Added
                </label>
                <input
                  type="date"
                  name="dateAdded"
                  className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>

            {/* Additional Information - Full Width */}
            <div className="mt-6 group">
              <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-sm flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Additional Information
              </label>
              <input
                type="text"
                name="additionalInfo"
                className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Any other relevant information..."
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-4 px-6 text-lg font-bold text-white bg-gradient-to-r from-[#F26611] to-orange-600 hover:from-orange-600 hover:to-[#F26611] rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Car to Fleet
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
