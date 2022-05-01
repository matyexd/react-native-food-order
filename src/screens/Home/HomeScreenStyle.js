import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, width} from '../../utils/Responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width(20),
  },
  mainList: {
    flex: 1,
  },
  card: {
    flex: 1,
    marginBottom: height(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: height(12),
    paddingHorizontal: 2,
  },
  limitPrice: {
    flexDirection: 'row',
  },
  limitCount: {
    ...fonts.h2,
    color: '#333333',
  },
  limitLabel: {
    ...fonts.SecondaryTextBig,
    color: '#333333',
  },
  icon: {
    alignSelf: 'center',
  },
  dropdown: {
    marginBottom: height(24),
  },
});
