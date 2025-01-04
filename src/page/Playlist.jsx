import React, { useEffect, useState } from "react";
import { useMusic } from "../context/musiccontext";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
export default function Playlist() {
  const { generatedmusic, favorite, handlefavorite } = useMusic();
  const navigate = useNavigate();

  console.log(favorite);
  useEffect(() => {
    if (generatedmusic.length === 0) {
      navigate("/dialog");
    }
  }, [generatedmusic, navigate]);
  return (
    <div>
      <h1 className="text-center text-text text-2xl font-bold mt-6">
        🥳Enjoy Music 🥳
      </h1>
      <div className="mt-20 bg-background">
        {generatedmusic.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center bg-background -mt-10 items-center w-full"
            >
              {" "}
              <div className=" bg-background sm:w-[65%]">
                <iframe
                  src={`https://open.spotify.com/embed/track/${item.id}?utm_source=generator`}
                  allow="encrypted-media"
                  className="w-full sm:w-[100%]  px-10"
                  title="Spotify Player"
                />{" "}
              </div>
              <span
                className={`text-4xl relative text-text cursor-pointer -top-10 ${favorite.find((music) => music.id === item.id)?.isfavorite ? "text-red-600" : ""}`}
                onClick={() => handlefavorite(item.id)}
              >
                {favorite.find((music) => music.id === item.id)?.isfavorite ? (
                  <MdFavorite />
                ) : (
                  <MdFavoriteBorder />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
