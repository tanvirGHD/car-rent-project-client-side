import { FaCalendarCheck, FaCar, FaDollarSign, FaHeadset } from 'react-icons/fa';

const ChooseUs = () => {
  return (
    <div className="py-16 px-4 bg-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl md:text-5xl text-[#034833] dark:text-[#F26611] font-extrabold mb-4">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Experience the best car rental service with unmatched quality and customer satisfaction
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="group text-center bg-white dark:bg-gray-800 shadow-lg p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-700">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#F26611] to-[#e05a0a] shadow-lg group-hover:shadow-xl transition-all duration-300">
              <FaCar className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#F26611] mb-3">
              Wide Variety of Cars
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              From budget-friendly options to luxury vehicles.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group text-center bg-white dark:bg-gray-800 shadow-lg p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-700">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#F26611] to-[#e05a0a] shadow-lg group-hover:shadow-xl transition-all duration-300">
              <FaDollarSign className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#F26611] mb-3">
              Affordable Prices
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Competitive daily rates you can count on.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group text-center bg-white dark:bg-gray-800 shadow-lg p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-700">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#F26611] to-[#e05a0a] shadow-lg group-hover:shadow-xl transition-all duration-300">
              <FaCalendarCheck className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#F26611] mb-3">
              Easy Booking Process
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Seamlessly book your ride in just a few clicks.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group text-center bg-white dark:bg-gray-800 shadow-lg p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-700">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#F26611] to-[#e05a0a] shadow-lg group-hover:shadow-xl transition-all duration-300">
              <FaHeadset className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#F26611] mb-3">
              Customer Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              24/7 assistance for all your queries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;