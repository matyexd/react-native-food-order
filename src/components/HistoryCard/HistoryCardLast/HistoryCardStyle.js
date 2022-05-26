import {StyleSheet} from 'react-native';
import {fonts} from '../../../theme/Fonts';
import {height, width} from '../../../utils/Responsive';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: width(8),
    paddingHorizontal: width(8),
    paddingVertical: height(12),
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'row',
  },
  priceText: {
    ...fonts.h2,
    color: '#333333',
  },
  priceIcon: {
    alignSelf: 'center',
  },
  dateText: {
    ...fonts.PrimaryText,
    alignSelf: 'center',
  },
});
