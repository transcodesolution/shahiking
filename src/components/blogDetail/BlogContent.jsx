import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCart4 } from "react-icons/bs";

export default function BlogContent({ item }) {
  return (
    <div className="py-8 relative z-0">
      <Image
        src="/Image/blogpage/blog_detail_content.webp"
        alt="blog detail content bg"
        width={1920}
        height={2361}
        className="h-590 w-full object-cover absolute inset-0 z-10 overflow-hidden opacity-15"
      />
      <Image
        src="/Image/blogpage/blog_detail_leaf.webp"
        alt="blog detail leaf"
        width={118}
        height={70}
        className="h-17.5 object-cover hidden xl:block absolute top-50 left-22 z-10 overflow-hidden rotate-46 blur-3"
      />
      <Image
        src="/Image/blogpage/blog_detail_leaf1.webp"
        alt="blog detail leaf"
        width={101}
        height={161}
        className="h-50 object-cover hidden xl:block absolute top-200 right-22 z-10 overflow-hidden rotate-198 blur-3"
      />
      <Image
        src="/Image/blogpage/blog_detail_leaf1.webp"
        alt="blog detail leaf"
        width={101}
        height={161}
        className="h-50 object-cover hidden xl:block 1 absolute bottom-100 left-22 z-10 overflow-hidden -rotate-25 blur-3 translate scale-x-[-1]"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-6 mx-auto max-w-280">
          {item?.sections?.map((section, i) => (
            <div key={i}>
              <h1 className="text-[28px] text-primary font-semibold font-heading py-2">
                {section.title}
              </h1>

              {section.points?.map((point, index) => (
                <div key={index} className="mt-4 mb-4">
                  <h3 className="font-medium body-md text-black mb-2">
                    {index + 1}. {point.title}
                  </h3>
                  <p className="text-black body-md mb-3">{point.description}</p>
                </div>
              ))}

              {section.content && (
                <p className="body-md text-black py-2">{section.content}</p>
              )}
              {section.detail && (
                <p className="body-md text-black py-2">{section.detail}</p>
              )}

              {section.list && (
                <ul className="list-disc space-y-2 py-2">
                  {section.list.map((listItem, index) => (
                    <li key={index} className="body-md ml-8 2">
                      {listItem}
                    </li>
                  ))}
                </ul>
              )}

              {section.content_1 && (
                <p className="body-md text-black py-2 mb-2">
                  {section.content_1}
                </p>
              )}
            </div>
          ))}
          <div className="mt-5">
            <Link
              href="/"
              className="bg-primary text-white body-sm flex justify-center items-center gap-4 border border-primary font-medium py-2 px-4 max-w-65.5 rounded-full hover:bg-white hover:text-primary duration-500"
            >
              <span className="text-[24px]">
                <BsCart4 />
              </span>
              Shop Healthy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
