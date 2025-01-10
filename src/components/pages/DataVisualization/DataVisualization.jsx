import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
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
    <div className="p-4 mt-12">
      {/* Header */}
      <h2 className="text-3xl font-bold text-[#034833] dark:text-[#F59E0B] mb-6">
        Car Price Visualization
      </h2>

      {/* Rechart Bar Chart */}
      <div className="flex justify-center">
        <BarChart
          className="text-white"
          width={500}
          height={400}
          data={chartData}
          margin={{ top: 20, right: 0, left: 20, bottom: 30 }} // Adjusted margin for spacing
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fill: "dark:white" }}
            angle={-45} // Rotated labels for better fit
            textAnchor="end"
            interval={0} // Prevent label overlap
          />
          <YAxis tick={{ fill: "dark:white" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#00C1A2" />
        </BarChart>
      </div>

      {/* Price Labels Below the Chart */}
      <div className="flex justify-center mt-4">
        {chartData.map((car, index) => (
          <div key={index} className="mx-2">
            <div className="text-center text-lg font-semibold text-[#00C1A2]">{car.price}</div>
            <div className="text-center text-sm text-gray-600">{car.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataVisualization;
