import React from "react";

const SearchActionButtonMobile = () => {
  return (
    <div className="flex flex-col w-full space-y-3 justify-evenly items-center px-5">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full p-2 rounded border-2 border-slate-500 bg-white text-black placeholder-gray-400 focus:outline-none focus:border-yellow-600"
      />
      <button className="w-full bg-slate-400 text-white px-6 py-2 rounded hover:bg-slate-600">
        Sign In
      </button>
      <button className="w-full border border-slate-100 text-slate-200 px-6 py-2 rounded hover:bg-white hover:text-black">
        Register
      </button>
    </div>
  );
};

export default SearchActionButtonMobile;
