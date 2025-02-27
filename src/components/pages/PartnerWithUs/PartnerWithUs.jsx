import React from 'react';

const PartnerWithUs = () => {
    return (
        <div className="my-12  py-16">
            <div className="w-11/12 mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Partner With Us
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
                    Earn money by renting out your car! Join our platform and turn your vehicle into a profitable asset.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="p-8 rounded-2xl backdrop-blur-sm bg-white bg-opacity-20 border border-opacity-20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800">✔ List Your Car</h3>
                        <p className="text-gray-600 mt-4">
                            Easily register your vehicle and get it listed on our platform.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-2xl backdrop-blur-sm bg-white bg-opacity-20 border border-opacity-20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800">✔ Secure & Verified</h3>
                        <p className="text-gray-600 mt-4">
                            We verify all renters and provide insurance coverage for safety.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 rounded-2xl backdrop-blur-sm bg-white bg-opacity-20 border border-opacity-20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800">✔ Earn Regularly</h3>
                        <p className="text-gray-600 mt-4">
                            Set your own pricing and earn money whenever your car is rented.
                        </p>
                    </div>
                </div>

                <button className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Become a Partner
                </button>
            </div>
        </div>
    );
};

export default PartnerWithUs;