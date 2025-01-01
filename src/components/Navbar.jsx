import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="   ml-1 mr-1   px-2 py-4 rounded-xl sm:px-3 sm:pt-5 shadow-xl bg-slate-950 shadow-slate-700">
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>

        <div className="flex space-x-5 text-text">
          <Link to="/">Home</Link>
          <Link to="/dialog">Dialog</Link>
          <Link to="/favorite">Favorite</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="flex justify-center space-x-5  ">
          <div className="bg-pink-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"></div>
          <div className="bg-blue-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"></div>
          {/* <div className="bg-yellow-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"></div> */}
          {/* <div className="bg-red-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"></div>
          <div className="bg-white rounded-full w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"></div> */}
        </div>
      </div>
    </div>
  );
}
