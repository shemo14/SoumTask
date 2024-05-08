import React from 'react';
import {FlatList} from 'react-native';
import products from '../data/products.json';
import {Text} from '../common';

const MainScreen = () => {
  const renderItem = (item: any) => {
    return <Text type={'h4'}>{item.category}</Text>;
  };

  return (
    <FlatList data={products} renderItem={({item}: any) => renderItem(item)} />
  );
};

export default MainScreen;
