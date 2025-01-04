import React, { useEffect } from "react";
import { useMusic } from "../context/musiccontext";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

export default function Favorite() {
  const { favorite } = useMusic();
  const { islogedin } = useAuth();
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
    <div>
      <div className="text-center text-text text-2xl font-bold mt-4">
        musics that you add to your favorite😍
      </div>
      <div className="w-[60%]  mx-auto mt-20">
        {favorite.length === 0 && (
          <div className="text-center text-text text-2xl font-bold ">
            No favorite music🥲
          </div>
        )}
        {favorite.map((item) => (
          <div className="flex justify-center bg-background -mt-10 items-center w-full">
            <iframe
              src={`https://open.spotify.com/embed/track/${item.id}?utm_source=generator`}
              allow="encrypted-media"
              className="w-full sm:w-[100%]  px-10"
              title="Spotify Player"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
