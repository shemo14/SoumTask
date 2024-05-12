import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 200,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 10,
    flex: 0.2,
  },
  variantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 5,
    flexWrap: 'wrap',
  },
  noSelectedVariants: {
    color: 'red',
    marginTop: 30,
  },
});
