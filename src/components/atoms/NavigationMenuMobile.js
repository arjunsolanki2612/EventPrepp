import React from "react";

const NavigationMenuMobile = () => {
  return (
    <div className="flex flex-col justify-evenly space-y-4 h-2/3 items-left pl-5">
      <a href="/" className="hover:text-slate-300">
        Home
      </a>
      <a href="/movies" className="hover:text-slate-300">
        About
      </a>
      <a href="/showtimes" className="hover:text-slate-300">
        Service
      </a>
      <a href="/contact" className="hover:text-slate-300">
        Contact
      </a>
    </div>
  );
};

export default NavigationMenuMobile;
