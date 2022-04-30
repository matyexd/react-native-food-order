import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, sp, width} from '../../utils/Responsive';
export const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingHorizontal: width(3),
    paddingVertical: height(3),
  },
  img: {
    height: height(280),
    width: width(369),
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
});
