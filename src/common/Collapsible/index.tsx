import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Checkbox from '../Checkbox';
import styles from './styles.tsx';

const Collapsible = ({header, body, onChecked, isChecked}: any) => {
  const [collapsed, setCollapsed] = useState(true);
  const [checked, setChecked] = useState(isChecked);
  const checkHandler = () => {
    onChecked(!checked);
    setChecked(!checked);
  };
  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
        <View style={styles.row}>
          <Checkbox
            onChange={() => checkHandler()}
            checked={checked}
            style={styles.checkbox}
          />
          {header()}
        </View>
        {!collapsed && body && (
          <View
            style={[
              styles.body,
              {
                borderTopWidth: !collapsed ? 1 : 0,
                paddingTop: !collapsed ? 10 : 0,
              },
            ]}>
            {body()}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
export default Collapsible;
