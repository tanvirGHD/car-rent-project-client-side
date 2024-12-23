import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerLottieData from "../../../assets/Animation - 1734893434070.json";
import Lottie from "lottie-react";
import AuthContext from "../../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import GoogleSignin from "../common/GoogleSignin";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    // Password validation
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must be at least 6 characters long.",
      });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain at least one uppercase letter.",
      });
      return;
    }
    if (!/[a-z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain at least one lowercase letter.",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have successfully registered!",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/login");
        });
      })
      .catch((error) => {
        console.error(error.message);

        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="card bg-blue-50 w-full mb-7 max-w-4xl mx-auto my-10 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Animation Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-48 md:w-64">
          <Lottie animationData={registerLottieData} />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1">
        <form onSubmit={handleRegister} className="space-y-4">
          <h2 className="text-center text-3xl font-bold text-[#00C1A2]">
            Register
          </h2>
          <div className="form-control">
            <div className="w-full">
            <GoogleSignin></GoogleSignin>
            </div>
            <label className="label">
              <span className="label-text text-blue-800 font-medium">
                Full Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800 font-medium">Email</span>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800 font-medium">
                Photo URL
              </span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary text-white bg-[#00C1A2] border-none hover:bg-[#0eaa90]"
            >
              Register
            </button>
          </div>
          <p className="text-center text-sm text-blue-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="link link-hover text-blue-800 font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
