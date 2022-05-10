import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, sp, width} from '../../utils/Responsive';
export const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: height(10),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: height(12),
    paddingHorizontal: 2,
  },
  limitPrice: {
    flexDirection: 'row',
  },
  limitCount: {
    ...fonts.h2,
    color: '#000000',
  },
  limitLabel: {
    ...fonts.h2,
    color: '#000000',
  },
  icon: {
    alignSelf: 'center',
  },
});
