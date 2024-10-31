import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from 'entities/product/types';
import { productApi } from 'entities/product/api';

const initialState: ProductType[] = [];

export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setNewProduct: (state, action: PayloadAction<ProductType[]>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productApi.endpoints.getProduct.matchFulfilled,
      (state, action: PayloadAction<ProductType[]>) => {
        return action.payload;
      },
    );
  },
});

export const { setNewProduct } = productSlice.actions;
