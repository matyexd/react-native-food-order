import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/Responsive';
import {fonts} from '../../theme/Fonts';

export const styles = StyleSheet.create({
  titleIcon: {
    alignSelf: 'center',
    paddingRight: width(5),
  },
  titleText: {
    ...fonts.h2,
    color: '#000000',
    paddingLeft: width(8),
  },
  title: {
    flexDirection: 'row',
    marginBottom: height(20),
  },
  listTitle: {
    ...fonts.SecondaryText,
    color: '#000000',
    marginBottom: height(5),
  },
  listText: {
    ...fonts.PrimaryText,
    color: '#333333',
    marginVertical: height(5),
  },
  blockText: {
    marginVertical: height(20),
  },
});
