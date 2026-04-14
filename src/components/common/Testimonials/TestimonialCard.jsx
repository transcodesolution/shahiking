import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function TestimonialCard({ item, isActive }) {
  return (
    <div
      className={`bg-white rounded-[40px] p-5 border border-accent transition-all duration-300
      ${isActive ? "h-109 md:h-92 xl:h-79" : "h-105 md:h-88 xl:h-77 mt-4 xl:mt-2"}`}
    >
      {/* User */}
      <div className="none md:flex items-start gap-4 mb-4">
        <div className="rounded-full overflow-hidden border-2 border-primary w-17.5 md:w-20 xl:w-25 h-17.5 md:h-20 xl:h-25">
          <Image
            src={item.img}
            alt={item.name}
            width={140}
            height={140}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h4 className="body-md font-medium text-black">{item.name}</h4>
          <p className="text-[14px] md:text-[18px] text-accent">
            {item.company}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star, i) => {
          if (item.rating >= star) {
            return <FaStar key={i} className="text-[#FFC107] w-4.5 md:w-6 h-4.5 md:h-6" />;
          } else if (item.rating >= star - 0.5) {
            return <FaStarHalfAlt key={i} className="text-[#FFC107] w-4.5 md:w-6 h-4.5 md:h-6" />;
          } else {
            return <FaStar key={i} className="text-accent w-4.5 md:w-6 h-4.5 md:h-6" />;
          }
        })}
        <span className="text-accent text-[14px] md:text-[18px] ml-2">{item.rating.toFixed(1)}</span>
      </div>

      {/* Review */}
      <p className="text-accent text-[14px] md:text-[18px] leading-5 md:leading-6">
        {`"${item.review}"`}
      </p>
    </div>
  );
}