import React, { useState } from "react";
import NavigationMenu from "../atoms/NavigationMenu";
import SearchAndActionButtons from "../atoms/SearchActionButton";
import NavigationMenuMobile from "../atoms/NavigationMenuMobile";
import SearchAndActionButtonMobile from "../atoms/SearchActionButtonMobile";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="bg-gradient-to-r from-slate-500 to-slate-900 font-custom text-white p-4 flex items-center justify-between w-full">
      {/* Logo */}
      <div className="text-3xl font-bold ml-7">
        <a href="/">MY WEBSITE</a>
      </div>
      {/* Navigation Menu for Large Screens */}
      <NavigationMenu></NavigationMenu>
      {/* Search Bar and Action Buttons for Large Screens */}
      <SearchAndActionButtons></SearchAndActionButtons>
      
      {/* Hamburger Icon for Mobile Menu */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`absolute top-16 left-0 w-full h-[350px] bg-black space-y-4 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 overflow-hidden"
        }`}
      >
        <div className="space-y-4 p-4">
          <NavigationMenuMobile />
          <SearchAndActionButtonMobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
