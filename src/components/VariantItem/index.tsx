import React, {useState} from 'react';
import {Text, Checkbox} from '../../common';
import {View} from 'react-native';
const VariantItem = ({variant}: any) => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginStart: 15}}>
      <Checkbox
        onChange={() => setChecked(!checked)}
        checked={checked}
        style={{marginEnd: 10}}
      />
      <Text style={{marginBottom: 10}} type={'h4'}>
        {variant}
      </Text>
    </View>
  );
};
export default VariantItem;
