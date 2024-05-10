import React, {useEffect, useState} from 'react';
import {Text, Collapsible} from '../../common';
import {checkProduct} from '../../features/products/requests';
import {useDispatch, useSelector} from 'react-redux';
const VariantItem = ({variant}: any) => {
  const selectedProducts = useSelector(state => state.products.selectedProducts);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const checkHandler = async (isChecked: boolean) => {
    await dispatch(checkProduct({isChecked, ids: [variant.id]}));
  };
  useEffect(() => {
    setChecked(selectedProducts.indexOf(variant.id) !== -1);
  }, [selectedProducts]);
  return (
    <Collapsible
      onChecked={checkHandler}
      isChecked={checked}
      header={() => <Text type={'h4'}>{variant.storage}</Text>}
    />
  );
};
export default VariantItem;
