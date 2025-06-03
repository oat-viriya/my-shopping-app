"use client";
import { ProductData, ProductDataWithQuantity } from "@/types/products";
import React, { createContext, useContext, useState } from "react";

export interface CartContextValue {
  cart: ProductDataWithQuantity[];
  setCart: React.Dispatch<React.SetStateAction<ProductDataWithQuantity[]>>;
  resetCart: () => void;
  addProductToCart: (product: ProductData) => void;
  removeProductFromCart: (product: ProductData) => void;
  incrementProductQuantity: (product: ProductData["id"]) => void;
  decrementProductQuantity: (product: ProductData["id"]) => void;
}

export const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [cart, setCart] = useState<ProductDataWithQuantity[]>([]);

  const resetCart = () => {
    setCart([]);
  };

  const addProductToCart = (product: ProductData) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeProductFromCart = (product: ProductData) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
        return prevCart.filter((item) => item.id !== product.id);
      }
      return prevCart;
    });
  };

  const incrementProductQuantity = (productId: ProductData["id"]) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decrementProductQuantity = (productId: ProductData["id"]) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct && existingProduct.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  return (
    <CartContext
      value={{
        cart,
        setCart,
        resetCart,
        addProductToCart,
        removeProductFromCart,
        incrementProductQuantity,
        decrementProductQuantity,
      }}
    >
      {children}
    </CartContext>
  );
};

export const useCart = () => {
  const contextData = useContext(CartContext);
  if (!contextData) throw new Error("Invalid Cart Context");

  return contextData;
};
