import {StyleSheet} from 'react-native';
import {height, sp, width} from './../../../utils/Responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputText: {
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
    borderRadius: height(8),
    paddingLeft: width(8),
    alignItems: 'center',
    paddingVertical: height(10),
    // boxSizing: 'border-box',
    marginBottom: height(8),
  },
  input: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: width(1),
    borderColor: '#DDDDDD',
    height: height(20),
  },
  searchIcon: {
    backgroundColor: 'white',
    justifyContent: 'center',
    // width: width(31),
    alignItems: 'flex-end',
    borderTopLeftRadius: height(8),
    borderBottomLeftRadius: height(8),
  },
});
