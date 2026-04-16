import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BlogCard({ item }) {
  if (!item) return null;
  return (
    <div className="bg-secondary rounded-[40px] border border-secondary shadow-sm h-169 w-full flex flex-col">
      <div className="overflow-hidden rounded-t-[40px] border-2 border-secondary shadow-sm">
      {/* Image */}
      <Image
        src={item.img}
        alt={item.title}
        width={546}
        height={310}
        className="w-full h-77.5 object-cover rounded-t-[40px] shadow-sm hover:scale-110 transition-transform duration-500 cursor-pointer"
      />
      </div>
      {/* Content */}
      <div className="p-3 md:p-5 xl:p-7 border border-secondary inset-shadow-sm inset-shadow-[#BABABA40] rounded-b-[40px] flex flex-col flex-1">
        <div className="flex flex-col flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <p className="flex items-center gap-2 text-black ">
              <span>
                <Image
                  src="/Image/blogpage/read_icon.webp"
                  alt="read icon"
                  width={24}
                  height={24}
                />
              </span>
              <span className="body-sm">{item.time} Min Read</span>
            </p>
            <p className="flex items-center gap-2 text-black">
              <span>
                <Image
                  src="/Image/blogpage/update_icon.webp"
                  alt="update icon"
                  width={24}
                  height={24}
                />
              </span>
              <span className="body-sm">Updated 2026</span>
            </p>
            <p className="flex items-center gap-2 text-black">
              <span>
                <Image
                  src="/Image/blogpage/admin_icon.webp"
                  alt="admin icon"
                  width={24}
                  height={24}
                />
              </span>
              <span className="body-sm">By Shahiking Team</span>
            </p>
          </div>
          {/* Title */}
          <h3 className="text-[18px] md:text-[20px] xl:text-[24px] font-medium text-black leading-7">{item.title}</h3>

          {/* Description */}
          <p className="text-black mt-2 body-md mb-6">{item.description}</p>
        </div>
        {/* Button */}

        <Link
          href={`/blog/${item.slug}`}
          className="bg-primary text-secondary body-sm flex justify-center items-center gap-4 border border-primary font-medium py-2 px-4 max-w-39.5 rounded-full hover:bg-secondary hover:text-primary duration-500"
        >
          Read More <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
}
