"use client";
import Image from "next/image";
import { getAvatarStyle } from "./utils";

export default function AvatarCarousel({ data, activeIndex, onClick }) {
  const total = data.length;

  return (
    <div className="hidden lg:flex justify-center items-center mt-8 py-15 overflow-hidden">
      <div className="relative flex items-center justify-center w-full">
        {data.map((item, index) => {
          const { size, translateX, absDiff } = getAvatarStyle(
            index,
            activeIndex,
            total
          );

          return (
            <div
              key={item.id}
              className="absolute flex justify-center items-center transition-all duration-500 ease-in-out"
              style={{
                width: size,
                height: size,
                transform: `translateX(${translateX}px) scale(${
                  absDiff === 0 ? 1.1 : 1
                })`,
                zIndex: absDiff === 0 ? 10 : 10 - absDiff,
                opacity: absDiff > 4 ? 0.3 : 1,
              }}
            >
              <Image
                src={item.img}
                alt={item.name}
                width={size}
                height={size}
                onClick={() => onClick(index)}
                className="rounded-full object-cover border-2 border-primary shadow w-full h-full cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}