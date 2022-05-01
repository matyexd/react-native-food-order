import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, width} from '../../utils/Responsive';

export const styles = StyleSheet.create({
  button: {
    marginBottom: width(8),
  },
  data1: {
    marginBottom: width(24),
  },
  data2: {
    marginBottom: width(50),
  },
  ava: {
    marginTop: height(70),
    alignItems: 'center',
    marginBottom: height(16),
  },
  name: {
    ...fonts.h2,
    color: '#333333',
    alignSelf: 'center',
  },
  status: {
    ...fonts.h3,
    color: '#333333',
    alignSelf: 'center',
    marginBottom: height(50),
  },
});
