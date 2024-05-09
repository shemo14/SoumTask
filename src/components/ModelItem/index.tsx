import React from 'react';
import {FlatList} from 'react-native';
import {Text, Collapsible} from '../../common';
import VariantItem from '../VariantItem';

const ModelItem = ({model}: any) => {
  return (
    <Collapsible
      header={() => <Text type={'h4'}>{model.name}</Text>}
      body={() => (
        <FlatList
          data={model.variants}
          renderItem={({item}: any) => <VariantItem variant={item} />}
        />
      )}
    />
  );
};

export default ModelItem;
