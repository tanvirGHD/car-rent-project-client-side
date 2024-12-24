import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCars = () => {
    const navigate = useNavigate()
    const cars = useLoaderData();
    const {
        _id,
        model,
        dailyRentalPrice,
        availability,
        registrationNumber,
        features,
        description,
        bookingCount,
        images,
        additionalInfo,
    } = cars;

    const handleUpdateCar = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());

        fetch(`http://localhost:5000/cars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(initialData),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Car Updated',
                    text: 'Your car details have been successfully updated!',
                })
                .then(() => {
                    navigate('/myCars');
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Update Failed',
                    text: 'Something went wrong while updating car details.',
                });
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-8 mb-10 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Update My Cars</h2>
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
                        <label className="block font-semibold mb-2">Daily Rental Price</label>
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
                        <label className="block font-semibold mb-2">Vehicle Registration Number</label>
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
                        <label className="block font-semibold mb-2">Booking Count</label>
                        <input
                            type="number"
                            name="bookingCount"
                            className="w-full p-3 border border-[#00C1A2] rounded-md"
                            placeholder="Enter booking count"
                            defaultValue={bookingCount}
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
                    <label className="block font-semibold mb-2">Additional Information</label>
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
                        className="bg-[#00C1A2] text-white w-full px-6 py-2 rounded-md hover:bg-[#00A18D]"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCars;
