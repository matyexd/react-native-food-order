import {StyleSheet} from 'react-native';
import {fonts} from '../theme/Fonts';
import {height} from '../utils/Responsive';

export const styles = StyleSheet.create({
  textLabel: {
    marginBottom: height(5),
    color: 'grey',
    ...fonts.SecondaryTextSmall,
  },
});
