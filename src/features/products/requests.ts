import {createAsyncThunk} from '@reduxjs/toolkit';
import products from '../../data/products.json';

export const getAllProducts = createAsyncThunk<any, any>(
  'products/getAllProducts',
  async () => {
    return products;
  },
);

export const checkProduct = createAsyncThunk<
  any,
  {isChecked: boolean; ids: string[]},
  any
>('products/checkProduct', data => {
  return data;
});
