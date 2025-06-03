"use client";
import { ROUTES } from "@/constants";
import { useCart } from "@/contexts/cart-context";
import { useFavorite } from "@/contexts/favorite-context";
import { ProductData } from "@/types/products";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export default function ProductDetailsSection({
  productData,
}: {
  productData: ProductData;
}) {
  const router = useRouter();
  const { addProductToCart } = useCart();
  const { favoriteList, addToFavorite, removeFromFavorite } = useFavorite();

  const isFavorite = useMemo(
    () => favoriteList.find((item) => item.id === productData.id),
    [favoriteList, productData.id]
  );

  const handleClickAddToFavorite = () => {
    if (!isFavorite) {
      addToFavorite(productData);
      alert(`บันทึก ${productData.name} ในรายการโปรดเรียบร้อยแล้ว!`);
    } else {
      removeFromFavorite(productData);
      alert(`ลบ ${productData.name} ออกจากรายการโปรดเรียบร้อยแล้ว!`);
    }
  };

  const handleClickAddToCart = () => {
    addProductToCart(productData);
    alert(`เพิ่ม ${productData.name} ลงรถเข็นเรียบร้อยแล้ว!`);
  };

  const handleClickReturnToHomePage = () => {
    router.push(ROUTES.HOME);
  };

  return (
    <div className="flex relative flex-col items-center p-6 border border-gray-200 bg-white shadow-md rounded-lg max-w-md gap-6 w-full">
      <h2 className="text-2xl font-bold mb-4">{productData.name}</h2>
      <button
        onClick={handleClickAddToFavorite}
        className="absolute cursor-pointer top-4 right-4"
      >
        <Heart fill={isFavorite ? "#db1a1a" : "white"} color="#db1a1a" />
      </button>
      <Image
        width={500}
        height={500}
        src={productData.image}
        alt={productData.name}
        className="w-64 h-64 object-cover mb-4"
      />
      <p className="text-lg mb-2">{productData.desc}</p>
      <p className="text-xl font-semibold">{`ราคา: ฿${productData.price.toLocaleString()}`}</p>
      <div>
        <p className="text-sm">Rating: {productData.rating.rate} stars</p>
        <p className="text-sm">Reviews: {productData.rating.count}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <button
          onClick={handleClickReturnToHomePage}
          className="px-2 py-1 cursor-pointer lg:px-4 lg:py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
        >
          กลับสู่หน้ารายการสินค้า
        </button>
        <button
          onClick={handleClickAddToCart}
          className="px-2 py-1 cursor-pointer lg:px-4 lg:py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
        >
          เพิ่มลงรถเข็น
        </button>
      </div>
    </div>
  );
}
