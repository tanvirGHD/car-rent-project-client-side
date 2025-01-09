
const ChooseUs = () => {
  return (
    <div className=" py-16">
      <h2 className="text-center text-3xl text-[#034833] font-bold mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <i className="fas fa-car text-4xl mb-4 "></i>
          <h3 className="text-xl font-medium text-[#89b918]">Wide Variety of Cars</h3>
          <p className="text-gray-600">
            From budget-friendly options to luxury vehicles.
          </p>
        </div>
        <div className="text-center bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <i className="fas fa-dollar-sign text-4xl mb-4 "></i>
          <h3 className="text-xl font-medium text-[#89b918]">Affordable Prices</h3>
          <p className="text-gray-600">Competitive daily rates you can count on.</p>
        </div>
        <div className="text-center bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <i className="fas fa-calendar-check text-4xl mb-4"></i>
          <h3 className="text-xl font-medium text-[#89b918]">Easy Booking Process</h3>
          <p className="text-gray-600">
            Seamlessly book your ride in just a few clicks.
          </p>
        </div>
        <div className="text-center bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <i className="fas fa-headset text-4xl mb-4"></i>
          <h3 className="text-xl font-medium text-[#89b918]">Customer Support</h3>
          <p className=" text-gray-600">24/7 assistance for all your queries.</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
