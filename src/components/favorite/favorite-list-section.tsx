"use client";
import { useFavorite } from "@/contexts/favorite-context";
import { useMemo } from "react";
import ProductCard from "../products/product-card";

export default function FavoriteListSection() {
  const { favoriteList } = useFavorite();

  const isFavoriteListEmpty = useMemo(
    () => favoriteList.length === 0,
    [favoriteList.length]
  );

  return (
    <section className="flex flex-col grow min-h-fit items-center container mx-auto justify-center p-6 sm:p-20">
      {isFavoriteListEmpty ? (
        <div className="flex flex-col items-center p-6 max-w-xl gap-6 w-full">
          <h2 className="text-2xl font-bold mb-4">ไม่มีรายการโปรด</h2>
        </div>
      ) : (
        <div className="container auto-rows-auto mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full">
          {favoriteList.map((product) => (
            <ProductCard
              key={product.id}
              productData={product}
              isFavoritePage
            />
          ))}
        </div>
      )}
    </section>
  );
}
