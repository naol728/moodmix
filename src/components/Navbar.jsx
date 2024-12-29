import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="w-full  px-2 py-4 rounded-xl sm:px-3 sm:pt-5 shadow-xl bg-slate-950 shadow-slate-700">
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>

        <div className="flex justify-center space-x-5 ">
          <div className="bg-pink-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"></div>
          <div className="bg-blue-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"></div>
          <div className="bg-yellow-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"></div>
          <div className="bg-red-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"></div>
          <div className="bg-white rounded-full w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
}
