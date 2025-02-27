import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isSticky, setIsSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOutUser().then(() => {});
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive
                ? "text-[#034833] bg-[#F7FEE7]"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
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
              isActive
                ? "text-[#034833] bg-[#F7FEE7]"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`
          }
        >
          Available Car
        </NavLink>
      </li>
      {/* Show "Add Car" only if user is logged in */}
      {user && (
        <li>
          <NavLink
            to="/addCar"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive
                  ? "text-[#034833] bg-[#F7FEE7]"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`
            }
          >
            Add Car
          </NavLink>
        </li>
      )}
      {/* Show "My Cars" only if user is logged in */}
      {user && (
        <li>
          <NavLink
            to="/myCars"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive
                  ? "text-[#034833] bg-[#F7FEE7]"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`
            }
          >
            My Cars
          </NavLink>
        </li>
      )}
      {/* Show "My Bookings" only if user is logged in */}
      {user && (
        <li>
          <NavLink
            to="/myBookings"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive
                  ? "text-[#034833] bg-[#F7FEE7]"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`
            }
          >
            My Bookings
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive
                ? "text-[#034833] bg-[#F7FEE7]"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${
              isActive
                ? "text-[#034833] bg-[#F7FEE7]"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`
          }
        >
          Services
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar ${darkMode ? "bg-[#034833] text-white" : "bg-[#c7db43]"} ${
        isSticky ? "sticky top-0 z-50 bg-opacity-60 backdrop-blur-md" : ""
      } px-[10px]`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu open/close
          >
            {!menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          {menuOpen && (
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] w-52 bg-base-100 rounded-box shadow p-2 dark:bg-[#034833]"
            >
              {links}
              <button
                className="absolute top-2 right-2 text-white"
                onClick={() => setMenuOpen(false)} // Close menu
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ul>
          )}
        </div>
        <a className="btn btn-ghost text-[#179983] dark:text-[#89b918] text-3xl font-bold flex items-center space-x-2">
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
        <button
          className="flex items-center px-3 space-x-2 transition"
          onClick={() => setDarkMode(!darkMode)}
        >
          <div className="relative">
            <img
              src={
                darkMode
                  ? "https://img.icons8.com/?size=100&id=8EUmYhfLPTCF&format=png&color=000000"
                  : "https://img.icons8.com/?size=100&id=JARydttrNTU2&format=png&color=000000"
              }
              alt={darkMode ? "Light Mode" : "Dark Mode"}
              className="w-5 h-5"
            />
          </div>
        </button>

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-red-500 text-white hover:bg-red-600 ml-2"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              className="btn"
              style={{ backgroundColor: "#034833", color: "white" }}
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
