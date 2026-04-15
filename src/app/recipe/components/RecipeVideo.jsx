import React from "react";

export default function RecipeVideo() {
  return (
    <div>
      <video
        className="h-150 w-full object-cover relative z-10 border border-primary rounded-[40px] shadow-sm shadow-[#0000004D]"
        autoPlay
        loop
        muted
        controls
      >
        <source src="/Video/Recipe_video2.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
