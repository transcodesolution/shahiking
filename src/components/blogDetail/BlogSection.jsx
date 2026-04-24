import Image from "next/image";
import React from "react";

export default function BlogSection({ item }) {
  return (
    <div className="py-10 relative z-0">
      <Image
        src="/Image/blogpage/our_blogbg.webp"
        alt="blog bg"
        width={1920}
        height={714}
        className="h-full w-full object-cover absolute inset-0 z-10 overflow-hidden opacity-10"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            {item?.image && (
              <Image
                src={item.image}
                alt={item.title}
                width={840}
                height={594}
                className="w-full h-140 rounded-[30px] border border-accent object-cover"
              />
            )}
          </div>
          <div>
            <h1 className="display-heading text-primary font-semibold md:leading:13 xl:leading-14 w-full max-w-150">
              {item?.title}
              <span className="block">{item?.subtitle}</span>
            </h1>
            <div className="flex flex-wrap items-center gap-6 py-4">
              <p className="flex items-center gap-2 text-black ">
                <span>
                  <Image
                    src="/Image/blogpage/read_icon.webp"
                    alt="read icon"
                    width={24}
                    height={24}
                  />
                </span>
                <span className="body-sm">{item?.time} Min Read</span>
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
            <p className="body-md text-black mb-4">{item?.detail_1}</p>
            <p className="body-md text-black mb-4">{item?.detail_2}</p>
            <p className="body-md text-black">{item?.detail_3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
