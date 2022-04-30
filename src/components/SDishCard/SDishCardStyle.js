import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, sp, width} from '../../utils/Responsive';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width(3),
    paddingVertical: height(3),
    borderWidth: width(1),
    borderColor: 'black',
    boxSizing: 'border-box',
    borderRadius: width(8),
    width: width(165),
    height: height(198),
  },
  img: {
    height: height(106),
    width: width(155),
    marginBottom: height(8),
  },
  header: {
    ...fonts.SecondaryText,
    color: 'black',
  },
  calorie: {
    ...fonts.PrimaryText,
    color: '#333333',
  },
  about: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'row',
  },
});
