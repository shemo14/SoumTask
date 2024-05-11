import React, {useState, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import {Text, Collapsible} from '../../common';
import VariantItem from '../VariantItem';
import {checkProduct} from '../../features/products/requests';
import {Variant} from '../../features/products/interfaces.ts';
import {useAppDispatch, useAppSelector} from '../../app/store';
const ModelItem = ({model}: any) => {
  const selectedProducts = useAppSelector(
    state => state.products.selectedProducts,
  );
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(false);
  const variantsIds = model.variants.map((variant: Variant) => variant.id);

  const checkHandler = async (isChecked: boolean) => {
    await dispatch(
      checkProduct({isChecked, ids: [...variantsIds, ...[model.id]]}),
    );
  };

  const selectModelBasedOnVariants = useCallback(() => {
    setChecked(selectedProducts.indexOf(model.id) !== -1);

    const isAllVariantsSelected = variantsIds.every((variantId: string) =>
      selectedProducts.includes(variantId),
    );

    dispatch(checkProduct({isChecked: isAllVariantsSelected, ids: [model.id]}));
  }, [dispatch, model.id, selectedProducts, variantsIds]);

  useEffect(() => {
    selectModelBasedOnVariants();
  }, [selectModelBasedOnVariants]);

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
