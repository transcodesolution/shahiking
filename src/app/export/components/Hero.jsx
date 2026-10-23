
"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/effect-fade";

const bannerSlides = [
  {
    id: 1,
    image: "/Image/product/export/export-home-hero-woman.webp",
    mobileImage: "/Image/product/export/export-home-hero-mobile.webp",
    alt: "Indian woman holding a basket of Indian spices",
    showContent: true,
  },
  {
    id: 2,
    image: "/Image/product/export/export-home-hero.webp",
    mobileImage: "/Image/product/export/export-home-hero.webp",
    alt: "Export trucks carrying parcels against a mountain landscape",
    showContent: false,
  },
];

export default function Hero() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (

    <section className="relative h-[84svh] min-h-[540px] max-h-[800px] overflow-hidden bg-secondary sm:h-[86svh] md:h-[87svh] md:min-h-[650px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={900}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            <div className="relative h-full min-h-130 w-full overflow-hidden md:min-h-162.5">
              {/* Desktop Image */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={slide.id === 1}
                sizes="100vw"
                className="hidden object-cover object-center md:block"
              />

              {/* Mobile Image */}
              <Image
                src={slide.mobileImage}
                alt={slide.alt}
                fill
                priority={slide.id === 1}
                sizes="100vw"
                className="object-cover object-center md:hidden"
              />

              {/* First Slide Content */}
              {slide.showContent && (
                <div className="container relative z-10 mx-auto flex h-full min-h-130 items-center px-5 pb-12 pt-16 sm:px-8 md:min-h-162.5 md:px-8 md:pb-12 md:pt-20 lg:px-12">
                  <div className="w-full max-w-3xl">
                    <p className="text-base font-medium text-black sm:text-xl lg:text-[30px]">
                      PREMIUM SPICE EXPORTS
                    </p>

                    <h1 className="font-heading text-[clamp(35px,5vw,65px)] font-bold leading-tight text-black">
                      Rooted in India.
                      <span className="block text-primary">
                        Ready for the World.
                      </span>
                    </h1>

                    <p className="text-[clamp(17px,2.5vw,35px)] font-medium text-black">
                      Authentic origin. Assured quality.
                    </p>

                    <a
                      href="/export/products"
                      className="mt-6 inline-flex w-full max-w-59 items-center justify-center gap-2 rounded-[20px] bg-primary px-4  py-2 md:py-3 text-base font-medium text-secondary transition duration-300 hover:border hover:border-primary hover:bg-secondary hover:text-primary md:mt-8"
                    >
                      Explore Spices
                      <FaArrowRightLong />
                    </a>
                  </div>
                </div>
              )}

              {/* Second Slide Title */}
              {!slide.showContent && (
                <div className="absolute inset-x-0 top-[40%] z-10 flex justify-center px-4 sm:top-[15%] md:top-[25%] md:px-8">
                  <h2 className="font-heading text-center text-[40px] font-bold uppercase leading-[1.15] text-black lg:text-[50px] xl:text-[80px]">
                    From <span className="text-primary">India</span> To
                    <span className="block"> 
                       the <span className="text-primary">World</span>
                    </span>
                  </h2>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Desktop Previous Arrow */}
      <button
        type="button"
        aria-label="Previous banner"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-[6%] top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer rounded-full border border-secondary bg-[#D9D9D933] p-2.5 shadow-sm backdrop-blur-sm transition hover:border-primary hover:bg-primary hover:text-secondary xl:block md:p-3"

      >
        <IoIosArrowBack className="text-xl" />
      </button>

      {/* Desktop Next Arrow */}
      <button
        type="button"
        aria-label="Next banner"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-[6%] top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer rounded-full border border-secondary bg-[#D9D9D933] p-2.5 shadow-sm backdrop-blur-sm transition hover:border-primary hover:bg-primary hover:text-secondary xl:block md:p-3"

      >
        <IoIosArrowForward className="text-xl" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/40 px-3 py-1.5 backdrop-blur-sm">
        {bannerSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to banner ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`h-2.5 cursor-pointer rounded-full transition-all duration-500 ${activeIndex === index
                ? "w-8 bg-primary"
                : "w-2.5 bg-primary/40 hover:bg-primary/70"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
