import React from 'react';
import {Text} from '../../common';
import {View} from 'react-native';
import styles from './styles';

const SelectedVariantItem = ({item}: {item: string}) => {
  return (
    <View style={styles.container}>
      <Text type={'p3'} style={styles.text}>
        {item}
      </Text>
    </View>
  );
};

export default SelectedVariantItem;
