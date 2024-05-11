import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {ProductItem} from '../components';
import {getAllProducts} from '../features/products/requests';
import SelectedVariants from '../components/SelectedVariants';
import {useAppDispatch, useAppSelector} from '../app/store';

const MainScreen = () => {
  const products = useAppSelector(state => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  });

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#fff',
          paddingTop: 15,
          paddingHorizontal: 15,
          flex: 3,
        }}>
        <FlatList
          data={products}
          renderItem={({item}: any) => <ProductItem product={item} />}
        />
      </View>
      <SelectedVariants products={products} />
    </View>
  );
};

export default MainScreen;
