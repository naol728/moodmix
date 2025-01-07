import React, { useEffect, useState } from "react";

export default function Mokeup() {
  const [urls, setUrl] = useState("");
 
  return (
    <div className="flex h-full bg-white justify-center items-center">
      {/* <video src={`${urls[0].url}`} alt="" /> */}
      {/*<video src={urls.video_high} alt="" autoplay loop></video> */}
    </div>
  );
}
