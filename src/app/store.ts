import {configureStore} from '@reduxjs/toolkit';
import {ProductsSlice, ProductsState} from '../features/products';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
  reducer: {
    products: ProductsSlice.reducer,
  },
});

export function productsState(state: RootState): ProductsState {
  return state[ProductsSlice.name];
}
