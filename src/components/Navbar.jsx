import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { Avatar, Button } from "@mui/material";
import { dosignout } from "../firebase/Auth";
import { CiBrightnessDown } from "react-icons/ci";
export default function Navbar() {
  const [show, setShow] = useState(false);
  function hadleshow() {
    setShow(!show);
  }
  const { islogedin, currentuser } = useAuth();
  return (
    <div className="   ml-1 mr-1   px-2 py-4  sm:px-3 sm:pt-5 shadow-xl text-text  ">
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>

        <div className="flex  justify-center items-center space-x-5 text-text">
          <div className="text-3xl cursor-pointer font-extrabold">
            {" "}
            <CiBrightnessDown />
          </div>
          {islogedin &&
            (show ? (
              <div className=" absolute flex flex-col justify-evenly bg-black w-[50%] z-10 items-center top-20 right-6 h-[50%] md:static md:w-max  md:h-0 md:flex md:flex-row  md:space-x-5 md:items-center md:justify-center text-text">
                <Link to="/home" className=" hover:text-secondaryText">
                  Home
                </Link>
                <Link to="/dialog" className=" hover:text-secondaryText">
                  Dialog
                </Link>
                <Link to="/favorite" className=" hover:text-secondaryText">
                  Favorite
                </Link>
                <Link to="/profile" className=" hover:text-secondaryText">
                  Profile
                </Link>
                <Link to="/about" className=" hover:text-secondaryText">
                  About
                </Link>
                <div onClick={() => dosignout()}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ backgroundColor: "red", color: "white" }}
                  >
                    logout
                  </Button>
                </div>
              </div>
            ) : null)}
          {islogedin && (
            <Avatar
              alt="Cindy Baker"
              src={currentuser.photoURL}
              onClick={hadleshow}
            />
          )}
        </div>
      </div>
    </div>
  );
}
