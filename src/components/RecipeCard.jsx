import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function RecipeCard({ item }) {
  if (!item) return null;
  return (
    <div className="bg-secondary rounded-[40px] border border-secondary shadow-sm h-130 md:min-h-140 w-full flex flex-col">
      <div className="overflow-hidden rounded-t-[40px] border-2 border-secondary shadow-sm">
      {/* Image */}
      <Image
        src={item.img}
        alt={item.name}
        width={546}
        height={310}
        className="w-full h-77.5 object-cover rounded-t-[40px] shadow-sm hover:scale-110 transition-transform duration-500 cursor-pointer"
      />
      </div>
      {/* Content */}
      <div className="p-3 md:p-5 xl:p-7 border border-secondary inset-shadow-sm inset-shadow-[#BABABA40] rounded-b-[40px] flex flex-col flex-1">
        <div className="flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-[18px] md:text-[20px] xl:text-[24px] font-heading font-semibold text-black leading-7">{item.name}<span>{item.name_1}</span></h3>
          {/* Description */}
          <p className="text-black mt-3 body-md mb-6">{item.details}</p>
        </div>
        {/* Button */}
        <Link
          href={`/recipe/${item.slug}`}
          className="bg-primary text-secondary body-sm flex justify-center items-center gap-4 border border-primary font-medium py-2 px-4 max-w-45 rounded-full hover:bg-secondary hover:text-primary duration-500"
        >
          View Recipe <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
}
