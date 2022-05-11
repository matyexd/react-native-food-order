import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, width} from '../../utils/Responsive';

export const styles = StyleSheet.create({
  styleScreen: {
    backgroundColor: 'white',
  },

  mainList: {
    flex: 1,
  },
  card: {
    flex: 1,
    marginBottom: height(10),
    //justifyContent: 'center',
    //alignItems: 'center',
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
  dropdown: {
    marginTop: height(7),
    marginBottom: height(24),
  },
});
