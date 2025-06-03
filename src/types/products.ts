export interface Product {
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
