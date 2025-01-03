import React, { createContext, useContext, useState } from "react";
import getAccessToken from "../spotify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Music = createContext();
export default function Musiccontext({ children }) {
  const navigate = useNavigate();
  const [generatedmusic, setGeneratedmusic] = useState([]);
  const [favorite, setFavorite] = useState([]);
  function handlefavorite(id) {
    setFavorite((prevFavorites) => {
      const isFavorite = prevFavorites.find((item) => item.id === id);
      if (isFavorite) {
        if (isFavorite.isfavorite) {
          return prevFavorites.filter((item) => item.id !== id);
        } else {
          return prevFavorites.map((item) =>
            item.id === id ? { ...item, isfavorite: !item.isfavorite } : item
          );
        }
      } else {
        return [...prevFavorites, { id, isfavorite: true }];
      }
    });
  }
  const handlegenerate = async (genre) => {
    const accessToken = await getAccessToken();

    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: `genre:${genre}`,
        type: "track",
        limit: 10,
      },
    });
    setGeneratedmusic(response.data.tracks.items);
    navigate("/playlist");
  };

  return (
    <Music.Provider
      value={{
        generatedmusic,
        handlegenerate,
        handlefavorite,
        favorite,
      }}
    >
      {children}
    </Music.Provider>
  );
}
export function useMusic() {
  const context = useContext(Music);
  return context;
}
