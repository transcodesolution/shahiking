import React from "react";

export default function RecipeVideo() {
  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/f7yEv98EGPk"}
        className="w-full h-120 rounded-[40px] object-cover relative z-10 border border-primary shadow-sm shadow-[#0000004D]"
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
}
