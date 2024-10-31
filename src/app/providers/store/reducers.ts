import { combineReducers } from 'redux';
import { api } from 'shared/api';
import { productSlice } from 'entities/product/model';
import { sharedSlice } from 'shared/model';

export const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  Product: productSlice.reducer,
  Shared: sharedSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;
