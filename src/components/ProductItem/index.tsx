import React, {useState, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import {Text, Collapsible} from '../../common';
import BrandItem from '../BrandItem';
import {checkProduct} from '../../features/products/requests';
import {Brand, Model, Variant} from '../../features/products/interfaces';
import {useAppDispatch, useAppSelector} from '../../app/reduxHooks.ts';

const ProductItem = ({product}: any) => {
  const selectedProducts = useAppSelector(
    state => state.products.selectedProducts,
  );
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(false);
  const brandsIds = product.brands.map((brand: Brand) => brand.id);
  const variantsIds = product.brands.map((brand: Brand) =>
    brand.models.map((model: Model) => [
      model.id,
      model.variants.map((variant: Variant) => variant.id),
    ]),
  );

  const checkHandler = async (isChecked: boolean) => {
    const ids = [...[product.id], ...brandsIds, ...variantsIds.flat(3)];
    await dispatch(checkProduct({isChecked, ids}));
  };

  const selectProductBasedOnBrands = useCallback(() => {
    setChecked(selectedProducts.includes(product.id));

    const isAllBrandsSelected = brandsIds.every((brandId: string) =>
      selectedProducts.includes(brandId),
    );

    dispatch(
      checkProduct({
        isChecked: isAllBrandsSelected,
        ids: [product.id],
      }),
    );
  }, [brandsIds, dispatch, product.id, selectedProducts]);

  useEffect(() => {
    selectProductBasedOnBrands();
  }, [selectProductBasedOnBrands]);

  return (
    <Collapsible
      onChecked={checkHandler}
      isChecked={checked}
      header={() => <Text type={'h4'}>{product.category}</Text>}
      body={() => (
        <FlatList
          data={product.brands}
          renderItem={({item}: any) => <BrandItem brand={item} />}
        />
      )}
    />
  );
};

export default ProductItem;
