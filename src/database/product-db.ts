export type ProductType = {
  id: number;
  name: string; //
  description: string; //
  price: number; //
  stock: number; //
  category: string; //
  images?: string[];
  createdAt: Date;
  updatedAt: Date;
};

export const products: ProductType[] = [];
