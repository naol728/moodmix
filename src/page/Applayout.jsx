import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Applayout() {
  return (
    <div className="bg-background">
      <div>
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
