import { combineReducers } from 'redux';
import { productSlice } from 'entities/product/model';
import { sharedSlice } from 'shared/model';

export const reducers = combineReducers({
  Product: productSlice.reducer,
  Shared: sharedSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;
