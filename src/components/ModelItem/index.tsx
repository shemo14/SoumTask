import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Text, Collapsible} from '../../common';
import VariantItem from '../VariantItem';
import {checkProduct} from '../../features/products/requests';
import {useDispatch, useSelector} from 'react-redux';
import {Variant} from '../../features/products/interfaces.ts';

const ModelItem = ({model}: any) => {
  const selectedProducts = useSelector(
    state => state.products.selectedProducts,
  );
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const variantsIds = model.variants.map((variant: Variant) => variant.id);

  const checkHandler = async (isChecked: boolean) => {
    await dispatch(checkProduct({isChecked, ids: [...variantsIds, ...[model.id]]}));
  };

  useEffect(() => {
    setChecked(selectedProducts.indexOf(model.id) !== -1);
  }, [selectedProducts]);

  useEffect(() => {
    const isAllVariantsSelected = variantsIds.every((variantId: string) =>
      selectedProducts.includes(variantId),
    );
    dispatch(checkProduct({isChecked: isAllVariantsSelected, ids: [model.id]}));
  }, [selectedProducts]);

  return (
    <Collapsible
      onChecked={checkHandler}
      isChecked={checked}
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
