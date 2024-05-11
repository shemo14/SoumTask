import {configureStore} from '@reduxjs/toolkit';
import {ProductsSlice, ProductsState} from '../features/products';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';

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

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
