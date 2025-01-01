import React from "react";

export default function Button({ children }) {
  return (
    <button className="bg-accent px-8 py-2 sm:px-10 font-bold sm:py-2 text-lg shadow-lg hover:bg-accentHover hover:text-secondaryText rounded-xl text-text z-10">
      {children}
    </button>
  );
}
