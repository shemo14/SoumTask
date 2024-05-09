import React from 'react';
import {FlatList} from 'react-native';
import {Text, Collapsible} from '../../common';
import BrandItem from '../BrandItem';

const ProductItem = ({product}: any) => {
  return (
    <Collapsible
      header={() => <Text type={'h4'}>{product.category}</Text>}
      body={() => (
        <FlatList
          data={product.brands}
          renderItem={({item}: any) => <BrandItem brand={item} />}
        />
      )}
    />
  );
};

export default ProductItem;
