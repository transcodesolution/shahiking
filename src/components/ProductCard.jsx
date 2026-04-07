import Image from "next/image";
import React from "react";

export default function ProductCard({ item }) {
  return (
    <div className="bg-secondary rounded-[40px]">
      {/* Image */}
      <div className="">
        <Image
          src={item.img}
          alt={item.name}
          width={534}
          height={260}
          className="w-133.5 h-65 object-cover border-2 border-secondary rounded-tr-[40px] rounded-tl-[40px] shadow-sm shadow-[#0000004D]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 border-2 border-secondary inset-shadow-sm inset-shadow-[#BABABA40] shadow-sm shadow-[#0000004D] rounded-b-[40px]">
        <h3 className="font-medium body-md text-black">{item.name}</h3>

        <p className="body-sm text-black mt-2 max-w-74.25 flex-1">
          {item.desc}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-primary text-[20px] md:text-[24px] font-bold">
            ₹{item.price}
          </span>

          <button className="bg-primary text-secondary border border-primary px-5 py-1 rounded-full text-[16px] hover:bg-secondary hover:text-primary duration-500 cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
