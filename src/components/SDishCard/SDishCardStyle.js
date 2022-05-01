import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, sp, width} from '../../utils/Responsive';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width(3),
    paddingVertical: height(3),
    borderWidth: width(1),
    borderColor: '#999999',
    boxSizing: 'border-box',
    borderRadius: width(8),
  },
  img: {
    height: height(106),
    width: width(155),
    marginBottom: height(8),
    borderTopLeftRadius: width(6),
    borderTopRightRadius: width(6),
  },
  header: {
    ...fonts.SecondaryText,
    color: 'black',
  },
  calorie: {
    ...fonts.PrimaryText,
    color: '#333333',
    alignSelf: 'center',
  },
  about: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    ...fonts.h2,
    color: '#333333',
  },
  icon: {
    alignSelf: 'center',
  },
});
