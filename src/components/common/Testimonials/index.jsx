"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './Testimonials.css';
import {
  exportTestimonialData,
  testimonialData,
} from "@/data/ui/testimonial";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials({
  bg = "bg-[#FAF8F5]",
  data = exportTestimonialData || testimonialData,
}) {
  const swiperRef = useRef(null);

  return (
    <section className={`${bg} overflow-hidden py-5 sm:py-25`}>
      <div className="mx-auto w-full">
        {/* Section Header */}
        <div className="text-center sm:mb-25">
          <h2 className="font-heading text-4xl font-bold leading-tight text-[#0E0E0E] sm:text-5xl">
            What Our{" "}
            <span className="text-primary">Customers Say</span>
          </h2>

          <p className="mt-1.5 text-sm text-[#7C7C7E] sm:text-base lg:text-xl">
            Feedback from people who have experienced Shahiking Foods.
          </p>
        </div>

        {/* Testimonial Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={data.length > 4}
          centeredSlides
          slidesPerView={1.35}
          spaceBetween={10}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.8,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="testimonials-swiper overflow-visible!"
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.id || index} className="h-auto!">
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="mt-7 flex items-center justify-center gap-2.5 sm:mt-12.5">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous testimonial"
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-[#D5CBB0] bg-white text-[#18181B] transition hover:bg-secondary sm:h-8 sm:w-8"
          >
            <IoIosArrowBack size={15} />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next testimonial"
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-[#D5CBB0] bg-white text-[#18181B] transition hover:bg-secondary sm:h-8 sm:w-8"
          >
            <IoIosArrowForward size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}