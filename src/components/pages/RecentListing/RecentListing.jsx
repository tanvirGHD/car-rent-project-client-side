import React, { useEffect, useState } from 'react';

const RecentListing = () => {
    const [cars, setCars] = useState([]);

    // Function to calculate the date difference for "Added x days ago"
    const calculateDateDifference = (datePosted) => {
        const today = new Date();
        const postDate = new Date(datePosted);
        const differenceInTime = today - postDate;
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
        return differenceInDays > 0 ? `Added ${differenceInDays} days ago` : "Added today";
    };

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
            .catch(err => console.error('Error fetching cars:', err));
    }, []);

    // Show only the last 6 cars
    const recentCars = cars.slice(-6);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Recent Listings ({recentCars.length})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentCars.map((car) => (
                    <div key={car._id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                        <img
                            src={car.images}
                            alt={car.model}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{car.model}</h3>
                            <p className="text-sm text-gray-500">{calculateDateDifference(car.datePosted)}</p>
                            <p className="text-lg font-semibold text-green-500">{`$${car.dailyRentalPrice}/day`}</p>
                            <span
                                className={`inline-block px-3 py-1 text-white text-sm rounded-full mt-2 ${car.availability === 'available' ? 'bg-green-500' : 'bg-red-500'}`}
                            >
                                {car.availability}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentListing;
