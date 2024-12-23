import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker'; // For date picking (you can install with `npm install react-datepicker`)
import "react-datepicker/dist/react-datepicker.css";
import Modal from '../Modal/Modal';

const MyBookings = () => {
    const [cars, setCars] = useState([]);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [newStartDate, setNewStartDate] = useState(null);
    const [newEndDate, setNewEndDate] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/cars-booking')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);

    const handleCancelBooking = (bookingId) => {
        setCars(prevCars => prevCars.map(car =>
            car._id === bookingId ? { ...car, status: 'Canceled' } : car
        ));
        setShowCancelModal(false);
    };

    const handleModifyBooking = (bookingId) => {
        setCars(prevCars => prevCars.map(car =>
            car._id === bookingId ? { ...car, startDate: newStartDate, endDate: newEndDate } : car
        ));
    };



    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">My Bookings: {cars.length}</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-separate border-spacing-2">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-3 text-left font-medium">Car Image</th>
                            <th className="p-3 text-left font-medium">Car Model</th>
                            <th className="p-3 text-left font-medium">Booking Date</th>
                            <th className="p-3 text-left font-medium">Total Price</th>
                            <th className="p-3 text-left font-medium">Booking Status</th>
                            <th className="p-3 text-left font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map(car => (
                            <tr key={car._id} className="hover:bg-gray-50 border-b">
                                <td className="p-3">
                                    <img src={car.images} alt={car.model} className="w-16 h-16 object-cover rounded-lg" />
                                </td>
                                <td className="p-3">{car.model}</td>
                                <td className="p-3">{new Date().toLocaleString()}</td>
                                <td className="p-3">${car.dailyRentalPrice}</td>
                                <td className="p-3">{car.availability}</td>
                                <td className="p-3">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                                        onClick={() => { setSelectedBooking(car._id); }}
                                    >
                                        Modify Date
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                        
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Cancel Booking Modal */}
            {showCancelModal && (
                <Modal onClose={() => setShowCancelModal(false)}>
                    <h3 className="text-lg font-semibold">Are you sure you want to cancel this booking?</h3>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                        onClick={() => handleCancelBooking(selectedBooking)}
                    >
                        Yes
                    </button>
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={() => setShowCancelModal(false)}
                    >
                        No
                    </button>
                </Modal>
            )}

            {/* Modify Booking Modal */}
            {selectedBooking && (
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
                        <button
                            className="bg-blue-500 text-white px-6 py-2 rounded mt-4"
                            onClick={() => handleModifyBooking(selectedBooking)}
                        >
                            Confirm
                        </button>
                        <button
                            className="bg-gray-500 text-white px-6 py-2 rounded mt-4 ml-2"
                            onClick={() => setSelectedBooking(null)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyBookings;
