import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    checkBoxContainer: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#000',
      borderWidth: 0.5,
      borderRadius: 4,
    },
    iconContainer: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkIcon: {
      width: '75%',
      height: '75%',
      resizeMode: 'contain',
    },
  });
