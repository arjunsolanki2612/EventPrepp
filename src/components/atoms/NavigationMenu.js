import React, { useState } from "react";

const NavigationMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null); // State for dropdown

  const handleMouseEnter = (menu) => {
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };
  return (
    <div>
      {/* Navigation Menu for Large Screens */}
      <nav className="hidden md:flex space-x-16 text-lg font-medium">
        {/* Home Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="/"
            className="hover:text-slate-300 font-bold flex items-center"
          >
            Home
            <span
              className={`ml-2 transform transition-transform duration-1000 ${
                dropdownOpen === "home" ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </a>
          {dropdownOpen === "home" && (
            <div className="absolute left-0 w-32 bg-white p-2 rounded shadow-lg">
              <a
                href="/option1"
                className="block text-black hover:text-red-600"
              >
                Option 1
              </a>
              <a
                href="/option2"
                className="block text-black hover:text-red-600"
              >
                Option 2
              </a>
            </div>
          )}
        </div>

        {/* About Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="/about"
            className="hover:text-slate-300 font-bold flex items-center"
          >
            About
            <span
              className={`ml-2 transform transition-transform duration-1000 ${
                dropdownOpen === "about" ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </a>
          {dropdownOpen === "about" && (
            <div className="absolute left-0 w-32 bg-white p-2 rounded shadow-lg">
              <a
                href="/Option1"
                className="block text-black hover:text-red-600"
              >
                Option 1
              </a>
              <a
                href="/Option2"
                className="block text-black hover:text-red-600"
              >
                Option 2
              </a>
            </div>
          )}
        </div>
        {/* About Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("service")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="/service"
            className="hover:text-slate-300 font-bold flex items-center"
          >
            Service
            <span
              className={`ml-2 transform transition-transform duration-1000 ${
                dropdownOpen === "service" ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </a>
          {dropdownOpen === "service" && (
            <div className="absolute left-0 w-32 bg-white p-2 rounded shadow-lg">
              <a
                href="/Option1"
                className="block text-black hover:text-red-600"
              >
                Option 1
              </a>
              <a
                href="/Option2"
                className="block text-black hover:text-red-600"
              >
                Option 2
              </a>
            </div>
          )}
        </div>
        {/* About Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("contact")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="/contact"
            className="hover:text-slate-300 font-bold flex items-center"
          >
            Contact
            <span
              className={`ml-2 transform transition-transform duration-1000 ${
                dropdownOpen === "contact" ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </a>
          {dropdownOpen === "contact" && (
            <div className="absolute left-0 w-32 bg-white p-2 rounded shadow-lg">
              <a
                href="/Option1"
                className="block text-black hover:text-red-600"
              >
                Option 1
              </a>
              <a
                href="/Option2"
                className="block text-black hover:text-red-600"
              >
                Option 2
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavigationMenu;
