import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, width} from '../../utils/Responsive';

export const styles = StyleSheet.create({
  addContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  logo: {
    marginTop: height(70),
    marginBottom: height(20),
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
    paddingLeft: width(16),
    flex: 1,
  },

  inputError: {
    borderWidth: width(1),
    borderColor: 'red',
    flexDirection: 'row',
    borderRadius: height(8),
    boxSizing: 'border-box',
    paddingVertical: height(12),
  },

  inputData: {
    marginBottom: height(30),
  },
  input: {
    flexDirection: 'row',
    borderWidth: width(1),
    borderColor: '#999999',
    borderRadius: height(8),
    boxSizing: 'border-box',
    paddingVertical: height(12),
  },

  button: {
    marginTop: height(20),
  },

  loginError: {
    ...fonts.h3,
    color: 'red',
    marginLeft: width(15),
    marginTop: height(3),
    marginBottom: height(6),
  },

  generalErrorText: {
    ...fonts.PrimaryText,
    color: 'red',
  },

  generalError: {
    alignItems: 'center',
    marginBottom: height(20),
  },
});
