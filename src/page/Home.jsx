import React, { useEffect } from "react";
import Button from "../components/Button";
import { useAuth } from "../context/Authcontext";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Home() {
  const { currentuser, islogedin } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!islogedin) {
      navigate("/");
    }
  }, [islogedin, navigate]);

  if (!islogedin) {
    return <Navigate to="/" />;
  }

  return (
    <div className=" min-h-[95dvh]  flex flex-col justify-center items-center">
      <h1 className="text-[1.5rem]  sm:text-3xl text-text font-bold text-center z-10 ">
        🎶 Welcome to MoodMixer{" "}
        {currentuser.displayName ? currentuser.displayName : currentuser.email}{" "}
        ,🎶
      </h1>
      <div className="flex flex-col justify-center text-center mt-24 z-10">
        <h2 className="text-text text-lg text-center font-bold font-serif sm:text-xl -mt-16">
          Find the perfect playlist for your mood.
        </h2>
        <p className="text-secondaryText px-3 mx-auto text-sm sm:text-lg sm:w-[70%] mb-8 mt-8">
          Whether you're feeling upbeat, relaxed, or nostalgic, MoodMixer
          curates personalized music recommendations to match your emotions.
          Simply tell us how you're feeling, and we'll generate a custom
          playlist just for you!
        </p>
      </div>
      <Link to="/dialog" className="z-10">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}
