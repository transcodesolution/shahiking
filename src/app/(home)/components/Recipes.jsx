"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { recipeData } from "@/data/products";

export default function Recipes() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
            autoplay={{
              delay: 4000, // 4 seconds
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              console.log(swiper.realIndex);
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
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
                <div className="bg-secondary rounded-[40px] h-150 md:h-162.5 lg:h-176.25 xl:h-157.5 flex flex-col shadow-sm m-2">
                  {/* Image */}
                  <div className="relative z-10">
                    <video
                      className="h-123.75 md:h-130 xl:h-123.75 w-full object-cover relative z-10 border-2 border-secondary rounded-t-[40px] shadow-sm shadow-[#0000004D]"
                      autoPlay
                      loop
                      muted
                      controls
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>

                  {/* Content */}
                  <div className="p-6 border-2 border-secondary inset-shadow-sm inset-shadow-[#BABABA40] rounded-b-[40px]">
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
              ref={prevRef}
              className={`bg-white p-3 rounded-full border-2 border-secondary shadow-sm transition
              ${
                isBeginning
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-105"
              }`}
            >
              <IoIosArrowBack className="text-[18px] md:text-[24px]" />
            </button>

            {/* Next */}
            <button
              ref={nextRef}
              className={`bg-white p-3 rounded-full border-2 border-secondary shadow-sm transition
              ${isEnd ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
            >
              <IoIosArrowForward className="text-[18px] md:text-[24px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
