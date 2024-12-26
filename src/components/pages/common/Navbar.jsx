import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isSticky, setIsSticky] = useState(false);

  const handleLogOut = () => {
    logOutUser().then(() => {});
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive ? "text-[#00C1A2] bg-[#daf7f4]" : "hover:bg-gray-200"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/availableCar"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive ? "text-[#00C1A2] bg-[#daf7f4]" : "hover:bg-gray-200"
            }`
          }
        >
          Available Car
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCar"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive ? "text-[#00C1A2] bg-[#daf7f4]" : "hover:bg-gray-200"
            }`
          }
        >
          Add Car
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCars"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive ? "text-[#00C1A2] bg-[#daf7f4]" : "hover:bg-gray-200"
            }`
          }
        >
          My Cars
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myBookings"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive ? "text-[#00C1A2] bg-[#daf7f4]" : "hover:bg-gray-200"
            }`
          }
        >
          My Bookings
        </NavLink>
      </li>
    </>
  );

  // Handle sticky navbar logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar ${
        isSticky ? "sticky top-0 z-50 bg-opacity-60 backdrop-blur-md" : ""
      }`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for mobile view */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] w-52 bg-base-100 rounded-box shadow p-2"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-[#179983] text-3xl font-bold flex items-center space-x-2">
          <img
            src="https://img.icons8.com/?size=100&id=qzKNWF9sbXPV&format=png&color=000000"
            alt="Rentalcars Logo"
            className="w-12 h-12 sm:w-8 sm:h-8"
          />
          <span className="md:text-3xl text-xl">Rentalcars</span>
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-red-500 text-white hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              className="btn"
              style={{ backgroundColor: "#00C1A2", color: "white" }}
            >
              Login
            </button>
          </Link>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
