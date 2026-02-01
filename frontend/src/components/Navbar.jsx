import { logout } from "../api/auth";
import Login from "./Login";
import Register from "./Register";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("token");
      navigate("/Home");
    } catch (error) {
      console.log(error);
      alert("Logout failed");
    }
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profileRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-40 w-full bg-red-200 shadow-md">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-600 cursor-pointer">
          MYNTRA
        </div>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 text-sm font-semibold text-gray-700 md:flex">
          <li className="text-pink-600 cursor-pointer hover:text-pink-600">MEN</li>
          <li className="text-pink-600 cursor-pointer hover:text-pink-600">WOMEN</li>
          <li className="text-pink-600 cursor-pointer hover:text-pink-600">KIDS</li>
          <li className="text-pink-600 cursor-pointer hover:text-pink-600">HOME</li>
          <li className="text-pink-600 cursor-pointer hover:text-pink-600">BEAUTY</li>
          <li className="text-pink-600 cursor-pointer hover:text-pink-600">GENZ</li>
        </ul>

        {/* Desktop Right Section (Search + Icons) */}
        <div className="hidden text-sm md:flex md:items-center md:gap-6">
          {/* Search */}
          <input
            type="text"
            placeholder="Search for products"
            className="px-4 py-3 text-pink-600 bg-gray-100 rounded-md w-70 focus:outline-none"
          />

          {/* Icons */}
          <div className="flex text-center text-gray-700 gap-9">

            <div
              className="relative flex flex-col items-center text-pink-600 cursor-pointer hover:text-pink-600"
              ref={profileRef}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <span className="material-symbols-outlined">account_circle</span>
              <p className="text-xs text-pink-600">Profile</p>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 z-50 w-40 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl top-full ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <button
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowLogin(true);
                      setIsProfileOpen(false);
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowRegister(true);
                      setIsProfileOpen(false);
                    }}
                  >
                    Signup
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowRegister(true);

                      handleLogout();
                    }}
                  >
                    Sign out
                  </button>
                  <div className="my-1 border-t border-gray-100"></div>
                  <button className="block w-full px-4 py-2 text-sm text-left text-gray-500 hover:bg-gray-100">
                    Orders
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center text-pink-600 cursor-pointer hover:text-pink-600">
              <span className="text-3xl material-symbols-outlined">
                favorite
              </span>
              <p className="text-xs text-pink-600">Wishlist</p>
            </div>

            <div className="flex flex-col items-center text-pink-600 cursor-pointer hover:text-pink-600">
              <span className="text-3xl material-symbols-outlined">
                shopping_bag
              </span>
              <p className="text-xs text-pink-600">Bag</p>
            </div>

          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="text-pink-600 md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="text-3xl material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`flex flex-col gap-4 px-6 pb-6 bg-red-200 border-t border-pink-300 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        {/* Search (Mobile) */}
        <input
          type="text"
          placeholder="Search for products"
          className="w-full px-4 py-3 mt-4 text-pink-600 bg-gray-100 rounded-md focus:outline-none"
        />

        {/* Links (Mobile) */}
        <ul className="flex flex-col gap-3 text-sm font-semibold text-gray-700">
          <li className="text-pink-600 cursor-pointer hover:text-pink-600">MEN</li>
          <li className="text-pink-600 cursor-pointer hover:text-pink-600">WOMEN</li>
          <li className="text-pink-600 cursor-pointer hover:text-pink-600">KIDS</li>
          <li className="text-pink-600 cursor-pointer hover:text-pink-600">HOME</li>
          <li className="text-pink-600 cursor-pointer hover:text-pink-600">BEAUTY</li>
          <li className="text-pink-600 cursor-pointer hover:text-pink-600">GENZ</li>
        </ul>

        {/* Icons (Mobile) - Horizontal Row */}
        <div className="flex justify-around pt-2 mt-2 border-t border-pink-300">
          <div className="flex flex-col items-center text-pink-600 cursor-pointer" onClick={() => { setShowLogin(true); setIsMobileMenuOpen(false); }}>
            <span className="material-symbols-outlined">account_circle</span>
            <p className="text-xs">Profile</p>
          </div>
          <div className="flex flex-col items-center text-pink-600 cursor-pointer">
            <span className="material-symbols-outlined">favorite</span>
            <p className="text-xs">Wishlist</p>
          </div>
          <div className="flex flex-col items-center text-pink-600 cursor-pointer">
            <span className="material-symbols-outlined">shopping_bag</span>
            <p className="text-xs">Bag</p>
          </div>
        </div>
      </div>


      {showLogin && <Login close={() => setShowLogin(false)} openRegister={() => { setShowLogin(false); setShowRegister(true); }} />}
      {showRegister && <Register close={() => setShowRegister(false)} openLogin={() => { setShowRegister(false); setShowLogin(true); }} />}
    </div>
  );
};

export default Navbar;
