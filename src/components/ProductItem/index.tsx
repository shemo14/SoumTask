import React from 'react';
import {FlatList} from 'react-native';
import {Text, Collapsible} from '../../common';
import BrandItem from '../BrandItem';

const ProductItem = ({product}: any) => {
  return (
    <Collapsible
      onChecked={(isChecked: boolean) =>
        console.log('product is checked ...', isChecked)
      }
      // isChecked={true}
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
