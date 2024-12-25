
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const MyBookings = () => {
    const [cars, setCars] = useState([]);
    const [showModifyModal, setShowModifyModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [newStartDate, setNewStartDate] = useState(new Date());
    const [newEndDate, setNewEndDate] = useState(new Date());

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/cars-booking')
            .then(response => {
                const carsData = response.data.map(car => ({
                    id: car._id,
                    model: car.model,
                    price: car.dailyRentalPrice,
                    features: car.features,
                    bookings: car.bookingCount || 0, // bookingCount will be updated
                    status: car.availability,
                    description: car.description,
                    location: car.additionalInfo,
                    imageUrl: car.images,
                    startDate: car.startDate ? new Date(car.startDate) : new Date(),
                    endDate: car.endDate ? new Date(car.endDate) : new Date(),
                }));
                setCars(carsData);
            })
            .catch(error => {
                console.error("Error fetching car bookings:", error);
            });
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

            axios.put(`http://localhost:5000/cars-booking/${bookingId}`, {
                startDate: newStartDate,
                endDate: newEndDate,
            })
                .then(() => {
                    Swal.fire("Success!", "Booking dates updated successfully.", "success");
                })
                .catch(err => {
                    console.error("Error updating booking:", err);
                    Swal.fire("Error!", "Failed to update booking dates.", "error");
                });
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
                axios.delete(`http://localhost:5000/cars-booking/${id}`)
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
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">My Bookings: {cars.length}</h2>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded mb-4"
            >
                Add New Booking
            </button>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-separate border-spacing-2">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-3 text-left font-medium">Car Image</th>
                            <th className="p-3 text-left font-medium">Car Model</th>
                            <th className="p-3 text-left font-medium">Booking Date</th>
                            <th className="p-3 text-left font-medium">Total Price</th>
                            <th className="p-3 text-left font-medium">Booking Count</th>
                            <th className="p-3 text-left font-medium">Booking Status</th>
                            <th className="p-3 text-left font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map(({ id, model, price, bookings, status, imageUrl, startDate, endDate }) => (
                            <tr key={id} className="hover:bg-gray-50 border-b">
                                <td className="p-3">
                                    <img src={imageUrl} alt={model} className="w-16 h-16 object-cover rounded-lg" />
                                </td>
                                <td className="p-3">{model}</td>
                                <td className="p-3">
                                    {startDate && endDate
                                        ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                                        : "Not Set"}
                                </td>
                                <td className="p-3">${price}</td>
                                <td className="p-3">{bookings}</td>
                                <td className="p-3">{status}</td>
                                <td className="p-3 flex space-x-2">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
                                        onClick={() => {
                                            setSelectedBooking(id);
                                            setShowModifyModal(true);
                                        }}
                                    >
                                        <FaCalendarAlt className="mr-2" /> Modify Date
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center"
                                        onClick={() => handleDelete(id)}
                                    >
                                        <FaTrashAlt className="mr-2" /> Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModifyModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
                        <h3 className="text-xl font-semibold mb-4">Modify Booking Date</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Start Date</label>
                            <DatePicker
                                selected={newStartDate}
                                onChange={date => setNewStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">End Date</label>
                            <DatePicker
                                selected={newEndDate}
                                onChange={date => setNewEndDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <button
                                className="bg-blue-500 text-white px-6 py-2 rounded mt-4"
                                onClick={() => handleModifyBooking(selectedBooking)}
                            >
                                Confirm
                            </button>
                            <button
                                className="bg-gray-500 text-white px-6 py-2 rounded mt-4"
                                onClick={() => setShowModifyModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyBookings;
