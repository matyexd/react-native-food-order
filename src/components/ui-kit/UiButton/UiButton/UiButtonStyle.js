import {StyleSheet} from 'react-native';
import {height, sp, width} from '../../../../utils/Responsive';
import {fonts} from '../../../../theme/Fonts';
export const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: '#333333',
    borderRadius: width(8),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width(20),
    paddingVertical: height(14),
    flexDirection: 'row',
  },
  mainButtonText: {
    color: 'white',
    ...fonts.SecondaryText,
  },
});
