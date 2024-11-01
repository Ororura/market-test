import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from 'entities/product/types';

const initialState: ProductType[] = [];

export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setNewProduct: (state, action: PayloadAction<ProductType[]>) => {
      return action.payload;
    },
  },
});

export const { setNewProduct } = productSlice.actions;
