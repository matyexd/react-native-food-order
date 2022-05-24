import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, width} from '../../utils/Responsive';

export const styles = StyleSheet.create({
  titleText: {
    ...fonts.h2,
    color: '#000000',
    paddingLeft: width(8),
  },
  title: {
    paddingHorizontal: width(20),
    flexDirection: 'row',
    marginBottom: height(16),
  },
  card: {
    flex: 1,
    marginBottom: height(8),
  },
  titleIcon: {
    alignSelf: 'center',
    paddingRight: width(5),
  },
  cardOnDay: {
    paddingHorizontal: width(20),
    marginBottom: height(20),
  },
});
