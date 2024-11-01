import axios, { AxiosResponse } from 'axios';
import { ProductType } from 'entities/product/types';

export const productApi = {
  getProducts: async (): Promise<ProductType[]> => {
    try {
      const response: AxiosResponse<ProductType[]> = await axios.get(`${process.env.NEXT_PUBLIC_API}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  getProductById: async (id: string): Promise<ProductType> => {
    try {
      const response: AxiosResponse<ProductType> = await axios.get(`${process.env.NEXT_PUBLIC_API}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw error;
    }
  },

  getCategories: async (): Promise<string[]> => {
    try {
      const response: AxiosResponse<string[]> = await axios.get(`${process.env.NEXT_PUBLIC_API}/products/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },
};
