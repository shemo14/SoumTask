import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ProductsList} from '../components';
import {getAllProducts} from '../features/products/requests';
import SelectedVariants from '../components/SelectedVariants';
import {useAppDispatch, useAppSelector} from '../app/store';
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
