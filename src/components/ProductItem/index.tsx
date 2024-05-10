import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Text, Collapsible} from '../../common';
import BrandItem from '../BrandItem';
import {checkProduct} from '../../features/products/requests';
import {useDispatch, useSelector} from 'react-redux';
import {Brand, Model, Variant} from '../../features/products/interfaces';

const ProductItem = ({product}: any) => {
  const selectedProducts = useSelector(
    state => state.products.selectedProducts,
  );
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const brandsIds = product.brands.map((brand: Brand) => brand.id);
  const variantsIds = product.brands.map((brand: Brand) =>
    brand.models.map((model: Model) =>
      model.variants.map((variant: Variant) => variant.id),
    ),
  );

  const checkHandler = async (isChecked: boolean) => {
    await dispatch(checkProduct({isChecked, ids: variantsIds.flat(2)}));
  };

  useEffect(() => {
    setChecked(selectedProducts.indexOf(product.id) !== -1);
  }, [selectedProducts]);

  useEffect(() => {
    const isAllBrandsSelected = brandsIds.every((brandId: string) =>
      selectedProducts.includes(brandId),
    );

    dispatch(checkProduct({isChecked: isAllBrandsSelected, ids: [product.id]}));
  }, [selectedProducts]);

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
