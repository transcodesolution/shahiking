"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { recipeData } from "@/data/ui/recipes";

export default function Recipes() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const getEmbedUrl = (url) => {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&?]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

  return (
    <div className="bg-secondary py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="display-heading font-semibold text-primary">
            Recipes Preview
          </h2>
          <p className="body-md text-black mt-4">
            Healthy Recipes &amp; Smart Snack Ideas
          </p>
        </div>

        {/* Slider */}
        <div className="py-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onBeforeInit={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {recipeData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-secondary rounded-[40px] h-150 md:h-162.5 lg:h-176.25 xl:h-157.5 flex flex-col shadow-sm m-2 shadow-[#0000004D]">
                  {/* Image */}
                  <div className="relative z-10 rounded-t-[40px] cursor-pointer border-2 border-secondary shadow-sm shadow-[#0000004D]">
                    <iframe
                      src={getEmbedUrl(item.video)}
                      className="w-full h-120  relative z-10 rounded-t-[40px]"
                      allow="autoplay"
                      allowFullScreen
                      title={item.title}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 border-2 border-secondary inset-shadow-sm inset-shadow-[#BABABA40] rounded-b-[40px] h-full">
                    <h2 className="body-md font-medium text-black">
                      {item.title}
                    </h2>
                    <p className="body-sm text-black mt-2 text-sm">
                      {item.details}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows */}
          <div className="flex gap-4 justify-end mt-8">
            {/* Prev */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white p-3 rounded-full border-2 border-secondary shadow-sm shadow-[#0000004D] transition cursor-pointer"
            >
              <IoIosArrowBack className="text-[18px] md:text-[24px]" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white p-3 rounded-full border-2 border-secondary shadow-sm shadow-[#0000004D] transition cursor-pointer"
            >
              <IoIosArrowForward className="text-[18px] md:text-[24px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
