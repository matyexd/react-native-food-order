import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, width} from '../../utils/Responsive';

export const styles = StyleSheet.create({
  logo: {
    marginTop: height(70),
    alignItems: 'center',
  },
  hi: {
    ...fonts.h1,
    alignSelf: 'center',
    marginTop: height(150),
    marginBottom: height(8),
  },
  text: {
    alignSelf: 'center',
    ...fonts.PrimaryText,
    marginBottom: height(16),
  },

  inputText: {
    ...fonts.PrimaryText,
    paddingVertical: 0,
    flex: 1,
  },
  input: {
    flexDirection: 'row',
    borderWidth: width(1),
    borderColor: '#999999',
    borderRadius: height(8),
    marginBottom: height(15),
    boxSizing: 'border-box',
    paddingVertical: height(12),
  },
  button: {
    marginTop: height(50),
  },
});
