"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { testimonialData } from "@/data/products";

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="bg-secondary py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-3">
          <h5 className="body-sm bg-primary text-white rounded-full px-4 py-1 text-center">
            Testimonials
          </h5>
          <h1 className="display-heading text-primary font-bold text-center">
            Read Our Creative People Story
          </h1>
          <p className="body-md text-black text-center">
            Real stories from real people! See how our services have transformed
            their experiences.
          </p>
        </div>
      </div>
      <div>
        <div className="hidden lg:flex justify-center items-center mt-8 py-15 overflow-hidden">
          <div className="relative flex items-center justify-center w-full">
            {testimonialData.map((item, index) => {
              const total = testimonialData.length;

              // circular diff
              let diff = index - activeIndex;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const absDiff = Math.abs(diff);

              // size 
              let size = 60;
              if (absDiff === 0) size = 100;
              else if (absDiff === 1) size = 90;
              else if (absDiff === 2) size = 80;
              else if (absDiff === 3) size = 70;

              /// spacing levels (customizable)
              const gapMap = [0, 130, 120, 110, 100];

              // calculate translateX
              let translateX = 0;

              for (let i = 1; i <= Math.abs(diff); i++) {
                translateX += gapMap[i] || 60;
              }

              // apply direction   
              if (diff < 0) translateX *= -1;

              return (
                <div
                  key={item.id}
                  className="absolute flex justify-center items-center transition-all duration-500 ease-in-out"
                  style={{
                    width: size,
                    height: size,
                    transform: `translateX(${translateX}px) scale(${absDiff === 0 ? 1.1 : 1})`,
                    zIndex: absDiff === 0 ? 10 : 10 - absDiff,
                    opacity: absDiff > 4 ? 0.3 : 1,
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={size}
                    height={size}
                    onClick={() => swiperRef.current?.slideToLoop(index)}
                    className="rounded-full object-cover border-2 border-primary shadow w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-6">
          {/* Swiper */}
          <Swiper
            modules={[Navigation ,Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000, // 4  seconds
              disableOnInteraction: false,
              pauseOnMouseEnter: true, 
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {testimonialData.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div
                  className={`bg-white rounded-[40px] p-5 border border-accent transition-all duration-300
                  ${activeIndex === index ? "h-96 md:h-92 xl:h-79" : "h-92 md:h-88 xl:h-77 mt-4 xl:mt-2"}`}
                >
                  {/* User */}
                  <div className="none md:flex items-start gap-2 md:gap-4 xl:gap-6 mb-4">
                    <div className="rounded-full overflow-hidden border-2 border-primary w-17.5 md:w-20 xl:w-25 h-17.5 md:h-20 xl:h-25">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={140}
                        height={140}
                        className="object-cover w-17.5 md:w-20 xl:w-25 h-17.5 md:h-20 xl:h-25"
                      />
                    </div>
                    <div>
                      <h4 className="body-md font-medium text-black">
                        {item.name}
                      </h4>
                      <p className="text-[14px] md:text-[18px] text-accent">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star, i) => {
                      if (item.rating >= star) {
                        // full star
                        return (
                          <FaStar
                            key={i}
                            className="text-[#FFC107] w-4.5 md:w-6 h-4.5 md:h-6"
                          />
                        );
                      } else if (item.rating >= star - 0.5) {
                        // half star
                        return (
                          <FaStarHalfAlt
                            key={i}
                            className="text-[#FFC107] w-4.5 md:w-6 h-4.5 md:h-6"
                          />
                        );
                      } else {
                        return (
                          <FaStar
                            key={i}
                            className="text-accent w-4.5 md:w-6 h-4.5 md:h-6"
                          />
                        );
                      }
                    })}

                    <span className="text-accent text-[14px] md:text-[18px] ml-2">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>

                  {/* Review */}
                  <p className="text-accent text-[14px] md:text-[18px] leading-5 md:leading-6">
                    &quot;{item.review}&quot;
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center gap-5 mt-10">
          {/* Prev */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className="bg-white p-3 rounded-full border-2 border-secondary shadow-sm shadow-[#0000004D] transition"
          >
            <IoIosArrowBack
              className={`text-[18px] md:text-[24px] ${
                isBeginning ? "text-accent" : "text-black"
              }`}
            />
          </button>

          {/* Next */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className="bg-white p-3 rounded-full border-2 border-secondary shadow-sm shadow-[#0000004D] transition"
          >
            <IoIosArrowForward
              className={`text-[18px] md:text-[24px] ${isEnd ? "text-accent" : "text-black"}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
