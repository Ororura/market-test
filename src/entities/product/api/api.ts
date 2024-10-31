import { api } from 'shared/api';
import { ProductType } from 'entities/product/types';

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<ProductType[], void>({
      query: () => 'products',
    }),
    getCategories: build.query<string[], void>({
      query: () => 'products/categories',
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductQuery, useGetCategoriesQuery } = productApi;
