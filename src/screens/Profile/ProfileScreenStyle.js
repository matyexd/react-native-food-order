import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, width} from '../../utils/Responsive';

export const styles = StyleSheet.create({
  button: {
    marginBottom: width(8),
  },
  ava: {
    marginTop: height(30),
    alignItems: 'center',
    marginBottom: height(16),
  },
  name: {
    ...fonts.h2,
    color: '#333333',
    alignSelf: 'center',
    marginBottom: height(50),
  },
  title: {
    ...fonts.h2,
    color: '#000000',
  },
});
