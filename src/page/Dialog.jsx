import React from "react";
import { useMusic } from "../context/musiccontext";
import Button from "../components/Button";

export default function Dialog() {
  const { handlegenerate } = useMusic();

  return (
    <div className=" h-[100dvh] sm:h-[90dvh] w-full flex flex-col items-center justify-between">
      <h1 className="text-text text-center font-bold text-xl sm:text-3xl p-5  whitespace-nowrap">
        How do you feel Naol😀
      </h1>
      <div className="h-[85%] w-full sm:place-items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-y-5 gap-5 px-5 sm:mx-8  text-text ">
        <div className="custom-card" onClick={() => handlegenerate("pop")}>
          <div className="emoji">😊🎉</div>
          <div className="label">Happy</div>
        </div>
        <div className="custom-card" onClick={() => handlegenerate("slow")}>
          <div className="emoji">😢💔</div>
          <div className="label">Sad</div>
        </div>
        <div className="custom-card" onClick={() => handlegenerate("rock")}>
          <div className="emoji"> ⚡🎶🏋️‍♂️</div>
          <div className="label">Energetic</div>
        </div>
        <div className="custom-card" onClick={() => handlegenerate("chill")}>
          <div className="emoji"> 😌🌿🛋️</div>
          <div className="label">Relax</div>
        </div>
        <div className="custom-card" onClick={() => handlegenerate("R&B")}>
          <div className="emoji ">❤️🌹💑</div>
          <div className="label">Romantic</div>
        </div>
        <div
          className="custom-card"
          onClick={() => handlegenerate("heavy metal")}
        >
          <div className="emoji">😡🔥🤘</div>
          <div className="label">Angry</div>
        </div>
        <div
          className="custom-card"
          onClick={() => handlegenerate("classical")}
        >
          <div className="emoji">🧘‍♂️💻📚</div>
          <div className="label">Focused</div>
        </div>
        <div className="custom-card" onClick={() => handlegenerate("Lo-Fi")}>
          <div className="emoji"> 🕰️📼🎸</div>
          <div className="label">Nostalgic</div>
        </div>
      </div>
      <div className="flex flex-col ml-10 sm:mb-20 sm:w-[75%] w-full sm:mt-14 mt-5 mr-4">
        <h2 className="text-text ml-8 mb-2 font-bold text-lg">
          how do you feel
        </h2>
        <div className="flex  justify-evenly sm:w-[80%] w-[85%]">
          <textarea
            type="text"
            className=" bg-gray-900 w-[85%] text-text mx-5 px-3 py-2 rounded-lg resize-none"
            placeholder="write how do you feel we will generate a playlist for you"
          />
          <div>
            <Button>send </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
