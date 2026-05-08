import Image from "next/image";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function TestimonialCard({ item, isActive }) {
  return (
    <div
      className={`bg-white rounded-[40px] p-3 xl:p-5 border border-accent transition-all duration-300
      ${isActive ? "h-62 md:h-100 xl:h-84" : "h-60 md:h-96 xl:h-82 mt-4 xl:mt-2"}`}
    >
      {/* User */}
      <div className="flex items-start gap-4 mb-4">
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
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => {
          const star = i + 1;

          if (item.rating >= star) {
            return (
              <FaStar
                key={i}
                className="text-[#FFC107] w-4.5 md:w-6 h-4.5 md:h-6"
              />
            );
          } else if (item.rating >= star - 0.5) {
            return (
              <FaStarHalfAlt
                key={i}
                className="text-[#FFC107] w-4.5 md:w-6 h-4.5 md:h-6"
              />
            );
          } else {
            return (
              <FaRegStar
                key={i}
                className="text-[#FFC107] w-4.5 md:w-6 h-4.5 md:h-6"
              />
            );
          }
        })}

        <span className="text-accent text-[14px] md:text-[18px] ml-2">
          {Number(item.rating).toFixed(1)}
        </span>
      </div>

      {/* Review */}
      <p className="text-accent text-[14px] md:text-[18px] leading-5 md:leading-6">
        {`"${item.review}"`}
      </p>
    </div>
  );
}
