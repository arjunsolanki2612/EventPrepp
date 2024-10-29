import React from "react";

const SearchActionButton = () => {
  return (
    <div>
      <div className="hidden md:flex w-[600px] h-10 space-x-4">
        <input
          type="text"
          placeholder="Find"
          className="font-custom1 w-[300px] p-2 rounded border-2 border-slate-500 bg-white text-black placeholder-gray-400 focus:outline-none focus:border-yellow-600"
        />
        <button className="bg-slate-400 text-white px-6 py-2 rounded hover:bg-slate-600">
          Sign In
        </button>
        <button className="border border-slate-100 text-slate-200 px-6 py-2 rounded hover:bg-white hover:text-black">
          Register
        </button>
      </div>
    </div>
  );
};

export default SearchActionButton;
