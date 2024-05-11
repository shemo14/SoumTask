import React, {useEffect, useState} from 'react';
import {Text} from '../../common';
import {ScrollView, View} from 'react-native';
import {updateSelectedVariants} from '../../features/products/requests.ts';
import SelectedVariantItem from '../SelectedVariantItem';
import {useAppDispatch, useAppSelector} from '../../app/store';

const SelectedVariants = ({products}: any) => {
  const selectedProducts = useAppSelector(
    state => state.products.selectedProducts,
  );
  const selectedVariants = useAppSelector(
    state => state.products.selectedVariants,
  );
  const dispatch = useAppDispatch();
  const [selectedProductsItems, setSelectedProductsItems] =
    useState<string[]>(selectedProducts);

  useEffect(() => {
    dispatch(updateSelectedVariants({products, selectedProducts}));
  }, [selectedProducts]);

  useEffect(() => {
    setSelectedProductsItems(selectedVariants);
  }, [selectedVariants]);
  return (
    <View
      style={{
        width: '100%',
        minHeight: 200,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        padding: 10,
        flex: 0.2,
      }}>
      <Text type={'h2'}>Selected Variants</Text>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginVertical: 5,
            flexWrap: 'wrap',
          }}>
          {selectedProductsItems.map((item, i) => (
            <SelectedVariantItem item={item} key={i} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SelectedVariants;
