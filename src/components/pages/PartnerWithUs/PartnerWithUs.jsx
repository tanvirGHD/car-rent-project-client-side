import React from 'react';

const PartnerWithUs = () => {
    return (
        <div className=" py-10 ">
            <div className="">
                <h2 className=" mb-6 text-3xl font-bold my-10 text-[#034833] dark:text-[#F59E0B]">
                    Partner With Us
                </h2>
                <p className="text-white dark:text-black mb-8 text-lg">
                    Earn money by renting out your car! Join our platform and turn your vehicle into a profitable asset.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
                        <div className="text-green-700 text-4xl mb-4">🚗</div>
                        <h3 className="text-2xl font-semibold text-gray-800">✔ List Your Car</h3>
                        <p className="text-gray-600 mt-4">
                            Easily register your vehicle and get it listed on our platform.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
                        <div className="text-green-700 text-4xl mb-4">🔒</div>
                        <h3 className="text-2xl font-semibold text-gray-800">✔ Secure & Verified</h3>
                        <p className="text-gray-600 mt-4">
                            We verify all renters and provide insurance coverage for safety.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
                        <div className="text-green-700 text-4xl mb-4">💰</div>
                        <h3 className="text-2xl font-semibold text-gray-800">✔ Earn Regularly</h3>
                        <p className="text-gray-600 mt-4">
                            Set your own pricing and earn money whenever your car is rented.
                        </p>
                    </div>
                </div>

                <button
                    className="mt-12 bg-[#034833] text-white py-3 px-8 rounded-lg hover:bg-[#023326] transition-all duration-300 transform hover:scale-105"
                >
                    Become a Partner
                </button>
            </div>
        </div>
    );
};

export default PartnerWithUs;