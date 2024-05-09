import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Checkbox from '../Checkbox';

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
    <View
      style={{
        padding: 10,
        backgroundColor: '#ddd',
        marginBottom: 15,
        borderRadius: 10,
      }}>
      <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
        <View
          style={{
            height: 40,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Checkbox
            onChange={() => checkHandler()}
            checked={checked}
            style={{marginEnd: 10}}
          />
          {header()}
        </View>
        {!collapsed && body && (
          <View
            style={{
              height: 'auto',
              backgroundColor: '#ddd',
              borderTopWidth: !collapsed ? 1 : 0,
              borderTopColor: '#eee',
              paddingTop: !collapsed ? 10 : 0,
            }}>
            {body()}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
export default Collapsible;
