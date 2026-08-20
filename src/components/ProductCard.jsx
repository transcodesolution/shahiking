import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="bg-secondary rounded-[40px] shadow-sm h-full min-h-114 flex flex-col group transition-all duration-300 hover:border-[#9b7418] hover:shadow-lg hover:shadow-primary cursor-pointer">
      {/* Image */}
      <div className="overflow-hidden rounded-t-[40px] border-2 border-secondary shadow-sm">
        {product?.img && (
          <Image
            src={product.img}
            width={534}
            height={280}
            alt={product.name}
            className="w-full h-72 object-cover rounded-t-[40px] shadow-sm group-hover:scale-110 transition-transform duration-500 cursor-pointer"
          />
        )}
      </div>
      {/* Content */}
      <div className="p-3 xl:p-5 border-2 border-secondary inset-shadow-sm inset-shadow-[#BABABA40] rounded-b-[40px] flex flex-col flex-1">
        <div className="flex flex-col flex-1">
          {/* Title */}
          <h3 className="body-md font-heading font-semibold text-primary">
            {product?.name}
          </h3>

          {/* Description */}
          <p className="text-black mt-1">{product?.desc}</p>
        </div>

        <div className="flex justify-between items-center mt-5">
          {/* Price */}
          {/* <p className="text-[20px] lg:text-[24px] font-bold text-primary">
            ₹{product?.price}
          </p> */}

          {/* Button */}
          {product && (
            <Link
              href={`/product`}
              className="bg-primary text-secondary body-sm text-center border border-primary font-medium py-2 px-7 rounded-full hover:bg-secondary hover:text-primary duration-500"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
