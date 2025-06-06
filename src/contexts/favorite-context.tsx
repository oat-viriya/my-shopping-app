"use client";
import { ProductData } from "@/types/products";
import React, { createContext, useContext, useState } from "react";

export interface FavoriteContextValue {
  favoriteList: ProductData[];
  setFavoriteList: React.Dispatch<React.SetStateAction<ProductData[]>>;
  addToFavorite: (product: ProductData) => void;
  removeFromFavorite: (product: ProductData) => void;
}

export const FavoriteListContext = createContext<FavoriteContextValue | null>(
  null
);

export const FavoriteListProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [favoriteList, setFavoriteList] = useState<ProductData[]>([]);

  const addToFavorite = (product: ProductData) => {
    const isAlreadyFavorite = favoriteList.find(
      (item) => item.id === product.id
    );
    if (isAlreadyFavorite) return;
    else {
      setFavoriteList((prev) => {
        return [...prev, product];
      });
    }
  };

  const removeFromFavorite = (product: ProductData) => {
    setFavoriteList((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <FavoriteListContext
      value={{
        favoriteList,
        setFavoriteList,
        addToFavorite,
        removeFromFavorite,
      }}
    >
      {children}
    </FavoriteListContext>
  );
};

export const useFavorite = () => {
  const contextData = useContext(FavoriteListContext);
  if (!contextData) throw new Error("Invalid Favorite Context");

  return contextData;
};
