import { useState } from 'react';
import { FaArrowRight, FaCar, FaPercentage, FaTag, FaTimes } from 'react-icons/fa';

// Dummy data for the special offers
const offers = [
    {
        id: 1,
        title: "Get 15% off for weekend rentals!",
        description: "Book now and save big on weekend rentals. Don't miss out!",
        price: "$50/day",
        icon: <FaPercentage />,
    },
    {
        id: 2,
        title: "Luxury cars at $99/day this holiday season!",
        description: "Experience luxury at an affordable price this holiday season.",
        price: "$99/day",
        icon: <FaCar />,
    },
    {
        id: 3,
        title: "Special Deal: 20% off on all rentals!",
        description: "Unlock an exclusive 20% discount on all car rentals. Book today!",
        price: "$70/day",
        icon: <FaTag />,
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
        <div className="py-16 px-4 bg-white dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className='text-4xl md:text-5xl font-extrabold text-[#034833] dark:text-[#F26611] mb-4'>
                        Special Offers
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Grab these exclusive deals and save big on your next rental
                    </p>
                </div>

                {/* Offer Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transform transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                            onClick={() => handleOfferClick(offer)}
                        >
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F26611]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-[#F26611] to-[#e05a0a] shadow-lg text-white text-xl relative z-10">
                                {offer.icon}
                            </div>

                            <h3 className="text-xl font-bold text-[#F26611] mb-3 relative z-10">
                                {offer.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 relative z-10 leading-relaxed">
                                {offer.description}
                            </p>

                            <div className="flex items-center justify-between relative z-10">
                                <span className="text-2xl font-bold text-[#034833] dark:text-white">
                                    {offer.price}
                                </span>
                                <button className="flex items-center gap-2 bg-gradient-to-r from-[#F26611] to-[#e05a0a] text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                    Learn More
                                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>

                            {/* Ribbon Badge */}
                            <div className="absolute top-4 -right-8 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold py-1 px-8 transform rotate-45 shadow-lg">
                                HOT
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for selected offer details */}
                {selectedOffer && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fadeIn">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-lg transform transition-all border border-gray-200 dark:border-gray-700 relative">
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                            >
                                <FaTimes className="text-2xl" />
                            </button>

                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#F26611] to-[#e05a0a] shadow-lg text-white text-2xl">
                                {selectedOffer.icon}
                            </div>

                            <h2 className="text-3xl font-bold text-[#F26611] mb-4">
                                {selectedOffer.title}
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                {selectedOffer.description}
                            </p>

                            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-700 p-4 rounded-xl mb-6">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Special Price</p>
                                <span className="text-3xl font-bold text-[#F26611]">
                                    {selectedOffer.price}
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={closeModal}
                                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Close
                                </button>
                                <button className="flex-1 bg-gradient-to-r from-[#F26611] to-[#e05a0a] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpecialOffers;