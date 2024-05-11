import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Category} from './interfaces';
import {getAllProducts, checkProduct, updateSelectedVariants} from './requests';

export interface ProductsState {
  products: Category[];
  selectedProducts: string[];
  selectedVariants: string[];
}

const initialState: ProductsState = {
  products: [],
  selectedProducts: [],
  selectedVariants: [],
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
        const {isChecked, ids} = action.payload;
        for (const id of ids) {
          const index = state.selectedProducts.indexOf(id);
          if (isChecked) {
            if (index === -1) {
              state.selectedProducts.push(id);
            }
          } else {
            if (index !== -1) {
              state.selectedProducts.splice(index, 1);
            }
          }
        }
      },
    );
    builder.addCase(
      updateSelectedVariants.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.selectedVariants = action.payload;
      },
    );
  },
});

export default ProductsSlice;
