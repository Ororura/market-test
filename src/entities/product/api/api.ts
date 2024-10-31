import axios from 'axios';
import { ProductType } from 'entities/product/types';

export const productApi = {
  getProducts: async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/products`);
      return response.data as ProductType[];
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  getProductById: async (id: string) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/products/${id}`);
      return response.data as ProductType;
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw error;
    }
  },

  getCategories: async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/products/categories`);
      return response.data as string[];
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },
};
