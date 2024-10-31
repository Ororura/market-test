import { ProductType } from 'entities/product/types';

export const productApi = {
  getProducts: async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/products`);
    return (await response.json()) as ProductType[];
  },
  getProductById: async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/products/${id}`);
    return (await response.json()) as ProductType;
  },
  getCategories: async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/products/categories`);
    return (await response.json()) as string[];
  },
};
