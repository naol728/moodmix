import React from "react";
import { useMusic } from "../context/musiccontext";

export default function Favorite() {
  const { favorite } = useMusic();
  return (
    <div>
      <div className="text-center text-text text-2xl font-bold mt-4">musics that you add to your favorite😍</div>
      <div className="w-[60%]  mx-auto mt-20">
        
        {   
        favorite.length === 0 && <div className="text-center text-text text-2xl font-bold ">No favorite music🥲</div>
        }
        {
        
        
        favorite.map((item) => (
         <div className="flex justify-center -mt-10 items-center w-full">
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
