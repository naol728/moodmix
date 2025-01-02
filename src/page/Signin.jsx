import React, { useState } from "react";
import { docreateuserwithemailandpassword } from "../firebase/Auth";
import { Link } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confermPassword, setConfermPassword] = useState("");
  const [error, setError] = useState("");
  const [isregester, setIsregester] = useState(false);
  const onsubmit = async (e) => {
    e.preventDefault();
    if (!isregester) {
      setIsregester(true);
      await docreateuserwithemailandpassword(email, password).catch((error) => {
        setError(error.message);
      });
    }
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <h1>sign in </h1>
        <Link to="/login">login</Link>
        <Link to="/regester">regester</Link>
        {error && <h1>{error}</h1>}
        <label htmlFor="">email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="">password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="">conferm password</label>
        <input
          type="password"
          onChange={(e) => setConfermPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
