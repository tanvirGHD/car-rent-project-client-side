import React from "react";

const ChooseUs = () => {
  return (
    <div className="bg-[#daf7f4] py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <i className="fas fa-car text-4xl mb-4 text-[#48c78e]"></i>
          <h3 className="text-xl font-medium">Wide Variety of Cars</h3>
          <p className="text-gray-500">
            From budget-friendly options to luxury vehicles.
          </p>
        </div>
        <div className="text-center bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <i className="fas fa-dollar-sign text-4xl mb-4 text-[#48c78e]"></i>
          <h3 className="text-xl font-medium">Affordable Prices</h3>
          <p className="text-gray-500">Competitive daily rates you can count on.</p>
        </div>
        <div className="text-center bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <i className="fas fa-calendar-check text-4xl mb-4 text-[#48c78e]"></i>
          <h3 className="text-xl font-medium">Easy Booking Process</h3>
          <p className="text-gray-500">
            Seamlessly book your ride in just a few clicks.
          </p>
        </div>
        <div className="text-center bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <i className="fas fa-headset text-4xl mb-4 text-[#48c78e]"></i>
          <h3 className="text-xl font-medium">Customer Support</h3>
          <p className="text-gray-500">24/7 assistance for all your queries.</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
