import React, {useEffect, useState} from 'react';
import {Text} from '../../common';
import {ScrollView, View} from 'react-native';
import {updateSelectedVariants} from '../../features/products/requests';
import SelectedVariantItem from '../SelectedVariantItem';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks.ts';
import styles from './styles.tsx';

const SelectedVariants = ({products}: any) => {
  const selectedProducts = useAppSelector(
    state => state.products.selectedProducts,
  );
  const selectedVariants = useAppSelector(
    state => state.products.selectedVariants,
  );
  const dispatch = useAppDispatch();
  const [selectedProductsItems, setSelectedProductsItems] = useState<string[]>(
    [],
  );

  useEffect(() => {
    dispatch(updateSelectedVariants({products, selectedProducts}));
  }, [dispatch, products, selectedProducts]);

  useEffect(() => {
    setSelectedProductsItems(selectedVariants);
  }, [selectedVariants]);

  return (
    <View style={styles.container}>
      <Text type={'h2'}>Selected Variants</Text>
      <ScrollView>
        <View style={styles.variantItem}>
          {selectedProductsItems.length ? (
            selectedProductsItems.map((item, i) => (
              <SelectedVariantItem item={item} key={i} />
            ))
          ) : (
            <Text type={'p2'} style={styles.noSelectedVariants}>
              No Selected Variants...
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SelectedVariants;
