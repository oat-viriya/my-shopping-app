"use client";
import { ROUTES } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/products";
import React from "react";

export default function ProductCard({ product }: { product: Product }) {
  const handleClickAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(`เพิ่ม ${product.name} ลงรถเข็นเรียบร้อยแล้ว!`);
  };

  return (
    <Link
      href={ROUTES.PRODUCT_DETAILS.replace(
        ":productId",
        product?.id.toString() || ""
      )}
      className="flex flex-col overflow-hidden items-center justify-between gap-4 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-1/2 object-contain rounded"
      />
      <div className="flex flex-col w-full">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.desc}</p>
        <span className="text-xl font-bold text-gray-900">
          ฿{product.price.toLocaleString()}
        </span>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <ProductStars rating={product.rating.rate} />
          <span className="text-sm text-gray-500">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        <button
          onClick={handleClickAddToCart}
          className="px-2 py-1 cursor-pointer lg:px-4 lg:py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
        >
          เพิ่มลงรถเข็น
        </button>
      </div>
    </Link>
  );
}

function ProductStars({ rating }: { rating: number }) {
  return (
    <span className="flex text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`size-4 lg:size-5 ${
            i < Math.round(rating) ? "" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </span>
  );
}
