import React from 'react';
import {Text, Collapsible} from '../../common';
import ModelItem from '../ModelItem';
import {FlatList} from 'react-native';

const BrandItem = ({brand}: any) => {
  return (
    <Collapsible
      onChecked={(isChecked: boolean) =>
        console.log('Brand is Checked ...', isChecked)
      }
      // isChecked={true}
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
