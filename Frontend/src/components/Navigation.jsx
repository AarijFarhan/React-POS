import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsAuthenticated(!!token); // Convert token to boolean
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/home" className="flex items-center">
            <h1 className="text-green-600 text-3xl font-bold">Logo</h1>
          </Link>

          {/* Right Side - Authentication Buttons */}
          <div className="flex items-center lg:order-2 justify-between w-[15rem]">
            {isAuthenticated ? (
              <>
                <div className="flex items-center bg-white mt-2">
                  <img className="h-8" src="6596121.png" alt="User Avatar" />
                  <span className="mt-1 ml-2 text-gray-700">Hi, User</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white rounded-md hover:bg-red-600 text-sm px-4 py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-md bg-green-500 text-white hover:bg-[#559e5b] focus:ring-orange-300 font-medium text-sm px-4 py-2 mr-2"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="bg-green-500 text-white rounded-lg hover:bg-[#559e5b] focus:ring-4 focus:ring-orange-300 font-medium text-sm px-4 py-2 mr-2"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Navbar Links */}
          <div className="hidden lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/home"
                  className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:text-green-500 lg:border-0"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:text-green-500 lg:border-0"
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:text-green-500 lg:border-0"
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:text-green-500 lg:border-0"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
