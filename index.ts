export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: string[];
  colors: string[];
  description: string;
  isNew?: boolean;
  isSale?: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}