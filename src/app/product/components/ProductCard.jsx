"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

export default function ProductCard({
  item,
  isWishlisted,
  onWishlistToggle,
}) {
  return (
    <div className="bg-secondary flex flex-col border border-[#C1C1C1] rounded-xl p-2 md:p-4 shadow-sm relative z-0 group">
      
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-(--gradientStart) to-(--gradientEnd) opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"></div>

      {/* Image */}
      <div className="relative border-b border-[#C1C1C1] pb-4 z-10">
        <Image
          src={item.img}
          alt={item.name}
          width={96}
          height={148}
          className="mx-auto w-18 md:w-24 h-30 md:h-36 object-cover"
        />

        {/* ✅ Accessible Wishlist Button */}
        <button
          onClick={onWishlistToggle}
          aria-label={
            isWishlisted
              ? `Remove ${item.name} from wishlist`
              : `Add ${item.name} to wishlist`
          }
          aria-pressed={isWishlisted}
          className="absolute top-0 right-0 bg-white p-1 rounded-full shadow shadow-[#0000004D]"
        >
          {isWishlisted ? (
            <IoMdHeart className="text-[#D7443E] text-[22px]" />
          ) : (
            <IoMdHeartEmpty className="text-black text-[22px]" />
          )}
        </button>
      </div>

      {/* Title */}
      <h3 className="mt-2 text-[14px] md:text-[18px] font-medium text-primary group-hover:text-secondary relative z-10 flex-1">
        {item.name}
      </h3>

      {/* Price + Rating */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-accent text-[14px] md:text-[18px] group-hover:text-secondary relative z-10">
          {item.price}
        </span>

        <div className="flex items-center gap-1 text-yellow-500 text-[14px] md:text-[18px] relative z-10">
          <FaStar />
          <span className="text-[14px] md:text-[18px] text-accent group-hover:text-secondary">
            {item.rating}.0
          </span>
        </div>
      </div>
    </div>
  );
}