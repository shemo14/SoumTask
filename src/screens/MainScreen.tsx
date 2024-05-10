import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {ProductItem} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts} from '../features/products/requests';

const MainScreen = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  });

  return (
    <View style={{backgroundColor: '#fff', padding: 15}}>
      <FlatList
        data={products}
        renderItem={({item}: any) => (
          <ProductItem product={item} />
        )}
      />
    </View>
  );
};

export default MainScreen;
