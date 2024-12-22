import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li><NavLink to="/" className="px-3 py-2 hover:bg-gray-200 rounded">Home</NavLink></li>
      <li><NavLink to="/availableCar" className="px-3 py-2 hover:bg-gray-200 rounded">Available Car</NavLink></li>
      <li><NavLink to="/addCar" className="px-3 py-2 hover:bg-gray-200 rounded">Add Car</NavLink></li>
      <li><NavLink to="/myCars" className="px-3 py-2 hover:bg-gray-200 rounded">My Cars</NavLink></li>
      <li><NavLink to="/myBookings" className="px-3 py-2 hover:bg-gray-200 rounded">My Bookings</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for mobile view */}
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
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
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <Link to='/login'>
        <button className="btn bg-blue-500 text-white hover:bg-blue-600">
          Login
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
