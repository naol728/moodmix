import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { Button } from "@mui/material";
import { dosignout } from "../firebase/Auth";

export default function Navbar() {
  const { islogedin } = useAuth();
  return (
    <div className="   ml-1 mr-1   px-2 py-4 rounded-xl sm:px-3 sm:pt-5 shadow-xl bg-slate-950 shadow-slate-700">
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>

        {islogedin ? (
          <div className="flex space-x-5 text-text">
            <Link to="/">Home</Link>
            <Link to="/dialog">Dialog</Link>
            <Link to="/favorite">Favorite</Link>
            <Link to="/about">About</Link>
          </div>
        ) : (
          <div className="flex space-x-4 font-semibold  underline">
            <Link to="/">login</Link> <Link to="/regester">regester</Link>
          </div>
        )}

        <div className="flex justify-center space-x-5  ">
          <div className="bg-pink-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"></div>
          <div className="bg-blue-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"></div>
          {islogedin && (
            <div onClick={() => dosignout()}>
              <Button variant="outlined">logout</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
