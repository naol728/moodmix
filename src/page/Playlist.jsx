import React, { useEffect } from "react";
import { useMusic } from "../context/musiccontext";
import { MdFavoriteBorder } from "react-icons/md";

export default function Playlist() {
  const { generatedmusic } = useMusic();

  useEffect(() => {
    if (generatedmusic.length === 0) {
      window.location.href = "/dialog";
    }
  }, []);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-6">
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
              <div className=" sm:w-[65%]">
                <iframe
                  src={`https://open.spotify.com/embed/track/${item.id}?utm_source=generator`}
                  allow="encrypted-media"
                  className="w-full sm:w-[100%]  px-10"
                  title="Spotify Player"
                />{" "}
              </div>
              <span className="text-4xl relative -top-10">
                <MdFavoriteBorder />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
