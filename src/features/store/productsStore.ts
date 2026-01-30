import { create } from 'zustand';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  availabilityStatus: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  length?: number;
  minimumOrderQuantity?: number;
  returnPolicy?: string;
  shippingInformation?: string;
  sku?: string;
  warrantyInformation?: string;
  tags?: string[];
  meta?: {
    createdAt: string;
    updatedAt: string;
    barcode?: string;
    qrCode?: string;
  };
  reviews?: [];
  weight?: number;
};


type Store = {
  products: Product[];
  isLoading: boolean;
  getProducts: () => Promise<void>;
};

export const useStore = create<Store>((set) => ({
  products: [],
  isLoading: false,
  getProducts: async () => {
    try {
      set({ isLoading: true });
      const res = await fetch('https://dummyjson.com/products?limit=12');
      const data = await res.json();
      set({ products: data.products });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoading: false });
    }
  },
}));

