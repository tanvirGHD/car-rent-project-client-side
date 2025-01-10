import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const DataVisualization = () => {
  const [cars, setCars] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);

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
          width={800}
          height={400}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: isDarkMode ? "white" : "black" }} />
          <YAxis tick={{ fill: isDarkMode ? "white" : "black" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#00C1A2" />
        </BarChart>
      </div>
    </div>
  );
};

export default DataVisualization;
