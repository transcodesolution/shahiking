"use client";
import React, { useRef } from "react";

const realStoryData = [
  {
    id: 1,
    video: "https://youtube.com/shorts/k0PneQ_zo_A",
  },
  {
    id: 2,
    video: "https://youtube.com/shorts/k0PneQ_zo_A",
  },
  {
    id: 3,
    video: "https://youtube.com/shorts/k0PneQ_zo_A",
  },
  {
    id: 4,
    video: "https://youtube.com/shorts/k0PneQ_zo_A",
  },
];

export default function RealStories() {
  const iframeRefs = useRef([]);

  const getEmbedUrl = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&?]+)/,
    );

    return match
      ? `https://www.youtube.com/embed/${match[1]}?enablejsapi=1&mute=1&playsinline=1`
      : url;
  };

  const controlVideos = (activeIdx) => {
    iframeRefs.current.forEach((iframe, index) => {
      if (!iframe) return;

      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: index === activeIdx ? "playVideo" : "pauseVideo",
          args: [],
        }),
        "*",
      );
    });
  };

  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="display-heading font-semibold text-center text-primary">
            <span className="text-black">Real</span> Stories,{" "}
            <span className="text-black">Real</span> Partnerships
          </h1>
          <p className="body-md text-accent text-center mt-2">
            See what our global partners say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 py-6 md:grid-cols-4">
          {realStoryData.map((item, index) => (
            <div
              key={item.id ?? index}
              className="relative aspect-9/16 w-full overflow-hidden rounded-4xl bg-secondary shadow-sm"
            >
              <iframe
                ref={(e) => {
                  iframeRefs.current[index] = e;
                }}
                src={getEmbedUrl(item.video)}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                title={item.title || `Real story ${index + 1}`}
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-10">
                <h2 className="text-sm font-semibold text-white">
                  {item.title}
                </h2>

                {item.description && (
                  <p className="mt-1 text-xs text-white/80">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
