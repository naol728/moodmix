import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
export default function Logo() {
  return (
    <h1 className="text-accent text-xl font-extrabold sm:text-2xl font-serif ">
      <Link to="/">MooDMixer</Link>
    </h1>
  );
}
