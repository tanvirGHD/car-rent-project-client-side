
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isSticky, setIsSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOutUser().then(() => { });
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
            `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive
              ? "text-white bg-[#F46A13] shadow-lg"
              : "hover:bg-white/20 dark:hover:bg-white/10"
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
            `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive
              ? "text-white bg-[#F46A13] shadow-lg"
              : "hover:bg-white/20 dark:hover:bg-white/10"
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
              `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive
                ? "text-white bg-[#F46A13] shadow-lg"
                : "hover:bg-white/20 dark:hover:bg-white/10"
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
              `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive
                ? "text-white bg-[#F46A13] shadow-lg"
                : "hover:bg-white/20 dark:hover:bg-white/10"
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
              `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive
                ? "text-white bg-[#F46A13] shadow-lg"
                : "hover:bg-white/20 dark:hover:bg-white/10"
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
            `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive
              ? "text-white bg-[#F46A13] shadow-lg"
              : "hover:bg-white/20 dark:hover:bg-white/10"
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
            `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive
              ? "text-white bg-[#F46A13] shadow-lg"
              : "hover:bg-white/20 dark:hover:bg-white/10"
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
      className={`navbar ${darkMode ? "bg-gradient-to-r from-[#034833] to-[#045a41] text-white" : "bg-gradient-to-r from-[#ffffff] to-[#b8cc3a]"} ${isSticky ? "sticky top-0 z-50 shadow-xl backdrop-blur-md bg-opacity-95" : "shadow-md"
        } px-4 md:px-8 py-3 transition-all duration-300`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden hover:bg-white/20 rounded-lg"
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
              className="menu dropdown-content mt-3 z-[1] w-64 bg-white dark:bg-[#034833] rounded-xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700"
            >
              {links}
              <button
                className="absolute top-3 right-3 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1 transition-colors"
                onClick={() => setMenuOpen(false)} // Close menu
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </ul>
          )}
        </div>
        <a className="btn btn-ghost hover:bg-white/20 text-[#179983] dark:text-[#F46A13] text-xl md:text-3xl font-extrabold flex items-center space-x-2 transition-all duration-300">
          <img
            src="https://img.icons8.com/?size=100&id=12684&format=png&color=F26612"
            alt="Rentalcars Logo"
            className="w-10 h-10 md:w-12 md:h-12 drop-shadow-lg"
          />

          <span className="hidden sm:inline tracking-tight text-[#F26612]">Dreams Rent</span>
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-3">
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
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
              className="w-6 h-6 filter drop-shadow-md"
            />
          </div>
        </button>

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold px-6"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn bg-gradient-to-r from-[#F46A13] to-[#e05a0a] text-white hover:from-[#e05a0a] hover:to-[#d14f08] border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold px-6">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;