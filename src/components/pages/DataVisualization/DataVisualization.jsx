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
    <div className="p-4">
      {/* Header */}
      <h2 className="text-4xl text-[#00C1A2] mb-6">Car Price Visualization</h2>

      {/* Rechart Bar Chart */}
      <div className="flex justify-center">
        <BarChart
          width={800}
          height={400}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#00C1A2" />
        </BarChart>
      </div>
    </div>
  );
};

export default DataVisualization;
