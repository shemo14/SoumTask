import React, {useEffect, useState} from 'react';
import {Text, Collapsible} from '../../common';
import {checkProduct} from '../../features/products/requests';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks.ts';

const VariantItem = ({variant}: any) => {
  const selectedProducts = useAppSelector(
    state => state.products.selectedProducts,
  );
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(false);
  const checkHandler = async (isChecked: boolean) => {
    const ids = [variant.id];
    await dispatch(checkProduct({isChecked, ids}));
  };

  useEffect(() => {
    setChecked(selectedProducts.includes(variant.id));
  }, [selectedProducts, variant.id]);

  return (
    <Collapsible
      onChecked={checkHandler}
      isChecked={checked}
      header={() => <Text type={'h4'}>{variant.storage}</Text>}
    />
  );
};
export default VariantItem;
