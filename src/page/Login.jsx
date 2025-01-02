import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import {
  dosigninwithemailandpassword,
  dosignwithgoogle,
} from "../firebase/Auth";
export default function Login() {
  const [isSignin, setIsSignin] = useState(true);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { islogedin } = useAuth();
  const onsubmoit = async (e) => {
    e.preventDefault();
    if (!isSignin) {
      setIsSignin(true);
      await dosigninwithemailandpassword(email, password);
    }
  };

  const onGoogleSignin = async (e) => {
    e.preventDefault();
    if (!isSignin) {
      setIsSignin(true);
      await dosignwithgoogle().catch((error) => {
        setError(error.message);
      });
    }
  };

  return (
    <div>
      {/* {error && <h1>{error}</h1>}
      {islogedin && <Navigate to="/home" />}
      <Link to="/login">login</Link>
      <Link to="/regester">regester</Link>
      <h1>Login</h1>
      <form
        onSubmit={onsubmoit}
        className="flex h-screen justify-center items-center"
      >
        <label htmlFor="">email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="">password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </form> */}
    </div>
  );
}
