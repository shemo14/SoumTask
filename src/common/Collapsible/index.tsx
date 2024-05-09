import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

const Collapsible = ({header, body}: any) => {
  const [collapsed, setCollapsed] = useState(true);

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
            justifyContent: 'center',
          }}>
          {header()}
        </View>
        {!collapsed && (
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
