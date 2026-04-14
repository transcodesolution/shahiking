import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product}) {
  if (!product) return null;

  return (
    <div className="bg-secondary rounded-[40px] shadow-sm h-114 flex flex-col">
      {/* Image */}
      {product?.img && (
        <Image
          src={product.img}
          width={534}
          height={260}
          alt={product.name}
          className="w-full h-65 object-cover rounded-t-[40px] border-2 border-secondary shadow-sm"
        />
      )}

      {/* Content */}
      <div className="p-3 xl:p-6 border-2 border-secondary inset-shadow-sm inset-shadow-[#BABABA40] rounded-b-[40px] flex flex-col">
        {/* Title */}
        <h3 className="text-lg font-semibold text-primary">{product?.name}</h3>

        {/* Description */}
        <p className="text-black mt-1 flex-1">{product?.desc}</p>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-5">
          {/* Price */}
          <p className="text-[24px] font-bold text-gray-800">
            ₹{product?.price}
          </p>

          {/* Button */}
          {product?.slug && (
            <Link
              href={`/product/${product.slug}`}
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
