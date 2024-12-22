
import React from "react";
import { Link } from "react-router-dom";
import loginLottieData from "../../../assets/Animation - 1734893434070.json"
import Lottie from "lottie-react";



const Login = () => {
  return (
    <div className="card bg-blue-50 w-full max-w-4xl mx-auto mt-20 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Animation Section  */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-48 md:w-64">
          <Lottie animationData={loginLottieData} />{" "}
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1">
        <form className="space-y-4">
          {" "}
          {/* Change handleRegister to handleSignIn */}
          <h2 className="text-center text-3xl font-bold text-[#00C1A2]">
            Login
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800 font-medium">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800 font-medium">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary text-white bg-[#00C1A2] border-none hover:bg-[#0eaa90]"
            >
              Login
            </button>
          </div>
          <p className="text-center text-sm text-blue-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              href="#"
              className="link link-hover text-blue-800 font-semibold"
            >
              Register
            </Link>
          </p>
        </form>
        {/* <SocialLogin></SocialLogin> */}
      </div>
    </div>
  );
};

export default Login;
