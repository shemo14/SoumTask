import React, {useState, useLayoutEffect} from 'react';
import {TouchableOpacity, ViewProps, Image} from 'react-native';
import Animated, {ZoomIn, ZoomOut} from 'react-native-reanimated';
import styles from './styles';

interface CheckBoxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckBoxProps & ViewProps> = props => {
  const {checked = false, style, onChange, disabled} = props;
  const [value, setValue] = useState<boolean>(checked);

  const stylesWithTheme = styles();

  const toggleCheckBoxHandler = () => {
    setValue(!value);
    onChange(!value);
  };

  useLayoutEffect(() => {
    if (checked == value) {
      return;
    }
    setValue(checked);
  }, [checked, value]);

  return (
    <TouchableOpacity
      style={[stylesWithTheme.checkBoxContainer, style]}
      disabled={disabled}
      activeOpacity={0.75}
      onPress={toggleCheckBoxHandler}
      hitSlop={{top: 16, left: 16, right: 16, bottom: 16}}>
      {value && (
        <Animated.View
          entering={ZoomIn.duration(150)}
          exiting={ZoomOut.duration(100)}
          style={stylesWithTheme.iconContainer}>
          <Image
            source={require('../../assets/images/check.png')}
            style={{width: 20, height: 20}}
          />
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
