import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate h-[clamp(250px,18.49vw,355px)] overflow-hidden">
      <Image
        src="/Image/product/export/indian-spices-export-hero.webp"
        alt="An assortment of colorful spices"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 z-1 bg-[#0000006E]" />
      <div className="relative z-2 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-[64px]">
          Healthy &amp; Vegan Food
        </h1>
        <p className="mt-2 text-sm sm:text-base lg:text-[20px]">
          Clean, nutritious and protein-rich food for your lifestyle
        </p>
      </div>
    </section>
  );
}
