"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdStar,
} from "react-icons/io";
import { exportTestimonialData } from "@/data/ui/testimonial";


export default function Testimonial() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="py-10 md:py-16 overflow-hidden">
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

      {/* Swiper */}
      <div className="py-6 px-2 md:px-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
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
          {exportTestimonialData.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="bg-secondary border border-[#E8E2D5] rounded-2xl p-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => {
                    const star = i + 1;

                    if (item.rating >= star) {
                      return (
                        <IoMdStar
                          key={i}
                          className="text-[#C59B27] w-4 md:w-5 h-4 md:h-5"
                        />
                      );
                    } else {
                      return (
                        <IoMdStar
                          key={i}
                          className="text-[#0E0E0E] w-4 md:w-5 h-4 md:h-5"
                        />
                      );
                    }
                  })}
                </div>
                <div className="py-2">
                  <p className="body-sm text-medium text-accent italic">
                    "{item.review}"
                  </p>
                </div>
                <div className="border-b border-accent opacity-30 py-2"></div>
                <div className="xl:flex items-start gap-4 mb-3 pt-4">
                  <div className="bg-[#C59B2733] rounded-full overflow-hidden w-10 xl:w-12 h-10 xl:h-12 flex justify-center items-center">
                    <p className="text-[16px] text-[#C59B27] text-center font-semibold">{item.avatar}</p>
                  </div>
                  <div>
                    <h4 className="body-sm font-semibold text-black">
                      {item.name}
                    </h4>
                    <p className="text-[12px] xl:text-[14px] text-accent">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-5 mt-2 md:mt-10">
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
  );
}
