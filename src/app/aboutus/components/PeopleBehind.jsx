import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Dharmesh Kumbhani",
    role: "Chief Executive Officer (CEO)",
    badge: "Leadership",
    description:
      "Guiding company strategy, brand philosophy, and market presence.",
    image: "/Image/aboutpage/ceo.webp",
  },
  {
    name: "Shubham Sutariya",
    role: "Chief Technology Officer (CTO)",
    badge: "Technology",
    description:
      "Leading operational tech, digital infrastructure, and logistics data systems.",
    image: "/Image/aboutpage/cto.webp",
  },
  {
    name: "Arpit Nakrani",
    role: "Chief Operating Officer (COO)",
    badge: "Operations",
    description:
      "Managing processing protocols, quality controls, and supply chain timelines.",
    image: "/Image/aboutpage/coo.webp",
  },
  {
    name: "Dhruv Mesiya",
    role: "Head of Sales",
    badge: "Commercial",
    description:
      "Fostering retailer relationships, B2B distributions, and market outreach.",
    image: "/Image/aboutpage/sales-head.webp",
  },
  {
    name: "Vidhi Pandav",
    role: "Head of Human Resources (HR)",
    badge: "People",
    description:
      "Cultivating workplace excellence, talent development, and organizational culture.",
    image: "/Image/aboutpage/hr.webp",
  },
  {
    name: "Rina Kumbhani",
    role: "Operations & Facility Manager",
    badge: "Operations",
    description:
      "Directing everyday warehouse safety, sorting accuracy, and shipment packaging.",
    image: "/Image/aboutpage/manager.webp",
  },
];

export default function PeopleBehind() {
  return (
    <section className="bg-[#FCFCFC] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section Intro */}
        <div className="mb-8 sm:mb-12">
          <span className="mb-2.5 block text-sm font-semibold uppercase tracking-[0.18em] text-primary sm:text-base">
            Leadership &amp; Operations
          </span>

          <h2 className="font-heading text-4xl font-bold leading-tight text-[#0E0E0E] sm:text-5xl lg:text-6xl">
            The People Behind{" "}
            <span className="text-primary">ShahiKing</span>
          </h2>

          <p className="mt-3 text-sm text-[#696860] sm:text-base lg:text-xl">
            Meet the people guiding our vision, operations, and relationships.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {team.map((member) => (
            <article
              key={member.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stroke bg-[#FAF8F5] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Portrait */}
              <div className="relative aspect-4/5 w-full overflow-hidden bg-[#EBE7DE]">

                {/* Office Background */}
                <Image
                  src="/Image/aboutpage/pepole-behind.webp"
                  alt=""
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="pointer-events-none scale-[1.56] origin-[62%_0%] object-cover"
                />

                {/* Person Image */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 top-10 flex items-end justify-center sm:top-12">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-contain object-bottom scale-[1.09] transition-transform duration-500 group-hover:scale-[1.12]"
                  />
                </div>

                {/* Category Badge */}
                <span className="absolute right-4 top-4 z-10 rounded-full border border-stroke bg-[#FAF8F5]/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm sm:right-4 sm:top-4">
                  {member.badge}
                </span>
              </div>

              {/* Member Details */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg xl:text-xl font-bold text-[#18181B]">
                  {member.name}
                </h3>

                <p className="mb-2.5 mt-0.5 text-sm xl:text-xl font-semibold text-primary">
                  {member.role}
                </p>

                <p className="text-sm xl:text-base leading-relaxed text-[#696860]">
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}