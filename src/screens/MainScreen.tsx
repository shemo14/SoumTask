import React, {useEffect} from 'react';
import {View} from 'react-native';
import {getAllProducts} from '../features/products/requests';
import {SelectedVariants, ProductsList} from '../components';
import {useAppDispatch, useAppSelector} from '../app/reduxHooks.ts';
import styles from './styles.tsx';

const MainScreen = () => {
  const products = useAppSelector(state => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  });

  return (
    <View style={styles.container}>
      <ProductsList products={products} />
      <SelectedVariants products={products} />
    </View>
  );
};

export default MainScreen;
