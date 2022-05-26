import {StyleSheet} from 'react-native';
import {fonts} from '../../../theme/Fonts';
import {height, width} from '../../../utils/Responsive';

export const styles = StyleSheet.create({
  container: {
    borderRadius: width(16),
    paddingHorizontal: width(8),
    paddingVertical: height(12),
  },
  price: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  priceText: {
    ...fonts.h2,
    color: '#333333',
  },
  priceIcon: {
    alignSelf: 'center',
  },
  dateText: {
    ...fonts.h4,
    color: '#333333',
  },
  order: {
    ...fonts.SecondaryText,
    color: '#333333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
