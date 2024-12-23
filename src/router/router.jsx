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
                path: '/myBookings',
                element : <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
                
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/cars/${params.id}`)
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
                path : '*',
                element : <Error></Error>
            }
        ]
    },
  ]);

export default router;