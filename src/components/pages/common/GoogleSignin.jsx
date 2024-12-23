import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext/AuthContext';

const GoogleSignin = () => {
    const { LogInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();  // useNavigate hook

    const handleGoogleLogin = () => {
        LogInWithGoogle()
            .then(result => {
                console.log(result.user);
                // Redirect to home page on successful login
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center mt-6">
            {/* Google Signin Button */}
            <button 
                onClick={handleGoogleLogin} 
                className="btn flex items-center p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none"
            >
                <img 
                    src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" 
                    alt="Google Icon" 
                    className="h-6 w-6 mr-3"
                />
                <span className="font-semibold">Sign in with Google</span>
            </button>

            {/* Divider with "OR" in the middle */}
            <div className="my-4 w-full flex items-center">
                <div className="flex-1 border-t-2 border-gray-300"></div>
                <span className="mx-4 text-gray-600">OR</span>
                <div className="flex-1 border-t-2 border-gray-300"></div>
            </div>
        </div>
    );
};

export default GoogleSignin;
