

// import React, { useEffect, useState } from 'react'; 
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import { FaCalendarAlt, FaTrashAlt } from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import useAxiosSecure from '../../../hook/useAxiosSecure';
// import DataVisualization from '../DataVisualization/DataVisualization';

// const MyBookings = () => {
//     const [cars, setCars] = useState([]);
//     const [showModifyModal, setShowModifyModal] = useState(false);
//     const [selectedBooking, setSelectedBooking] = useState(null);
//     const [newStartDate, setNewStartDate] = useState(new Date());
//     const [newEndDate, setNewEndDate] = useState(new Date());

//     const axiosSecure = useAxiosSecure();

//     // Fetch the car bookings on page load
//     useEffect(() => {
//         axiosSecure.get('/cars-booking')
//             .then(response => {
//                 const carsData = response.data.map(car => ({
//                     id: car._id,
//                     model: car.model,
//                     price: car.dailyRentalPrice,
//                     features: car.features,
//                     bookings: car.bookingCount || 0,
//                     status: car.availability,
//                     description: car.description,
//                     location: car.additionalInfo,
//                     imageUrl: car.images,
//                     startDate: car.startDate ? new Date(car.startDate) : new Date(),
//                     endDate: car.endDate ? new Date(car.endDate) : new Date(),
//                 }));
//                 setCars(carsData);
//             })
//     }, []);

//     // Modify booking date using Axios
//     const handleModifyBooking = (bookingId) => {
//         if (newStartDate && newEndDate) {
//             setCars(prevCars =>
//                 prevCars.map(car =>
//                     car.id === bookingId
//                         ? { ...car, startDate: newStartDate, endDate: newEndDate }
//                         : car
//                 )
//             );

//             axios.put(`https://car-rent-server-side.vercel.app/cars-booking/${bookingId}`, {
//                 startDate: newStartDate,
//                 endDate: newEndDate,
//             })
//                 .then(() => {
//                     Swal.fire("Success!", "Booking dates updated successfully.", "success");
//                 })
//         }
//         setShowModifyModal(false);
//         setSelectedBooking(null);
//     };

//     // Delete booking using Axios and update booking count
//     const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "This action cannot be undone!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#d33",
//             cancelButtonColor: "#3085d6",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 axios.delete(`https://car-rent-server-side.vercel.app/cars-booking/${id}`)
//                     .then(res => {
//                         if (res.status === 200) {
//                             setCars(prevCars => prevCars.filter(car => car.id !== id));
//                             Swal.fire("Deleted!", "The booking has been deleted successfully.", "success");
//                         } else {
//                             Swal.fire("Error!", "Failed to delete the booking.", "error");
//                         }
//                     })
//                     .catch(err => {
//                         console.error("Error deleting booking:", err);
//                         Swal.fire("Error!", "Failed to delete the booking.", "error");
//                     });
//             }
//         });
//     };

//     return (
//         <div className="p-6">
//             <h2 className="text-3xl font-bold text-[#034833] dark:text-[#F59E0B] mb-4">My Bookings</h2>
//             <Link to="/availableCar">
//                 <button className="bg-[#034833] text-white px-4 py-2 rounded mb-4">
//                     Add New Booking
//                 </button>
//             </Link>
//             <div className="overflow-x-auto">
//                 <table className="table-auto w-full border-separate border-spacing-2">
//                     <thead>
//                         <tr className="bg-[#89B918] dark:bg-[#034833] text-white">
//                             <th className="p-3 text-left font-medium">Car Image</th>
//                             <th className="p-3 text-left font-medium">Car Model</th>
//                             <th className="p-3 text-left font-medium">Booking Date</th>
//                             <th className="p-3 text-left font-medium">Total Price</th>
//                             <th className="p-3 text-left font-medium">Booking Count</th>
//                             <th className="p-3 text-left font-medium">Booking Status</th>
//                             <th className="p-3 text-left font-medium">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {cars.map(({ id, model, price, bookings, status, imageUrl, startDate, endDate }) => (
//                             <tr key={id} className="hover:bg-[#c3da8b]  dark:text-white dark:hover:bg-[#014e38] border-b">
//                                 <td className="p-3">
//                                     <img src={imageUrl} alt={model} className="w-16 h-16 object-cover rounded-lg" />
//                                 </td>
//                                 <td className="p-3">{model}</td>
//                                 <td className="p-3">
//                                     {startDate && endDate
//                                         ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
//                                         : "Not Set"}
//                                 </td>
//                                 <td className="p-3">${price}</td>
//                                 <td className="p-3">{bookings}</td>
//                                 <td className="p-3">{status}</td>
//                                 <td className="p-3 flex space-x-2">
//                                     <button
//                                         className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
//                                         onClick={() => {
//                                             setSelectedBooking(id);
//                                             setShowModifyModal(true);
//                                         }}
//                                     >
//                                         <FaCalendarAlt className="mr-2" /> Modify Date
//                                     </button>
//                                     <button
//                                         className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center"
//                                         onClick={() => handleDelete(id)}
//                                     >
//                                         <FaTrashAlt className="mr-2" /> Cancel
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {showModifyModal && (
//                 <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//                     <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
//                         <h3 className="text-xl font-semibold mb-4">Modify Booking Date</h3>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium">Start Date</label>
//                             <DatePicker
//                                 selected={newStartDate}
//                                 onChange={date => setNewStartDate(date)}
//                                 dateFormat="dd/MM/yyyy"
//                                 className="w-full p-2 border border-gray-300 rounded"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium">End Date</label>
//                             <DatePicker
//                                 selected={newEndDate}
//                                 onChange={date => setNewEndDate(date)}
//                                 dateFormat="dd/MM/yyyy"
//                                 className="w-full p-2 border border-gray-300 rounded"
//                             />
//                         </div>
//                         <div className="flex space-x-2">
//                             <button
//                                 className="bg-blue-500 text-white px-6 py-2 rounded mt-4"
//                                 onClick={() => handleModifyBooking(selectedBooking)}
//                             >
//                                 Confirm
//                             </button>
//                             <button
//                                 className="bg-gray-500 text-white px-6 py-2 rounded mt-4"
//                                 onClick={() => setShowModifyModal(false)}
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//             <div>
//                 <DataVisualization></DataVisualization>
//             </div>
//         </div>
//     );
// };

// export default MyBookings;



import axios from 'axios';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import DataVisualization from '../DataVisualization/DataVisualization';

const MyBookings = () => {
    const [cars, setCars] = useState([]);
    const [showModifyModal, setShowModifyModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [newStartDate, setNewStartDate] = useState(new Date());
    const [newEndDate, setNewEndDate] = useState(new Date());

    const axiosSecure = useAxiosSecure();

    // Fetch the car bookings on page load
    useEffect(() => {
        axiosSecure.get('/cars-booking')
            .then(response => {
                const carsData = response.data.map(car => ({
                    id: car._id,
                    model: car.model,
                    price: car.dailyRentalPrice,
                    features: car.features,
                    bookings: car.bookingCount || 0,
                    status: car.availability,
                    description: car.description,
                    location: car.additionalInfo,
                    imageUrl: car.images,
                    startDate: car.startDate ? new Date(car.startDate) : new Date(),
                    endDate: car.endDate ? new Date(car.endDate) : new Date(),
                }));
                setCars(carsData);
            })
    }, []);

    // Modify booking date using Axios
    const handleModifyBooking = (bookingId) => {
        if (newStartDate && newEndDate) {
            setCars(prevCars =>
                prevCars.map(car =>
                    car.id === bookingId
                        ? { ...car, startDate: newStartDate, endDate: newEndDate }
                        : car
                )
            );

            axios.put(`https://car-rent-server-side.vercel.app/cars-booking/${bookingId}`, {
                startDate: newStartDate,
                endDate: newEndDate,
            })
                .then(() => {
                    Swal.fire("Success!", "Booking dates updated successfully.", "success");
                })
        }
        setShowModifyModal(false);
        setSelectedBooking(null);
    };

    // Delete booking using Axios and update booking count
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://car-rent-server-side.vercel.app/cars-booking/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            setCars(prevCars => prevCars.filter(car => car.id !== id));
                            Swal.fire("Deleted!", "The booking has been deleted successfully.", "success");
                        } else {
                            Swal.fire("Error!", "Failed to delete the booking.", "error");
                        }
                    })
                    .catch(err => {
                        console.error("Error deleting booking:", err);
                        Swal.fire("Error!", "Failed to delete the booking.", "error");
                    });
            }
        });
    };

    return (
        <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#034833] dark:text-[#F26611] mb-2">
                            My Bookings
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Manage your car reservations
                        </p>
                    </div>

                    {/* Add New Booking Button */}
                    <Link to="/availableCar">
                        <button className="px-6 py-3 bg-gradient-to-r from-[#F26611] to-orange-600 hover:from-orange-600 hover:to-[#F26611] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add New Booking
                        </button>
                    </Link>
                </div>

                {/* Table Container */}
                {cars.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-96 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl border-2 border-dashed border-orange-300 dark:border-gray-600">
                        <svg className="w-24 h-24 text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <p className="text-gray-600 dark:text-gray-300 text-xl mb-4">
                            No bookings found.
                        </p>
                        <Link to="/availableCar">
                            <button className="px-6 py-3 bg-gradient-to-r from-[#F26611] to-orange-600 hover:from-orange-600 hover:to-[#F26611] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                Browse Available Cars
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
                                            Booking Date
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                                            Total Price
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                                            Bookings
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {cars.map(({ id, model, price, bookings, status, imageUrl, startDate, endDate }, index) => (
                                        <tr
                                            key={id}
                                            className={`transition-colors duration-200 hover:bg-orange-50 dark:hover:bg-gray-700 ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-750'
                                                }`}
                                        >
                                            <td className="px-6 py-4">
                                                <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md">
                                                    <img
                                                        src={imageUrl}
                                                        alt={model}
                                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="font-semibold text-gray-900 dark:text-white">
                                                    {model}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                                                {startDate && endDate
                                                    ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                                                    : "Not Set"}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="font-bold text-green-600 dark:text-green-400">
                                                    ${price}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold">
                                                    {bookings}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${status === "available"
                                                            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                                            : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                                                        }`}
                                                >
                                                    {status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-center gap-2">
                                                    <button
                                                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                                                        onClick={() => {
                                                            setSelectedBooking(id);
                                                            setShowModifyModal(true);
                                                        }}
                                                    >
                                                        <FaCalendarAlt /> Modify
                                                    </button>
                                                    <button
                                                        className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                                                        onClick={() => handleDelete(id)}
                                                    >
                                                        <FaTrashAlt /> Cancel
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

                {/* Modify Booking Modal */}
                {showModifyModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-200 dark:border-gray-700 transform transition-all duration-300 scale-100">
                            {/* Modal Header */}
                            <div className="bg-gradient-to-r from-[#F26611] to-orange-600 p-6">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <FaCalendarAlt className="text-3xl" />
                                    Modify Booking Date
                                </h3>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#F26611]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Start Date
                                    </label>
                                    <DatePicker
                                        selected={newStartDate}
                                        onChange={date => setNewStartDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-[#F26611] focus:ring-2 focus:ring-[#F26611]/20 outline-none transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#F26611]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        End Date
                                    </label>
                                    <DatePicker
                                        selected={newEndDate}
                                        onChange={date => setNewEndDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-[#F26611] focus:ring-2 focus:ring-[#F26611]/20 outline-none transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 bg-gray-50 dark:bg-gray-750 flex gap-3">
                                <button
                                    className="flex-1 py-3 bg-gradient-to-r from-[#F26611] to-orange-600 hover:from-orange-600 hover:to-[#F26611] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                    onClick={() => handleModifyBooking(selectedBooking)}
                                >
                                    Confirm Changes
                                </button>
                                <button
                                    className="flex-1 py-3 bg-gray-400 hover:bg-gray-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                    onClick={() => setShowModifyModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Data Visualization Section */}
                <div className="mt-12">
                    <DataVisualization />
                </div>
            </div>
        </div>
    );
};

export default MyBookings;