import {createAsyncThunk} from '@reduxjs/toolkit';
import products from '../../data/products.json';
import {Product} from './interfaces.ts';

export const getAllProducts = createAsyncThunk<any>(
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

export const updateSelectedVariants = createAsyncThunk<
  string[],
  {products: Product[]; selectedProducts: string[]},
  any
>('products/updateSelectedVariants', data => {
  const {products: allProducts, selectedProducts} = data;
  const selectedVariants = [];

  for (const product of allProducts) {
    if (selectedProducts.includes(product.id)) {
      selectedVariants.push(`All ${product.category}`);
    } else {
      for (const brand of product.brands) {
        if (selectedProducts.includes(brand.id)) {
          selectedVariants.push(`All ${brand.name}`);
        } else {
          for (const model of brand.models) {
            if (selectedProducts.includes(model.id)) {
              selectedVariants.push(`All ${model.name}`);
            } else {
              for (const variant of model.variants) {
                if (selectedProducts.includes(variant.id)) {
                  selectedVariants.push(`${model.name} ${variant.storage}`);
                }
              }
            }
          }
        }
      }
    }
  }

  return selectedVariants;
});
