import React, {useState, useEffect} from 'react';
import {Text, Collapsible} from '../../common';
import ModelItem from '../ModelItem';
import {FlatList} from 'react-native';
import {checkProduct} from '../../features/products/requests';
import {useDispatch, useSelector} from 'react-redux';
import {Model, Variant} from '../../features/products/interfaces.ts';

const BrandItem = ({brand}: any) => {
  const selectedProducts = useSelector(
    state => state.products.selectedProducts,
  );
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const modelsIds = brand.models.map((model: Model) => model.id);
  const variantsIds = brand.models.map((model: Model) =>
    model.variants.map((variant: Variant) => variant.id),
  );

  const checkHandler = async (isChecked: boolean) => {
    await dispatch(checkProduct({isChecked, ids: variantsIds.flat()}));
  };

  useEffect(() => {
    setChecked(selectedProducts.indexOf(brand.id) !== -1);
  }, [selectedProducts]);

  useEffect(() => {
    const isAllModelsSelected = modelsIds.every((modelId: string) =>
      selectedProducts.includes(modelId),
    );

    dispatch(checkProduct({isChecked: isAllModelsSelected, ids: [brand.id]}));
  }, [selectedProducts]);

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
