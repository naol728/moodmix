import React, { useEffect, useState } from "react";
import { useMusic } from "../context/musiccontext";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
export default function Playlist() {
  const { generatedmusic, favorite, handlefavorite } = useMusic();
  const [bgcolor, setBgcolor] = useState();

  const bgcolors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#33FFF5",
    "#F5FF33",
    "#FF33B8",
    "#FF9933",
    "#33FF99",
    "#9933FF",
    "#33CFFF",
    "#FFC133",
    "#33FFCC",
    "#CC33FF",
    "#33FF66",
    "#FF3366",
    "#FFAA33",
    "#33FFD5",
    "#D533FF",
    "#33FF99",
    "#FF5733",
  ];
  const navigate = useNavigate(getRandomColor(bgcolors));

  function getRandomColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setBgcolor(getRandomColor(bgcolors));
    }, 5000);

    return () => clearInterval(interval);
  }, [bgcolors]);
  useEffect(() => {
    if (generatedmusic.length === 0) {
      navigate("/dialog");
    }
  }, [generatedmusic, navigate]);
  return (
    <div style={{ backgroundColor: bgcolor }}>
      <h1 className="text-center text-black text-2xl font-bold pt-5 ">
        🥳Enjoy Music 🥳
      </h1>
      <div className="mt-20">
        {generatedmusic.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center -mt-10 items-center w-full"
            >
              {" "}
              <div className=" sm:w-[55%]">
                <iframe
                  src={`https://open.spotify.com/embed/track/${item.id}?utm_source=generator`}
                  allow="encrypted-media"
                  className="w-full sm:w-[100%]  px-10 -mb-5"
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
