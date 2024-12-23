import React from "react";

const ChooseUs = () => {
  return (
    <div class="bg-gray-100 py-16">
      <h2 class="text-center text-3xl font-semibold mb-8">Why Choose Us?</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="text-center bg-white shadow-lg p-6 rounded-lg">
          <i class="fas fa-car text-4xl mb-4"></i>
          <h3 class="text-xl font-medium">Wide Variety of Cars</h3>
          <p class="text-gray-500">
            From budget-friendly options to luxury vehicles.
          </p>
        </div>
        <div class="text-center bg-white shadow-lg p-6 rounded-lg">
          <i class="fas fa-dollar-sign text-4xl mb-4"></i>
          <h3 class="text-xl font-medium">Affordable Prices</h3>
          <p class="text-gray-500">Competitive daily rates you can count on.</p>
        </div>
        <div class="text-center bg-white shadow-lg p-6 rounded-lg">
          <i class="fas fa-calendar-check text-4xl mb-4"></i>
          <h3 class="text-xl font-medium">Easy Booking Process</h3>
          <p class="text-gray-500">
            Seamlessly book your ride in just a few clicks.
          </p>
        </div>
        <div class="text-center bg-white shadow-lg p-6 rounded-lg">
          <i class="fas fa-headset text-4xl mb-4"></i>
          <h3 class="text-xl font-medium">Customer Support</h3>
          <p class="text-gray-500">24/7 assistance for all your queries.</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
