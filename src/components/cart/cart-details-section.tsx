"use client";
import { ROUTES } from "@/constants";
import { useCart } from "@/contexts/cart-context";
import { ProductDataWithQuantity } from "@/types/products";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export default function CartDetailsSection() {
  const router = useRouter();
  const { cart } = useCart();

  const isCartEmpty = useMemo(() => cart.length === 0, [cart.length]);

  const totalPrice = useMemo(() => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toLocaleString();
  }, [cart]);

  const totalItemsInCart = useMemo(() => {
    return cart
      .reduce((total, item) => total + item.quantity, 0)
      .toLocaleString();
  }, [cart]);

  return (
    <section className="flex grow container mx-auto flex-col h-full w-screen items-center justify-center">
      <div className="flex flex-col items-center p-6 border border-gray-200 bg-white shadow-md rounded-lg max-w-xl gap-6 w-full">
        {isCartEmpty ? (
          <>
            <h2 className="text-2xl font-bold mb-4">รถเข็นว่างเปล่า</h2>
            <p className="text-lg mb-2">กรุณาเพิ่มสินค้าในรถเข็น</p>
          </>
        ) : (
          <>
            {cart.map((product: ProductDataWithQuantity) => (
              <CartDetailItem key={product.id} {...product} />
            ))}
            <span className="text-lg font-semibold">รวม: {totalPrice}฿</span>
            <span className="text-sm text-gray-500">
              จำนวนสินค้าในรถเข็น: {totalItemsInCart.toLocaleString()}
            </span>
          </>
        )}
        <button
          onClick={() => router.push(ROUTES.HOME)}
          className="px-2 py-1 cursor-pointer lg:px-4 lg:py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
        >
          กลับสู่หน้ารายการสินค้า
        </button>
      </div>
    </section>
  );
}

function CartDetailItem(product: ProductDataWithQuantity) {
  const { incrementProductQuantity, decrementProductQuantity } = useCart();
  return (
    <div key={product.id} className="relative w-full">
      <div
        key={product.id}
        className="flex items-center justify-between w-full p-4 border-b last:border-b-0"
      >
        <div className="flex items-center gap-4">
          <Image
            src={product.image}
            alt={product.name}
            width={50}
            height={50}
            className="w-12 h-12 object-cover rounded"
          />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">
              ฿{product.price.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => decrementProductQuantity(product.id)}
            className="px-2 py-1 size-8 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
          >
            <Minus className="size-4" />
          </button>
          <span className="text-lg font-semibold">{product.quantity}</span>
          <button
            onClick={() => incrementProductQuantity(product.id)}
            className="px-2 py-1 size-8 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
