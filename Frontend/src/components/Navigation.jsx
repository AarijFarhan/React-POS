import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for Hamburger Menu

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage mobile menu state
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    setIsAuthenticated(!!token); // Convert token to boolean
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-green-600 text-3xl font-bold">POS</h1>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navbar Links - Desktop */}
          <div className="hidden lg:flex lg:w-auto lg:order-1">
            <ul className="flex space-x-8 font-medium">
              <li>
                <NavLink to="/" className="hover:text-green-500">Home</NavLink>
              </li>
              <li>
                <NavLink to="/menu" className="hover:text-green-500">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="hover:text-green-500">Cart</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-green-500">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Authentication Buttons - Desktop */}
          <div className="hidden lg:flex items-center lg:order-2 space-x-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center bg-white">
                  <img className="h-8" src="6596121.png" alt="User Avatar" />
                  <span className="ml-2 text-gray-700">Hi, User</span>
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
                <Link to="/login" className="bg-green-500 text-white rounded-md hover:bg-[#559e5b] px-4 py-2">
                  Login
                </Link>
                <Link to="/signup" className="bg-green-500 text-white rounded-md hover:bg-[#559e5b] px-4 py-2">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-md mt-2 rounded-md absolute w-full left-0">
            <ul className="flex flex-col text-center py-2">
              <li className="py-2 border-b"><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
              <li className="py-2 border-b"><NavLink to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</NavLink></li>
              <li className="py-2 border-b"><NavLink to="/cart" onClick={() => setIsMenuOpen(false)}>Cart</NavLink></li>
              <li className="py-2 border-b"><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>

              {/* Mobile Auth Buttons */}
              {isAuthenticated ? (
                <li className="py-2">
                  <button onClick={handleLogout} className="bg-red-500 text-white rounded-md hover:bg-red-600 text-sm px-4 py-2">
                    Logout
                  </button>
                </li>
              ) : (
                <>
                <div className="flex justify-center gap-3"> 
                  <button className="py-5"><Link to="/login" className=" mt-2 bg-green-500 text-white rounded-md hover:bg-[#559e5b] px-4 py-2">Login </Link></button>
                  <button className="py-3"><Link to="/signup" className="mt-2 bg-green-500 text-white rounded-md hover:bg-[#559e5b] px-4  py-2">Sign Up</Link></button>
                  </div>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
