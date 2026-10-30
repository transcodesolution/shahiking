"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const tocItems = [
  { id: "what-is-plant-protein", label: "What is Plant Protein?" },
  { id: "top-benefits", label: "Top Benefits" },
  { id: "best-vegan-sources", label: "Best Vegan Sources" },
  { id: "daily-protein-intake", label: "Daily Protein Intake" },
  { id: "easy-integration", label: "Easy Integration" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

export default function BlogContent() {
  const [activeSection, setActiveSection] = useState("what-is-plant-protein");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocItems[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <section className="bg-[#FCFCFC] pb-16 pt-2 lg:pb-24">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12 xl:gap-[72px]">
          {/* ================= LEFT STICKY SIDEBAR (~320px) ================= */}
          <aside className="w-full shrink-0 space-y-6 lg:sticky lg:top-28 lg:w-[320px] xl:w-[325px]">
            {/* Card 1: In This Guide (TOC) */}
            <div className="rounded-[20px] border border-[#EBE4D5] bg-white p-5 shadow-xs sm:p-6">
              <h3 className="font-heading text-xl font-bold text-primary pb-3 border-b border-[#EBE4D5]">
                In This Guide
              </h3>
              <nav aria-label="Table of Contents" className="mt-4">
                <ul className="space-y-3.5">
                  {tocItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => scrollToSection(e, item.id)}
                          className={`flex items-center text-[15px] transition-colors duration-200 ${
                            isActive
                              ? "font-bold text-primary"
                              : "text-[#7C7C7E] hover:text-primary pl-3.5"
                          }`}
                        >
                          {isActive && (
                            <span className="mr-2.5 h-4.5 w-1 shrink-0 rounded-full bg-primary" />
                          )}
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Card 2: Share This Article */}
            <div className="rounded-[20px] border border-[#EBE4D5] bg-white p-5 shadow-xs sm:p-6">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#7C7C7E]">
                SHARE THIS ARTICLE
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/sharer/sharer.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EBE4D5] bg-[#FAF8F3] text-primary shadow-xs transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
                >
                  <FaFacebookF className="h-3.5 w-3.5" />
                </a>

                <a
                  href="https://twitter.com/intent/tweet"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EBE4D5] bg-[#FAF8F3] text-primary shadow-xs transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
                >
                  <FaXTwitter className="h-3.5 w-3.5" />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EBE4D5] bg-[#FAF8F3] text-primary shadow-xs transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
                >
                  <FaInstagram className="h-3.5 w-3.5" />
                </a>

                <a
                  href="https://www.linkedin.com/sharing/share-offsite/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EBE4D5] bg-[#FAF8F3] text-primary shadow-xs transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
                >
                  <FaLinkedinIn className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3: Key Takeaway */}
            <div className="rounded-[20px] bg-[#F5EFE6] p-5 shadow-xs sm:p-6">
              <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                KEY TAKEAWAY
              </h4>
              <p className="text-[14px] leading-[1.65] text-[#333333]">
                Combining sprouted legumes with ancient seeds delivers a
                complete amino acid score identical to whey, with zero
                gastrointestinal strain.
              </p>
            </div>
          </aside>

          {/* ================= RIGHT ARTICLE COLUMN (airy line-height 1.8) ================= */}
          <article className="flex-1 min-w-0 space-y-12 sm:space-y-14">
            {/* Intro Paragraph with Large Dropcap */}
            <div className="space-y-4">
              <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#222222]">
                <span className="float-left mr-3 pt-1 font-heading text-[58px] sm:text-[64px] font-bold leading-[0.8] text-[#111111]">
                  P
                </span>
                lant-based nutrition is experiencing a profound revolution. Gone
                are the outdated days when fitness enthusiasts assumed optimal
                muscle synthesis, sustained stamina, and metabolic agility
                required animal-derived proteins. Across athletic arenas and
                wellness circles alike, conscious individuals are turning to
                clean botanical proteins to nourish their peak potential while
                honoring their digestion and longevity.
              </p>
              <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#555555]">
                Whether you are an aspiring athlete aiming for clean lean
                muscle, a working professional seeking sustained energy without
                post-lunch crashes, or looking to shed stubborn visceral fat,
                plant-based proteins unlock unmatched metabolic purity.
              </p>
            </div>

            {/* Section 1: What is Plant-Based Protein? */}
            <section
              id="what-is-plant-protein"
              className="scroll-mt-32 space-y-4"
            >
              <h2 className="font-heading text-2xl font-bold text-primary sm:text-[28px] md:text-[32px]">
                What is Plant-Based Protein?
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#333333]">
                At its fundamental core, plant-based protein simply refers to
                high-density amino acid compounds harvested directly from whole
                botanical kingdoms. Unlike traditional dairy or meat sources,
                plant proteins arrive naturally packaged alongside micronutrient
                allies: soluble and insoluble fiber, bioavailable polyphenols,
                essential minerals, and protective antioxidants.
              </p>
              <ul className="space-y-3.5 pt-1">
                <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] leading-[1.7] text-[#333333]">
                  <svg
                    className="mt-1.5 h-3 w-3 shrink-0 text-primary"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M3 1.5l7 4.5-7 4.5V1.5z" />
                  </svg>
                  <div>
                    <span className="font-bold text-primary">
                      Naturally Clean &amp; Hypoallergenic:
                    </span>{" "}
                    Completely devoid of lactose, artificial growth hormones,
                    antibiotics, and heavy saturated fats.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] leading-[1.7] text-[#333333]">
                  <svg
                    className="mt-1.5 h-3 w-3 shrink-0 text-primary"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M3 1.5l7 4.5-7 4.5V1.5z" />
                  </svg>
                  <div>
                    <span className="font-bold text-primary">
                      High Bioavailability:
                    </span>{" "}
                    Modern micro-milling and natural fermentation unlock amino
                    acid absorption rates exceeding 93%.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] leading-[1.7] text-[#333333]">
                  <svg
                    className="mt-1.5 h-3 w-3 shrink-0 text-primary"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M3 1.5l7 4.5-7 4.5V1.5z" />
                  </svg>
                  <div>
                    <span className="font-bold text-primary">
                      Sustainable Vitality:
                    </span>{" "}
                    Demands 90% less freshwater and land footprint compared to
                    conventional livestock farming.
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 2: Top Benefits of Plant-Based Protein */}
            <section id="top-benefits" className="scroll-mt-32 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-heading text-2xl font-bold text-primary sm:text-[28px] md:text-[32px]">
                  Top Benefits of Plant-Based Protein
                </h2>
                <span className="rounded-full border border-[#E3DCC4] bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                  EVIDENCE-BASED
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* 01 */}
                <div className="rounded-[20px] border border-[#EBE4D5] bg-white p-6 shadow-xs sm:p-7">
                  <span className="font-heading text-2xl sm:text-[28px] md:text-[32px] font-semibold text-[#C4A864]">
                    01
                  </span>
                  <h3 className="mb-2 mt-2 font-heading text-lg font-bold text-primary sm:text-[20px]">
                    Supports Muscle Growth &amp; Recovery
                  </h3>
                  <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#555555]">
                    Rich in branched-chain amino acids (BCAAs)—leucine,
                    isoleucine, and valine—botanical proteins trigger mTOR
                    signaling to spark rapid myofibrillar repair without the
                    heavy inflammation or bloating associated with dairy whey.
                  </p>
                </div>

                {/* 02 */}
                <div className="rounded-[20px] border border-[#EBE4D5] bg-white p-6 shadow-xs sm:p-7">
                  <span className="font-heading text-2xl sm:text-[28px] md:text-[32px] font-semibold text-[#C4A864]">
                    02
                  </span>
                  <h3 className="mb-2 mt-2 font-heading text-lg font-bold text-primary sm:text-[20px]">
                    Helps in Weight Loss &amp; Fat Management
                  </h3>
                  <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#555555]">
                    High thermogenic effect paired with natural soluble
                    prebiotic fiber promotes deep satiety, suppressing ghrelin
                    spikes and preventing mid-afternoon sugar cravings during
                    caloric deficits.
                  </p>
                </div>

                {/* 03 */}
                <div className="rounded-[20px] border border-[#EBE4D5] bg-white p-6 shadow-xs sm:p-7">
                  <span className="font-heading text-2xl sm:text-[28px] md:text-[32px] font-semibold text-[#C4A864]">
                    03
                  </span>
                  <h3 className="mb-2 mt-2 font-heading text-lg font-bold text-primary sm:text-[20px]">
                    Improves Gut Health
                  </h3>
                  <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#555555]">
                    Fermented golden pea and brown rice isolates actively
                    nourish beneficial gut flora, fostering short-chain fatty
                    acid (SCFA) generation, enhancing nutrient assimilation, and
                    eradicating post-workout digestive distress.
                  </p>
                </div>

                {/* 04 */}
                <div className="rounded-[20px] border border-[#EBE4D5] bg-white p-6 shadow-xs sm:p-7">
                  <span className="font-heading text-2xl sm:text-[28px] md:text-[32px] font-semibold text-[#C4A864]">
                    04
                  </span>
                  <h3 className="mb-2 mt-2 font-heading text-lg font-bold text-primary sm:text-[20px]">
                    Supports Heart Health
                  </h3>
                  <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#555555]">
                    Completely free of dietary cholesterol and saturated fatty
                    acids, plant nutrition is clinically correlated with
                    stabilized arterial pressure, elevated HDL profiles, and
                    enduring vascular flexibility.
                  </p>
                </div>
              </div>
            </section>

            {/* Pull Quote Block */}
            <div className="rounded-[20px] border-l-4 border-primary bg-[#F7F4EB] p-6 shadow-xs sm:rounded-[24px] sm:p-8 md:p-10">
              <blockquote className="font-heading text-xl italic leading-[1.48] text-primary sm:text-2xl md:text-[26px]">
                “Small daily changes can significantly improve your nutrition.
                True strength isn&apos;t rushed—it is cultivated with pristine
                ingredients that honor your body&apos;s royal balance.”
              </blockquote>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#7C7C7E]">
                — SHAHIKING WELLNESS PHILOSOPHY
              </p>
            </div>

            {/* Section 3: Best Vegan Protein Sources */}
            <section
              id="best-vegan-sources"
              className="scroll-mt-32 space-y-4"
            >
              <h2 className="font-heading text-2xl font-bold text-primary sm:text-[28px] md:text-[32px]">
                Best Vegan Protein Sources for a High-Protein Diet
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#333333]">
                Crafting a complete amino acid spectrum is effortless when you
                combine botanicals with complementary profiles:
              </p>
              <ul className="space-y-3.5 pt-1">
                <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] leading-[1.7] text-[#333333]">
                  <svg
                    className="mt-1.5 h-3 w-3 shrink-0 text-primary"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M3 1.5l7 4.5-7 4.5V1.5z" />
                  </svg>
                  <div>
                    <span className="font-bold text-primary">
                      Yellow Pea Isolate:
                    </span>{" "}
                    Exceptional lysine and arginine concentrations, highly
                    digestible, and ideal for lean tissue replenishment.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] leading-[1.7] text-[#333333]">
                  <svg
                    className="mt-1.5 h-3 w-3 shrink-0 text-primary"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M3 1.5l7 4.5-7 4.5V1.5z" />
                  </svg>
                  <div>
                    <span className="font-bold text-primary">
                      Organic Sprouted Brown Rice:
                    </span>{" "}
                    Bridges the methionine gap and offers smooth velvety texture
                    with zero grittiness.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] leading-[1.7] text-[#333333]">
                  <svg
                    className="mt-1.5 h-3 w-3 shrink-0 text-primary"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M3 1.5l7 4.5-7 4.5V1.5z" />
                  </svg>
                  <div>
                    <span className="font-bold text-primary">
                      Hemp &amp; Chia Seeds:
                    </span>{" "}
                    Packed with essential Omega-3 fatty acids, magnesium, and
                    restorative zinc.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] leading-[1.7] text-[#333333]">
                  <svg
                    className="mt-1.5 h-3 w-3 shrink-0 text-primary"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M3 1.5l7 4.5-7 4.5V1.5z" />
                  </svg>
                  <div>
                    <span className="font-bold text-primary">
                      Green Edamame &amp; Ancient Lentils:
                    </span>{" "}
                    Whole-food champions delivering slow-burning complex
                    carbohydrates and robust dietary fiber.
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 4: How Much Protein Do You Need Daily? */}
            <section
              id="daily-protein-intake"
              className="scroll-mt-32 space-y-6"
            >
              <h2 className="font-heading text-2xl font-bold text-primary sm:text-[28px] md:text-[32px]">
                How Much Protein Do You Need Daily?
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#333333]">
                Optimal protein targets vary depending on physical exertion,
                athletic ambitions, and biological metabolic baselines:
              </p>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="rounded-[20px] bg-[#F7F4EB] p-6 shadow-xs sm:p-7">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[#7C7C7E]">
                    SEDENTARY TO MODERATE BASELINE
                  </span>
                  <div className="font-heading text-3xl font-bold text-primary sm:text-[36px] mb-2">
                    0.8g per kg
                  </div>
                  <p className="text-[14px] leading-[1.65] text-[#555555]">
                    Recommended for maintaining baseline enzymatic functions
                    and everyday organ vitality.
                  </p>
                </div>
                <div className="rounded-[20px] bg-[#F7F4EB] p-6 shadow-xs sm:p-7">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[#7C7C7E]">
                    ACTIVE TRAINING &amp; HYPERTROPHY
                  </span>
                  <div className="font-heading text-3xl font-bold text-primary sm:text-[36px] mb-2">
                    1.2–2.0g per kg
                  </div>
                  <p className="text-[14px] leading-[1.65] text-[#555555]">
                    Tailored for active individuals, resistance trainees, and
                    accelerated athletic recovery.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Easy Ways to Add Plant-Based Protein */}
            <section id="easy-integration" className="scroll-mt-32 space-y-4">
              <h2 className="font-heading text-2xl font-bold text-primary sm:text-[28px] md:text-[32px]">
                Easy Ways to Add Plant-Based Protein to Your Diet
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#333333]">
                Incorporating premium plant nutrition into your daily lifestyle
                is simple, versatile, and deeply delicious:
              </p>
              <ul className="space-y-3.5 pt-1">
                <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] leading-[1.7] text-[#333333]">
                  <svg
                    className="mt-1.5 h-3 w-3 shrink-0 text-primary"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M3 1.5l7 4.5-7 4.5V1.5z" />
                  </svg>
                  <div>
                    <span className="font-bold text-primary">
                      The Morning Power Blend:
                    </span>{" "}
                    Whisk one scoop of Shahiking Botanical Isolate into cold
                    almond milk, fresh blueberries, and a spoonful of chia.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] leading-[1.7] text-[#333333]">
                  <svg
                    className="mt-1.5 h-3 w-3 shrink-0 text-primary"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M3 1.5l7 4.5-7 4.5V1.5z" />
                  </svg>
                  <div>
                    <span className="font-bold text-primary">
                      Hearty Nourish Bowls:
                    </span>{" "}
                    Base your lunches with quinoa, warm chickpeas, steamed
                    edamame, and a drizzle of creamy tahini.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] leading-[1.7] text-[#333333]">
                  <svg
                    className="mt-1.5 h-3 w-3 shrink-0 text-primary"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M3 1.5l7 4.5-7 4.5V1.5z" />
                  </svg>
                  <div>
                    <span className="font-bold text-primary">
                      Nutrient-Dense Baking:
                    </span>{" "}
                    Substitute 20% of your flour in pancakes, muffins, or banana
                    bread with golden pea protein.
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 6: Final Thoughts */}
            <section id="final-thoughts" className="scroll-mt-32 space-y-4">
              <h2 className="font-heading text-2xl font-bold text-primary sm:text-[28px] md:text-[32px]">
                Final Thoughts
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#333333]">
                Embracing plant-based protein isn&apos;t about sacrifice—it is a
                conscious upgrade to how your body performs, recovers, and
                flourishes. By choosing whole botanical sources that work in
                synchrony with your biology, you unlock sustained vitality
                without gastrointestinal discomfort or sluggishness.
              </p>
            </section>

            {/* Inline CTA Card */}
            <div className="rounded-[24px] border-2 border-primary bg-white p-6 shadow-sm sm:rounded-[30px] sm:p-8 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="mb-3 inline-block rounded-full bg-[#F5EFE6] px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    ROYAL NUTRITION AWAITS
                  </span>
                  <h3 className="mb-2 font-heading text-2xl font-bold text-primary sm:text-[28px] md:text-[32px]">
                    Upgrade Your High-Protein Diet Today
                  </h3>
                  <p className="max-w-[620px] text-[14px] sm:text-[15px] leading-[1.65] text-[#666666]">
                    Discover Shahiking&apos;s royal botanical protein
                    isolates—lab-verified purity, 25g complete amino acids per
                    serving, and 100% dairy-free lightness.
                  </p>
                </div>
                <Link
                  href="/product"
                  className="inline-flex shrink-0 self-start rounded-full bg-primary px-8 py-3.5 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#68500F] hover:shadow-lg sm:px-10 sm:py-4 sm:text-base md:self-center"
                >
                  Shop Healthy Now
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
