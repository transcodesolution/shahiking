import Image from "next/image";
import React from "react";

const badges = ["Healthy", "Premium", "Consistent"];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-240.5 items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/Image/aboutpage/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover -z-20"
      />

      {/* Content */}
      <div className="container mx-auto px-5 py-30 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Left Content */}
          <div className="text-left">
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-normal text-[#F6F6F6] sm:text-5xl lg:text-[58px] xl:text-[64px]">
              Nourishing Modern
              <span className="block">Lifestyles with</span>
              <span>Premium Health Foods</span>
            </h1>

            <p className="mt-6 max-w-xl text-[14px] text-stroke sm:text-base lg:text-xl">
              At ShahiKing, we&apos;re building a trusted premium health food
              brand for modern families. Our range of nutritious snacks and
              high-protein plant-based foods is crafted with clean ingredients,
              authentic taste, and strict quality standards to support healthy,
              balanced lifestyles. 🌿🍲
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-secondary px-6 py-3 text-sm font-medium text-primary transition-all duration-300
              hover:bg-white hover:shadow-lg sm:text-base"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[min(100%,38rem)] aspect-square">
              <Image
                src="/Image/aboutpage/hero.webp"
                alt="Nourishing Modern Lifestyles"
                fill
                priority
                sizes="(max-width: 1023px) 90vw, 45vw"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}