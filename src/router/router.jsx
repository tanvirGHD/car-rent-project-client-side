import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/pages/Home/Home";
import AvailableCar from "../components/pages/AvailableCar/AvailableCar";
import AddCar from "../components/pages/AddCar/AddCar";
import MyCars from "../components/pages/MyCars/MyCars";
import MyBookings from "../components/pages/MyBookings/MyBookings";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Error from "../components/Error/Error";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import CarDetails from "../components/pages/CarDetails/CarDetails";
import UpdateCars from "../components/pages/MyCars/UpdateCars";
import DataVisualization from "../components/pages/DataVisualization/DataVisualization";
import About from "../components/pages/About/About";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/availableCar',
                element: <AvailableCar></AvailableCar>
            },
            {
                path: '/addCar',
                element : <PrivateRoute><AddCar></AddCar></PrivateRoute>
            },
            {
                path: '/myCars',
                element : <PrivateRoute><MyCars></MyCars></PrivateRoute>
            },
            {
                path: '/updateCar/:id',
                element : <PrivateRoute><UpdateCars></UpdateCars></PrivateRoute>,
                loader: ({params}) => fetch(`https://car-rent-server-side.vercel.app/cars/${params.id}`)
            },
            {
                path: '/myBookings',
                element : <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://car-rent-server-side.vercel.app/cars/${params.id}`)
            },
            {
                path: '/dataVisualization',
                element: <PrivateRoute><DataVisualization></DataVisualization></PrivateRoute>,
                loader: () => fetch('https://car-rent-server-side.vercel.app/cars'),
            },
            {
                path: '/login',
                element : <Login></Login>
            },
            {
                path: '/register',
                element : <Register></Register>
            },
            {
                path: '/about',
                element : <About></About>
            },
            {
                path : '*',
                element : <Error></Error>
            }
        ]
    },
  ]);

export default router;