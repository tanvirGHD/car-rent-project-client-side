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
                element : <AddCar></AddCar>
            },
            {
                path: '/myCars',
                element : <MyCars></MyCars>
            },
            {
                path: '/myBookings',
                element : <MyBookings></MyBookings>
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