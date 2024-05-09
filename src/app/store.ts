import {configureStore} from '@reduxjs/toolkit';
import {ProductsSlice} from '../features/products';

export const store = configureStore({
  reducer: {
    products: ProductsSlice.reducer,
  },
});
