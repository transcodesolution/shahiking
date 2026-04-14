"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { testimonialData } from "@/data/ui/testimonial";
import AvatarCarousel from "./AvatarCarousel";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="bg-secondary py-16 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h5 className="body-sm bg-primary text-white rounded-full px-4 py-1 inline-block">
          Testimonials
        </h5>
        <h1 className="display-heading text-primary font-bold mt-3">
          Read Our Creative People Story
        </h1>
        <p className="body-md text-black mt-2">
          Real stories from real people!
        </p>
      </div>

      {/* Avatar Carousel */}
      <AvatarCarousel
        data={testimonialData}
        activeIndex={activeIndex}
        onClick={(index) => swiperRef.current?.slideToLoop(index)}
      />

      {/* Swiper */}
      <div className="py-6">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          centeredSlides
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
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
              <TestimonialCard
                item={item}
                isActive={activeIndex === index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-5 mt-10">
        <button 
         onClick={() => swiperRef.current?.slidePrev()}
         className="bg-white p-3 rounded-full border-2 border-secondary shadow-sm shadow-[#0000004D] transition cursor-pointer"
        >
          <IoIosArrowBack className="text-[18px] md:text-[24px]"/>
        </button>
        <button 
         onClick={() => swiperRef.current?.slideNext()}
         className="bg-white p-3 rounded-full border-2 border-secondary shadow-sm shadow-[#0000004D] transition cursor-pointer"
        >
          <IoIosArrowForward className="text-[18px] md:text-[24px]"/>
        </button>
      </div>
    </div>
  );
}