import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Applayout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
