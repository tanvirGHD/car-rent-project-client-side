import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://car-rent-server-side.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {

    const {logOutUser} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Response Interceptor
        axiosInstance.interceptors.response.use(
            response => {
                
                return response;
            }, 
            error => {
                console.log('Error caught in interceptor:', error);
                // Unauthorized error handling
                if (error.response && error.response.status === 401) {
                    console.log("Unauthorized Access - Please log in again.");
                    logOutUser()
                    .then(() =>{
                        console.log('logged out user')
                        navigate('/login')
                    })
                    .catch(error => console.log(error));
                }
                return Promise.reject(error);
            }
        );
    }, []);

    return axiosInstance;
};

export default useAxiosSecure;
