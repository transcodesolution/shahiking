import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate h-62.5 w-full overflow-hidden bg-black">
      <Image
        src="/Image/product/export/product-export-hero.webp"
        alt="An assortment of colorful spices"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 bg-[#0000006E]"
      />
    </section>
  );
}