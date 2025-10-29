// import { useEffect, useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
// import useAxiosSecure from "../../../hook/useAxiosSecure";

// const DataVisualization = () => {
//   const [cars, setCars] = useState([]);
//   const axiosSecure = useAxiosSecure();

//   // Fetching the car data
//   useEffect(() => {
//     axiosSecure
//       .get("/cars-booking")
//       .then((response) => {
//         setCars(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching cars:", error);
//       });
//   }, []);

//   // Sort cars by price (ascending order)
//   const sortedCars = [...cars].sort(
//     (a, b) => parseInt(a.dailyRentalPrice) - parseInt(b.dailyRentalPrice)
//   );

//   // Prepare data for Recharts
//   const chartData = sortedCars.map((car, index) => ({
//     name: car.model,
//     price: parseInt(car.dailyRentalPrice),
//   }));

//   return (
//     <div className="p-4 mt-12">
//       {/* Header */}
//       <h2 className="text-3xl font-bold text-[#034833] dark:text-[#F59E0B] mb-6">
//         Car Price Visualization
//       </h2>

//       {/* Rechart Bar Chart */}
//       <div className="flex justify-center">
//         <BarChart
//           className="text-white"
//           width={500}
//           height={400}
//           data={chartData}
//           margin={{ top: 20, right: 0, left: 20, bottom: 30 }} // Adjusted margin for spacing
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis
//             dataKey="name"
//             tick={{ fill: "dark:white" }}
//             angle={-45} // Rotated labels for better fit
//             textAnchor="end"
//             interval={0} // Prevent label overlap
//           />
//           <YAxis tick={{ fill: "dark:white" }} />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="price" fill="#00C1A2" />
//         </BarChart>
//       </div>

//       {/* Price Labels Below the Chart */}
//       <div className="flex justify-center mt-4">
//         {chartData.map((car, index) => (
//           <div key={index} className="mx-2">
//             <div className="text-center text-lg font-semibold text-[#00C1A2]">{car.price}</div>
//             <div className="text-center text-sm text-gray-600">{car.name}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DataVisualization;





import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const DataVisualization = () => {
  const [cars, setCars] = useState([]);
  const axiosSecure = useAxiosSecure();

  // Fetching the car data
  useEffect(() => {
    axiosSecure
      .get("/cars-booking")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
      });
  }, []);

  // Sort cars by price (ascending order)
  const sortedCars = [...cars].sort(
    (a, b) => parseInt(a.dailyRentalPrice) - parseInt(b.dailyRentalPrice)
  );

  // Prepare data for Recharts
  const chartData = sortedCars.map((car, index) => ({
    name: car.model,
    price: parseInt(car.dailyRentalPrice),
  }));

  return (
    <div className="mt-12">
      {/* Chart Container */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* Decorative Header Bar */}
        <div className="h-2 bg-gradient-to-r from-[#F26611] via-orange-500 to-[#034833]"></div>

        {/* Header Section */}
        <div className="p-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#F26611] to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#034833] dark:text-[#F26611]">
                Car Price Analysis
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Daily rental price comparison across vehicles
              </p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="p-8">
          {chartData.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-lg font-medium">No data available for visualization</p>
            </div>
          ) : (
            <div className="w-full">
              <ResponsiveContainer width="100%" height={450}>
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                >
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F26611" stopOpacity={0.9} />
                      <stop offset="95%" stopColor="#FF8A3D" stopOpacity={0.7} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" className="dark:stroke-gray-700" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    className="dark:fill-gray-300"
                    angle={-45}
                    textAnchor="end"
                    interval={0}
                    height={100}
                  />
                  <YAxis
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    className="dark:fill-gray-300"
                    label={{ value: 'Price (BDT)', angle: -90, position: 'insideLeft', style: { fill: '#6B7280' } }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #F26611',
                      borderRadius: '12px',
                      padding: '12px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                    labelStyle={{ color: '#034833', fontWeight: 'bold', marginBottom: '4px' }}
                    itemStyle={{ color: '#F26611', fontWeight: '600' }}
                    cursor={{ fill: 'rgba(242, 102, 17, 0.1)' }}
                  />
                  <Legend
                    wrapperStyle={{ paddingTop: '20px' }}
                    iconType="rect"
                    formatter={(value) => <span className="text-gray-700 dark:text-gray-300 font-semibold">Daily Rental Price (BDT)</span>}
                  />
                  <Bar
                    dataKey="price"
                    fill="url(#colorPrice)"
                    radius={[8, 8, 0, 0]}
                    maxBarSize={60}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Stats Cards Section */}
        {chartData.length > 0 && (
          <div className="p-8 bg-gray-50 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Lowest Price Card */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm">Lowest Price</h3>
                </div>
                <p className="text-3xl font-extrabold text-green-600 dark:text-green-400">
                  {Math.min(...chartData.map(car => car.price))} BDT
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {chartData.find(car => car.price === Math.min(...chartData.map(c => c.price)))?.name}
                </p>
              </div>

              {/* Highest Price Card */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-5 rounded-2xl border-2 border-red-200 dark:border-red-700 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm">Highest Price</h3>
                </div>
                <p className="text-3xl font-extrabold text-red-600 dark:text-red-400">
                  {Math.max(...chartData.map(car => car.price))} BDT
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {chartData.find(car => car.price === Math.max(...chartData.map(c => c.price)))?.name}
                </p>
              </div>

              {/* Average Price Card */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm">Average Price</h3>
                </div>
                <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                  {Math.round(chartData.reduce((sum, car) => sum + car.price, 0) / chartData.length)} BDT
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Across {chartData.length} vehicles
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataVisualization;