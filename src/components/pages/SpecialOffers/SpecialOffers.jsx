import React, { useState } from 'react';

// Dummy data for the special offers
const offers = [
    {
        id: 1,
        title: "Get 15% off for weekend rentals!",
        description: "Book now and save big on weekend rentals. Don't miss out!",
        price: "$50/day",
    },
    {
        id: 2,
        title: "Luxury cars at $99/day this holiday season!",
        description: "Experience luxury at an affordable price this holiday season.",
        price: "$99/day",
    },
    {
        id: 3,
        title: "Special Deal: 20% off on all rentals!",
        description: "Unlock an exclusive 20% discount on all car rentals. Book today!",
        price: "$70/day",
    }
];

const SpecialOffers = () => {
    const [selectedOffer, setSelectedOffer] = useState(null);

    const handleOfferClick = (offer) => {
        setSelectedOffer(offer);
    };

    const closeModal = () => {
        setSelectedOffer(null);
    };

    return (
        <div>
            {/* Offer Cards */}
            <h2 className='text-3xl font-bold text-[#034833]  mb-8'>Special Offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map((offer) => (
                    <div
                        key={offer.id}
                        className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl transform transition duration-300 ease-in-out"
                        onClick={() => handleOfferClick(offer)}
                    >
                        <h3 className="text-xl font-semibold text-[#89b918] mb-3">{offer.title}</h3>
                        <p className="text-gray-600 mb-4">{offer.description}</p>
                        <span className="text-xl font-bold text-[#89b918]">{offer.price}</span>
                        <button className="mt-4  bg-[#034833] py-1 px-2 text-white ml-2 rounded-lg hover:underline transition">Learn More</button>
                    </div>
                ))}
            </div>

            {/* Modal for selected offer details */}
            {selectedOffer && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96 max-w-lg">
                        <h2 className="text-2xl font-bold text-[#89b918] mb-4">{selectedOffer.title}</h2>
                        <p className="text-gray-700 mb-4">{selectedOffer.description}</p>
                        <span className="text-xl font-bold text-[#89b918]">{selectedOffer.price}</span>
                        <div className="mt-6 flex justify-between">
                            <button
                                onClick={closeModal}
                                className="bg-red-500 w-full text-white p-2 rounded-md hover:bg-red-600 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpecialOffers;
