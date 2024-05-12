const state = {
  products: [],
  selectedProducts: ['test_product_id'],
  selectedVariants: [],
};
export const testAppSelector = (f: any) => f(state);
