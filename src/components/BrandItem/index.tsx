import React from 'react';
import {Text, Collapsible} from '../../common';
import ModelItem from '../ModelItem';
import {FlatList} from 'react-native';

const BrandItem = ({brand}: any) => {
  return (
    <Collapsible
      header={() => <Text type={'h4'}>{brand.name}</Text>}
      body={() => (
        <FlatList
          data={brand.models}
          renderItem={({item}: any) => <ModelItem model={item} />}
        />
      )}
    />
  );
};

export default BrandItem;
