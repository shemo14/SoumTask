import React from 'react';
import {Text} from '../../common';
import {View} from 'react-native';

const SelectedVariantItem = ({item}: {item: string}) => {
  return (
    <View
      style={{
        backgroundColor: '#999',
        padding: 5,
        margin: 2,
      }}>
      <Text type={'p3'} style={{color: '#fff'}}>
        {item}
      </Text>
    </View>
  );
};

export default SelectedVariantItem;
