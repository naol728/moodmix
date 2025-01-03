import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
export default function Logo() {
  return (
    <h1 className="text-text text-xl font-extrabold sm:text-xl font-serif ">
      <Link to="/">MooDMixer</Link>
    </h1>
  );
}
