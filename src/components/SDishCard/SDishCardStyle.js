import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, sp, width} from '../../utils/Responsive';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: width(8),
  },
  img: {
    height: height(96),
    width: width(96),
    margin: height(8),
    borderRadius: width(6),
  },
  header: {
    ...fonts.SecondaryText,
    color: '#333333',
  },
  calorie: {
    ...fonts.h3,
    color: '#333333',
  },
  about: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: width(8),
    marginBottom: width(8),
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
  info: {
    flex: 1,
    flexDirection: 'column',
    marginTop: height(8),
  },
});
