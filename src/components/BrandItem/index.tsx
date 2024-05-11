import React, {useState, useEffect, useCallback} from 'react';
import {Text, Collapsible} from '../../common';
import ModelItem from '../ModelItem';
import {FlatList} from 'react-native';
import {checkProduct} from '../../features/products/requests';
import {Model, Variant} from '../../features/products/interfaces.ts';
import {useAppDispatch, useAppSelector} from '../../app/store';

const BrandItem = ({brand}: any) => {
  const selectedProducts = useAppSelector(
    state => state.products.selectedProducts,
  );
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(false);
  const modelsIds = brand.models.map((model: Model) => model.id);
  const variantsIds = brand.models.map((model: Model) =>
    model.variants.map((variant: Variant) => variant.id),
  );

  const checkHandler = async (isChecked: boolean) => {
    await dispatch(checkProduct({isChecked, ids: variantsIds.flat()}));
  };

  const selectBrandBasedOnModels = useCallback(() => {
    setChecked(selectedProducts.indexOf(brand.id) !== -1);

    const isAllModelsSelected = modelsIds.every((modelId: string) =>
      selectedProducts.includes(modelId),
    );

    dispatch(checkProduct({isChecked: isAllModelsSelected, ids: [brand.id]}));
  }, [brand.id, dispatch, modelsIds, selectedProducts]);

  useEffect(() => {
    selectBrandBasedOnModels();
  }, [selectBrandBasedOnModels]);

  return (
    <Collapsible
      onChecked={checkHandler}
      isChecked={checked}
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
