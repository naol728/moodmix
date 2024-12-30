import React from "react";

export default function Dialog() {
  return (
    <div className="w-full">
      <h1 className="text-text text-center font-bold text-2xl sm:text-3xl p-5  whitespace-nowrap">
        How do you feel Naol😀
      </h1>
      <div className="h-[85%] w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 sm:mx-8  text-text ">
        <div className="custom-card">
          <div className="emoji">😊🎉</div>
          <div className="label">Happy</div>
        </div>
        <div className="custom-card">
          <div className="emoji">😢💔</div>
          <div className="label">Sad</div>
        </div>
        <div className="custom-card">
          <div className="emoji"> ⚡🎶🏋️‍♂️</div>
          <div className="label">Energetic</div>
        </div>
        <div className="custom-card">
          <div className="emoji"> 😌🌿🛋️</div>
          <div className="label">Relax</div>
        </div>
        <div className="custom-card">
          <div className="emoji ">❤️🌹💑</div>
          <div className="label">Romantic</div>
        </div>
        <div className="custom-card">
          <div className="emoji">😡🔥🤘</div>
          <div className="label">Angry</div>
        </div>
        <div className="custom-card">
          <div className="emoji">🧘‍♂️💻📚</div>
          <div className="label">Focused</div>
        </div>
        <div className="custom-card">
          <div className="emoji"> 🕰️📼🎸</div>
          <div className="label">Nostalgic</div>
        </div>
      </div>
    </div>
  );
}
