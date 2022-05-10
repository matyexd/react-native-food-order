import {StyleSheet} from 'react-native';
import {fonts} from '../../../theme/Fonts';
import {height, sp, width} from '../../../utils/Responsive';

export const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 2,
  },
  input: {
    flexDirection: 'row',
    borderWidth: width(1),
    borderColor: '#DDDDDD',
    borderRadius: height(8),
    marginBottom: height(8),
    boxSizing: 'border-box',
    paddingVertical: height(8),
  },
  inputText: {
    flexGrow: 5,
    ...fonts.PrimaryText,
    paddingVertical: 0,
  },
  searchIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  closeIcon: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
