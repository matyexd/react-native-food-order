import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, sp, width} from '../../utils/Responsive';
export const styles = StyleSheet.create({
  main: {
    flex: 1,
    //paddingHorizontal: width(20),
    paddingTop: height(12),
    paddingBottom: height(12),
    backgroundColor: 'white',
  },

  card: {
    flex: 1,
    marginBottom: height(10),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: height(12),
    paddingHorizontal: 20,
  },
  limitPrice: {
    flexDirection: 'row',
  },
  limitCount: {
    ...fonts.h2,
    color: '#000000',
  },
  limitCountRed: {
    ...fonts.h2,
    color: 'red',
  },
  limitLabel: {
    ...fonts.h2,
    color: '#000000',
  },
  icon: {
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#ffffff',
    padding: width(16),
  },
  buttonDisable: {
    backgroundColor: '#DDDDDD',
  },
});
