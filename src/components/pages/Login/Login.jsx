import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginLottieData from "../../../assets/Animation - 1734893434070.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import AuthContext from "../../../context/AuthContext/AuthContext";
import GoogleSignin from "../common/GoogleSignin";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Login successful:", user);

        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged in.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Navigate to home page
          navigate("/");
        });
      })
      .catch((error) => {
        console.error("Login error:", error.message);

        // Show error alert
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="card bg-[#e8f1b1] w-full mb-7 max-w-4xl mx-auto mt-10 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Animation Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-48 md:w-64">
          <Lottie animationData={loginLottieData} />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1">
        <form onSubmit={handleLogin} className="space-y-4">
          <h2 className="text-center text-3xl font-bold text-[#034833] ">
            Login
          </h2>
          <div className="form-control">
            <GoogleSignin></GoogleSignin>
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
              className="btn btn-primary text-white bg-[#088a63] border-none hover:bg-[#045f44]"
            >
              Login
            </button>
          </div>
          <p className="text-center text-sm text-[#0d7757]">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="link link-hover text-blue-800 font-semibold"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
