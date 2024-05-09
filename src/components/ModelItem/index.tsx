import React from 'react';
import {FlatList} from 'react-native';
import {Text, Collapsible} from '../../common';
import VariantItem from '../VariantItem';
import {checkProduct} from '../../features/products/requests';
import {useDispatch, useSelector} from 'react-redux';

const ModelItem = ({model}: any) => {
  const selectedProducts = useSelector(state => state.products.selectedProducts);
  const dispatch = useDispatch();
  const checkHandler = async (isChecked: boolean) => {
    await dispatch(checkProduct({isChecked, id: model.id}));
    for (const variant of model.variants) {
      await dispatch(checkProduct({isChecked, id: variant.id}));
    }
  };
  return (
    <Collapsible
      onChecked={checkHandler}
      isChecked={selectedProducts.indexOf(model.id) !== -1}
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
