import {StyleSheet} from 'react-native';
import {fonts} from '../../../theme/Fonts';
import {height, sp, width} from '../../../utils/Responsive';

export const styles = StyleSheet.create({
  searchSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: width(8),
  },
  searchIcon: {
    paddingLeft: width(10),
  },
  iconClose: {
    paddingRight: width(10),
  },
  input: {
    ...fonts.PrimaryText,
    flex: 1,
    paddingLeft: width(10),
    paddingVertical: height(7),
    // padding: width(10),
    backgroundColor: '#fff',
    color: '#424242',
  },
});
