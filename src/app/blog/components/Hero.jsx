
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";

const categories = [
  "All",
  "Nutrition",
  "Recipes",
  "Muscle Growth",
  "Weight Loss",
];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#FCFCFC]">
      <div className="mx-auto max-w-[1720px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:py-28">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-10 xl:gap-14 py-8">
          {/* Left: Editorial Introduction */}
          <div className="flex w-full min-w-0 flex-col items-start gap-3 lg:flex-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#E3DCC4] bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#876510] sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              The Shahiking Journal
            </p>

            <h1 className="max-w-[700px] font-heading text-4xl font-bold leading-[1.08] text-[#927015] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[60px]">
              Fresh Reads for a Healthier, Stronger You
            </h1>

            <p className="max-w-[640px] text-base leading-7 text-[#7C7C7E] sm:text-lg sm:leading-8">
              Healthy recipes, nutrition tips, and clean eating inspiration
              crafted with royal botanical purity.
            </p>

            {/* Category Filters */}
            <div className="flex w-full flex-wrap items-center gap-3 pt-1">
              {categories.map((category, index) => (
                <Link
                  key={category}
                  href={
                    index === 0
                      ? "#latest-articles"
                      : `#${category.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className={`inline-flex shrink-0 items-center justify-center rounded-full border px-6 py-2 text-sm font-medium transition-colors duration-300 ${index === 0
                      ? "border-[#896811] bg-[#896811] text-white hover:bg-[#72540C]"
                      : "border-[#E8E0CD] bg-[#FFFEFA] text-[#333333] hover:border-[#896811] hover:bg-[#896811] hover:text-white"
                    }`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Featured Article Card */}
          <div className="w-full min-w-0 lg:w-[48%] lg:flex-none xl:w-[817px] xl:max-w-[55%]">
            <article className="rounded-[26px] border border-[#E8E0CD] bg-white p-3 shadow-[0_12px_35px_rgba(137,104,17,0.25)] sm:p-4 lg:p-5">
              {/* Featured Image */}
              <div className="relative overflow-hidden rounded-[18px]">
                <Image
                  src="/Image/blogpage/shahiking-journal.webp"
                  alt="Healthy plant-based food featured in the Shahiking Journal"
                  width={1678}
                  height={937}
                  priority
                  sizes="(max-width: 1279px) 100vw, 45vw"
                  className="h-[230px] w-full object-cover sm:h-[300px] lg:h-[320px] xl:h-[340px]"
                />

                <span className="absolute left-4 top-4 rounded-full bg-[#F8F5EB] px-4 py-[6px] text-sm font-semibold text-[#0E0E0E] shadow-sm">
                  Featured
                </span>
              </div>

              {/* Article Details */}
              <div className="pt-5">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-[#7C7C7E] sm:text-sm">
                  <FiClock
                    className="shrink-0 text-[#D5C9A6]"
                    aria-hidden="true"
                  />
                  <span>5 Min Read</span>
                  <span aria-hidden="true">•</span>
                  <span>Updated 2026</span>
                  <span aria-hidden="true">•</span>
                  <span className="font-medium text-[#33302A]">
                    By Shahiking Team
                  </span>
                </div>

                <h2 className="mt-2.5 font-heading text-xl font-semibold leading-[1.4] text-[#896811] sm:text-2xl">
                  The Science of Clean Plant Protein: Maximizing
                  Bioavailability &amp; Vitality
                </h2>

                <p className="mt-2.5 text-sm leading-6 text-[#7C7C7E] sm:text-base sm:leading-[26px]">
                  Unpack how combining sprouted legumes with golden pea
                  isolates triggers superior muscle protein synthesis
                  without bloating or heavy gut load.
                </p>

                <Link
                  href="#latest-articles"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-[#896811] bg-[#896811] px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#896811]"
                >
                  Read More
                  <FaArrowRightLong aria-hidden="true" className="text-xs" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
