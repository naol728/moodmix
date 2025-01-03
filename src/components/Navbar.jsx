import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { Button } from "@mui/material";
import { dosignout } from "../firebase/Auth";
import { MdBrightnessMedium } from "react-icons/md";
export default function Navbar() {
  const { islogedin } = useAuth();
  return (
    <div className="   ml-1 mr-1   px-2 py-4 rounded-xl sm:px-3 sm:pt-5 shadow-xl text-text bg-slate-950 shadow-slate-900">
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>

        {islogedin ? (
          <div className="flex space-x-5 text-text">
            <Link to="/home">Home</Link>
            <Link to="/dialog">Dialog</Link>
            <Link to="/favorite">Favorite</Link>
            <Link to="/about">About</Link>
          </div>
        ) : (
          <div className="flex space-x-4 font-semibold text-text font-serif  ">
            <Link to="/" className="hover:underline">
              Sign in
            </Link>{" "}
            <Link to="/regester" className="hover:underline">
              Regester
            </Link>
          </div>
        )}

        <div className="flex justify-center space-x-5  ">
          <div className="text-text text-3xl cursor-pointer">
            <MdBrightnessMedium />
          </div>
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
