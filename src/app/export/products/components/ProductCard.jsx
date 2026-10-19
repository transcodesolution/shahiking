"use client";

import Image from "next/image";

export default function ProductCard({ item}) {
  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-[#D8D5CC] bg-[#F6F6F6] p-2 transition-shadow hover:shadow-md sm:p-2.5">
      <div className="relative flex h-31.25 items-center justify-center pb-2 sm:h-35">
        <Image src={item.img} alt={item.name} width={220} height={220}
          className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105 sm:p-3" />
      </div>
      <p title={item.name} className="truncate border-t border-[#D7D7D7] pt-2 text-center text-xs font-medium leading-5 text-primary sm:text-sm">{item.name}</p>
      <span className="sr-only">₹{Number(item.price).toFixed(2)}</span>
    </article>
  );
}
