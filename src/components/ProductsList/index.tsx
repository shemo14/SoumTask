import React from 'react';
import {FlatList, View} from 'react-native';
import {ProductItem} from '../index.tsx';
import {Product} from '../../features/products/interfaces.ts';
import styles from './styles.tsx';

interface ProductListPropsInterface {
  products: Product[];
}

const ProductsList = ({products}: ProductListPropsInterface) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}: any) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default ProductsList;
