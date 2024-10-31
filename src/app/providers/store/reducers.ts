import { combineReducers } from 'redux';
import { api } from 'shared/api';
import { productSlice } from 'entities/product/model';

export const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  Product: productSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;
