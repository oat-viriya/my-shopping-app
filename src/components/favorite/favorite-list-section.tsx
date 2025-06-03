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
    <main className="flex flex-col grow min-h-fit items-center container mx-auto justify-center p-6 sm:p-20">
      {isFavoriteListEmpty ? (
        <section className="flex flex-col items-center p-6 max-w-xl gap-6 w-full">
          <h2 className="text-2xl font-bold mb-4">ไม่มีรายการโปรด</h2>
        </section>
      ) : (
        <section className="container auto-rows-auto mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full">
          {favoriteList.map((product) => (
            <ProductCard
              key={product.id}
              productData={product}
              isFavoritePage
            />
          ))}
        </section>
      )}
    </main>
  );
}

// function CartDetailItem(product: ProductDataWithQuantity) {
//   const { incrementProductQuantity, decrementProductQuantity } = useCart();
//   return (
//     <div key={product.id} className="relative w-full">
//       <div
//         key={product.id}
//         className="flex items-center justify-between w-full p-4 border-b last:border-b-0"
//       >
//         <div className="flex items-center gap-4">
//           <Image
//             src={product.image}
//             alt={product.name}
//             width={50}
//             height={50}
//             className="w-12 h-12 object-cover rounded"
//           />
//           <div className="flex flex-col">
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-sm text-gray-600">
//               ฿{product.price.toLocaleString()}
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => decrementProductQuantity(product.id)}
//             className="px-2 py-1 size-8 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
//           >
//             <Minus className="size-4" />
//           </button>
//           <span className="text-lg font-semibold">{product.quantity}</span>
//           <button
//             onClick={() => incrementProductQuantity(product.id)}
//             className="px-2 py-1 size-8 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
//           >
//             <Plus className="size-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
