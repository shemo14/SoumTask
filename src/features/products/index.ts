import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Category, Brand, Model, Variant} from './interfaces';
import {getAllProducts, checkProduct} from './requests';

export interface ProductsState {
  products: Category[];
  selectedProducts: string[];
}

const initialState: ProductsState = {
  products: [],
  selectedProducts: [],
};

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getAllProducts.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.products = action.payload;
      },
    );
    builder.addCase(
      checkProduct.fulfilled,
      (state, action: PayloadAction<any>) => {
        const {isChecked, id} = action.payload;
        const index = state.selectedProducts.indexOf(id);
        if (isChecked) {
          if (index === -1) {
            state.selectedProducts.push(action.payload.id);
          }
        } else {
          state.selectedProducts.splice(index, 1);
        }
      },
    );
  },
});

export default ProductsSlice;
