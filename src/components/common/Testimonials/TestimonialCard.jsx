import Image from "next/image";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function TestimonialCard({ item, isActive }) {
  return (
    <div
      className={`bg-white rounded-[40px] p-3 xl:p-5 border border-accent transition-all duration-300
      ${isActive ? "h-62 md:h-108 xl:h-76" : "h-60 md:h-104 xl:h-74 mt-4 xl:mt-2"}`}
    >
      {/* User */}
      <div className="xl:flex items-start gap-4 mb-3">
        <div className="rounded-full overflow-hidden border-2 border-primary w-15 md:w-17 xl:w-20 h-15 md:h-17 xl:h-20">
          <Image
            src={item.img}
            alt={item.name}
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h4 className="body-md font-medium text-black">{item.name}</h4>
          <p className="text-[14px] md:text-[16px] xl:text-[18px] text-accent">
            {item.date}
          </p>
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => {
          const star = i + 1;

          if (item.rating >= star) {
            return (
              <FaStar
                key={i}
                className="text-[#FFC107] w-4.5 md:w-5.5 h-4.5 md:h-5.5"
              />
            );
          } else if (item.rating >= star - 0.5) {
            return (
              <FaStarHalfAlt
                key={i}
                className="text-[#FFC107] w-4.5 md:w-5.5 h-4.5 md:h-5.5"
              />
            );
          } else {
            return (
              <FaRegStar
                key={i}
                className="text-[#FFC107] w-4.5 md:w-5.5 h-4.5 md:h-5.5"
              />
            );
          }
        })}

        <span className="text-accent text-[14px] md:text-[18px] ml-2">
          {Number(item.rating).toFixed(1)}
        </span>
      </div>
        </div>
      </div>

      {/* Rating */}

      {/* Review */}
      <p className="text-accent text-[14px] md:text-[18px] leading-5 md:leading-6">
        {`"${item.review}"`}
      </p>
    </div>
  );
}
