export interface ProductData {
  id: number;
  name: string;
  desc: string;
  image: string;
  price: number;
  rating: ProductRating;
}

export interface ProductRating {
  rate: number;
  count: number;
}

export type ProductDataWithQuantity = ProductData & {
  quantity: number;
};

export type ProductDataWithFavorite = ProductData & {
  isFavorite: boolean;
};
