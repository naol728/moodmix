import React, { useEffect, useState } from "react";
import { useMusic } from "../context/Musiccontext";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

export default function Favorite() {
  const { favorite } = useMusic();
  const { islogedin } = useAuth();
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
  
  const [bgcolor, setBgcolor] = useState(getRandomColor(bgcolors));
  
  // const navigate = useNavigate(getRandomColor(bgcolors));
  
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
    <div style={{backgroundColor:bgcolor,height:""}}>
      <div className="text-center text-black text-xl sm:text-2xl font-extrabold " >
        musics that you add to your favorite😍
      </div>
      <div className="w-[60%]  mx-auto mt-20">
        {favorite.length === 0 && (
          <div className="text-center text-black text-lg sm:text-xl font-bold ">
            No favorite music🥲please add and come back
          </div>
        )}
        {favorite.map((item) => (
          <div className="flex justify-center rounded-lg -mt-16 items-center w-full">
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
