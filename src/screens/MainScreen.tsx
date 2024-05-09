import React from 'react';
import {FlatList, View} from 'react-native';
import products from '../data/products.json';
import {ProductItem} from '../components';
const MainScreen = () => {
  return (
    <View style={{backgroundColor: '#fff', padding: 15}}>
      <FlatList
        data={products}
        renderItem={({item}: any) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default MainScreen;
