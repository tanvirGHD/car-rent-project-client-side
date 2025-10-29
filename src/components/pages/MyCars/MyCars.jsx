// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import axios from "axios";
// import useAxiosSecure from "../../../hook/useAxiosSecure";

// const MyCars = () => {
//   const [cars, setCars] = useState([]);
//   const [sortOption, setSortOption] = useState("dateAsc"); // Default sorting option
//   const axiosSecure = useAxiosSecure();

//   // Fetch cars from the backend using axios
//   useEffect(() => {
//     axiosSecure
//       .get("/cars", {})
//       .then((response) => {
//         setCars(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching cars:", error);
//       });
//   }, []);

//   // Handle delete with confirmation
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This action cannot be undone!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios
//           .delete(`https://car-rent-server-side.vercel.app/cars/${id}`)
//           .then(() => {
//             setCars((prevCars) => prevCars.filter((car) => car._id !== id));
//             Swal.fire(
//               "Deleted!",
//               "The car has been deleted successfully.",
//               "success"
//             );
//           })
//           .catch((error) => {
//             console.error("Error deleting car:", error);
//             Swal.fire(
//               "Error!",
//               "An error occurred while deleting the car.",
//               "error"
//             );
//           });
//       }
//     });
//   };

//   // Sort cars based on selected option
//   const sortCars = (cars, option) => {
//     switch (option) {
//       case "dateAsc":
//         return [...cars].sort(
//           (a, b) => new Date(a.dateAdded) - new Date(b.dateAdded)
//         );
//       case "dateDesc":
//         return [...cars].sort(
//           (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
//         );
//       case "priceAsc":
//         return [...cars].sort(
//           (a, b) => a.dailyRentalPrice - b.dailyRentalPrice
//         );
//       case "priceDesc":
//         return [...cars].sort(
//           (a, b) => b.dailyRentalPrice - a.dailyRentalPrice
//         );
//       default:
//         return cars;
//     }
//   };

//   // Sorted cars
//   const sortedCars = sortCars(cars, sortOption);

//   return (
//     <div className="px-4 py-6">
//       <h2 className="text-3xl font-bold text-[#034833] dark:text-[#F59E0B] mb-4">
//         My Cars
//       </h2>

//       {/* Sorting Dropdown */}
//       <div className="mb-4">
//         <label className="mr-2 text-lg dark:text-white">Sort by:</label>
//         <select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="dateAsc">Date Added (Oldest First)</option>
//           <option value="dateDesc">Date Added (Newest First)</option>
//           <option value="priceAsc">Price (Lowest First)</option>
//           <option value="priceDesc">Price (Highest First)</option>
//         </select>
//       </div>

//       {/* Display Cars Table */}
//       {cars.length === 0 ? (
//         <div className="flex items-center justify-center h-64 bg-green-100 rounded-lg shadow-md">
//           <p className="text-gray-600 text-lg">
//             No cars added yet.{" "}
//             <Link
//               to="/addCar"
//               className="text-blue-500 font-semibold hover:underline"
//             >
//               Add a car
//             </Link>
//           </p>
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto border-collapse">
//             <thead>
//               <tr className="bg-[#89B918] dark:bg-[#034833] text-white">
//                 <th className="px-4 py-2">Car Image</th>
//                 <th className="px-4 py-2">Car Model</th>
//                 <th className="px-4 py-2">Daily Rental Price</th>
//                 <th className="px-4 py-2">Availability</th>
//                 <th className="px-4 py-2">Date Added</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedCars.map((car) => (
//                 <tr
//                   key={car._id}
//                   className="hover:bg-[#c3da8b] dark:text-white dark:hover:bg-[#014e38]"
//                 >
//                   <td className="border border-black dark:border-white px-4 py-2">
//                     <img
//                       src={car.images}
//                       alt={car.model}
//                       className="w-24 h-16 object-cover"
//                     />
//                   </td>
//                   <td className="border border-black dark:border-white px-4 py-2">
//                     {car.model}
//                   </td>
//                   <td className="border border-black dark:border-white px-4 py-2">
//                     {car.dailyRentalPrice} BDT
//                   </td>
//                   <td className="border border-black dark:border-white px-4 py-2">
//                     {car.availability}
//                   </td>
//                   <td className="border border-black dark:border-white px-4 py-2">
//                     {car.dateAdded}
//                   </td>
//                   <td className="border border-black dark:border-white px-4 py-2 flex justify-between gap-2">
//                     <Link to={`/updateCar/${car._id}`}>
//                       <button className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto">
//                         Update
//                       </button>
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(car._id)}
//                       className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyCars;



import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
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
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#034833] dark:text-[#F26611] mb-2">
              My Cars
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your vehicle fleet
            </p>
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <svg className="w-5 h-5 text-[#F26611]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            <label className="font-semibold text-gray-700 dark:text-gray-300">
              Sort by:
            </label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium focus:border-[#F26611] focus:ring-2 focus:ring-[#F26611]/20 outline-none transition-all duration-300"
            >
              <option value="dateAsc">Date Added (Oldest First)</option>
              <option value="dateDesc">Date Added (Newest First)</option>
              <option value="priceAsc">Price (Lowest First)</option>
              <option value="priceDesc">Price (Highest First)</option>
            </select>
          </div>
        </div>

        {/* Display Cars Table */}
        {cars.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl border-2 border-dashed border-green-300 dark:border-gray-600">
            <svg className="w-24 h-24 text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-gray-600 dark:text-gray-300 text-xl mb-4">
              No cars added yet.
            </p>
            <Link to="/addCar">
              <button className="px-6 py-3 bg-gradient-to-r from-[#F26611] to-orange-600 hover:from-orange-600 hover:to-[#F26611] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Your First Car
              </button>
            </Link>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Decorative Header Bar */}
            <div className="h-2 bg-gradient-to-r from-[#F26611] via-orange-500 to-[#034833]"></div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#034833] to-[#018d63] dark:from-gray-700 dark:to-gray-600 text-white">
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Car Model
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Daily Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Date Added
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {sortedCars.map((car, index) => (
                    <tr
                      key={car._id}
                      className={`transition-colors duration-200 hover:bg-orange-50 dark:hover:bg-gray-700 ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-750'
                        }`}
                    >
                      <td className="px-6 py-4">
                        <div className="w-24 h-16 rounded-lg overflow-hidden shadow-md">
                          <img
                            src={car.images}
                            alt={car.model}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {car.model}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-green-600 dark:text-green-400">
                          {car.dailyRentalPrice} BDT
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${car.availability === "available"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                            }`}
                        >
                          {car.availability}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        {car.dateAdded}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-2">
                          <Link to={`/updateCar/${car._id}`}>
                            <button className="group px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                              Update
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(car._id)}
                            className="group px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCars;