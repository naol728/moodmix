import React, { createContext, useContext, useState } from "react";
import getAccessToken from "../spotify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Music = createContext();
export default function Musiccontext({ children }) {
  const navigate = useNavigate();
  const [generatedmusic, setGeneratedmusic] = useState([]);
  const handlegenerate = async (genre) => {
    const accessToken = await getAccessToken();

    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: `genre:${genre}`,
        type: "track",
        limit: 20,
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
