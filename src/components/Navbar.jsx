import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { Button } from "@mui/material";
import { dosignout } from "../firebase/Auth";
import { CiBrightnessDown } from "react-icons/ci";
export default function Navbar() {
  const { islogedin } = useAuth();
  return (
    <div className="   ml-1 mr-1   px-2 py-4  sm:px-3 sm:pt-5 shadow-xl text-text  ">
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
          <div className="flex space-x-4 font-semibold text-text   ">
            <Link to="/" className="hover:underline">
              Sign in
            </Link>{" "}
            <Link to="/regester" className="hover:underline">
              Sign Up
            </Link>
          </div>
        )}

        <div className="flex justify-center space-x-5  ">
          <div className="text-text text-3xl cursor-pointer">
            <CiBrightnessDown />
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
